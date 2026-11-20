"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(signIn, null);

  const field =
    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <form action={action} className="space-y-4">
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="password" type="password" required placeholder="Password" className={field} />
      {state?.error && <p className="text-sm text-red-400">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 font-semibold text-[#06150d] transition hover:bg-accent-dim disabled:opacity-60"
      >
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Sign in
      </button>
    </form>
  );
}
