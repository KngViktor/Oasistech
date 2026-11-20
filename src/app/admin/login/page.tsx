import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-bg-card p-8">
        <h1 className="font-display text-2xl font-bold">
          Victor<span className="text-accent">.</span> Admin
        </h1>
        <p className="mt-1 mb-6 text-sm text-muted">Sign in to manage your site content.</p>
        <LoginForm />
      </div>
    </div>
  );
}
