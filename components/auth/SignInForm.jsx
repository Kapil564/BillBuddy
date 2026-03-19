"use client";

import { useSignIn } from "@clerk/nextjs/legacy";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Sign in failed. Please check your credentials.");
      }
    } catch (err) {
      const msg = err?.errors?.[0]?.longMessage || err?.errors?.[0]?.message || "Something went wrong.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 cursor-pointer">
      {error && (
        <div className="rounded-xl border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="space-y-1.5">
        <label htmlFor="signin-email" className="block text-xs font-medium text-[#2e2c2a] uppercase tracking-wide">
          Email
        </label>
        <input
          id="signin-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-[#d6d0c4] bg-[#eae7df] px-4 py-3 text-sm text-[#1c1c1a] placeholder-[#b8b2aa] outline-none transition-all focus:border-[#2d4a3e] focus:ring-1 focus:ring-[#2d4a3e]/20"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="signin-password" className="block text-xs font-medium text-[#2e2c2a] uppercase tracking-wide">
          Password
        </label>
        <input
          id="signin-password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-xl border border-[#d6d0c4] bg-[#eae7df] px-4 py-3 text-sm text-[#1c1c1a] placeholder-[#b8b2aa] outline-none transition-all focus:border-[#2d4a3e] focus:ring-1 focus:ring-[#2d4a3e]/20"
        />
      </div>

      <button
        id="signin-submit"
        type="submit"
        disabled={loading || !isLoaded}
        className="w-full cursor-pointer rounded-xl bg-[#2d4a3e] px-4 py-3 text-sm font-semibold text-[#f4f1eb] transition-all hover:bg-[#1e3329] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
