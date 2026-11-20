import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const context = { exports: {} };
const source = readFileSync(
  new URL("../src/lib/content-defaults.ts", import.meta.url),
  "utf8",
);
vm.runInNewContext(
  ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  context,
);
const { mergeContentDefaults } = context.exports;

function exportsFrom(relativePath, imports = {}) {
  const scoped = {
    exports: {},
    require: (id) => {
      if (!(id in imports)) throw new Error(`Unexpected import ${id}`);
      return imports[id];
    },
  };
  vm.runInNewContext(
    ts.transpileModule(
      readFileSync(new URL(relativePath, import.meta.url), "utf8"),
      { compilerOptions: { module: ts.ModuleKind.CommonJS } },
    ).outputText,
    scoped,
  );
  return scoped.exports;
}

const fallback = exportsFrom("../src/content/site.ts");
const legacy = exportsFrom("../src/content/legacy-copy.ts");

function dataLoader(settings, services = []) {
  return exportsFrom("../src/lib/data.ts", {
    "server-only": {},
    react: { cache: (fn) => fn },
    "./supabase": {
      createPublicClient: () => ({
        from: () => ({
          select: () => ({
            eq: () => ({ single: async () => ({ data: settings }) }),
            order: async () => ({ data: services, error: null }),
          }),
        }),
      }),
    },
    "@/content/site": fallback,
    "@/content/legacy-copy": legacy,
    "./content-defaults": { mergeContentDefaults },
  });
}

test("untouched CMS copy adopts the current default", () => {
  const result = mergeContentDefaults(
    { headline: "New headline", email: "owner@example.com" },
    { headline: "Old headline", email: "custom@example.com" },
    { headline: "Old headline" },
  );
  assert.equal(result.headline, "New headline");
  assert.equal(result.email, "custom@example.com");
});

test("custom copy and deliberate blank fields remain editable", () => {
  assert.equal(
    mergeContentDefaults(
      { headline: "New" },
      { headline: "Custom" },
      { headline: "Old" },
    ).headline,
    "Custom",
  );
  assert.equal(
    mergeContentDefaults(
      { headline: "New" },
      { headline: "" },
      { headline: "Old" },
    ).headline,
    "",
  );
});

test("missing CMS data uses current defaults", () => {
  assert.equal(
    mergeContentDefaults({ headline: "New" }, null, { headline: "Old" })
      .headline,
    "New",
  );
});

test("the real settings loader refreshes old defaults and preserves custom contact copy", async () => {
  const settings = await dataLoader({
    hero: legacy.LEGACY_COPY.hero,
    profile: legacy.LEGACY_COPY.profile,
    contact: { headline: "My custom invitation" },
  }).getSettings();
  assert.equal(settings.hero.headline, fallback.HERO.headline);
  assert.equal(settings.profile.role, fallback.PROFILE.role);
  assert.equal(settings.profile.location, fallback.PROFILE.location);
  assert.equal(settings.contact.headline, "My custom invitation");
});

test("valid custom locations remain editable", async () => {
  const settings = await dataLoader({
    profile: { location: "London, United Kingdom" },
  }).getSettings();
  assert.equal(settings.profile.location, "London, United Kingdom");
});

test("the real services loader refreshes exact defaults but keeps editorial changes", async () => {
  const title = "Website Development";
  const rows = [
    { title, description: legacy.LEGACY_SERVICE_COPY[title], icon: "code" },
    {
      title: "App Development",
      description: "Custom service description",
      icon: "smartphone",
    },
  ];
  const services = await dataLoader(null, rows).getServices();
  assert.equal(
    services[0].description,
    fallback.SERVICES.find((item) => item.title === title).description,
  );
  assert.equal(services[1].description, "Custom service description");
});
