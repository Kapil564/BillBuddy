"use client";

import { useSignUp } from "@clerk/nextjs/legacy";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [step, setStep] = useState("register"); // "register" | "verify"
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setStep("verify");
    } catch (err) {
      const msg = err?.errors?.[0]?.longMessage || err?.errors?.[0]?.message || "Something went wrong.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err) {
      const msg = err?.errors?.[0]?.longMessage || err?.errors?.[0]?.message || "Invalid code.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (step === "verify") {
    return (
      <form onSubmit={handleVerify} className="space-y-4">
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-sm text-indigo-300">
          We sent a verification code to <span className="font-semibold text-white">{email}</span>. Please check your inbox.
        </div>

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="space-y-1.5">
          <label htmlFor="verify-code" className="block text-xs font-medium text-white/60 uppercase tracking-wide">
            Verification Code
          </label>
          <input
            id="verify-code"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter 6-digit code"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none tracking-widest text-center transition-all focus:border-indigo-500/70 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30"
          />
        </div>

        <button
          id="verify-submit"
          type="submit"
          disabled={loading || !isLoaded}
          className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying…" : "Verify Email"}
        </button>

        <button
          type="button"
          onClick={() => { setStep("register"); setError(""); setCode(""); }}
          className="w-full text-center text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          ← Back to sign up
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor="signup-firstname" className="block text-xs font-medium text-white/60 uppercase tracking-wide">
            First Name
          </label>
          <input
            id="signup-firstname"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Riya"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-indigo-500/70 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="signup-lastname" className="block text-xs font-medium text-white/60 uppercase tracking-wide">
            Last Name
          </label>
          <input
            id="signup-lastname"
            type="text"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Sharma"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-indigo-500/70 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="signup-email" className="block text-xs font-medium text-white/60 uppercase tracking-wide">
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-indigo-500/70 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="signup-password" className="block text-xs font-medium text-white/60 uppercase tracking-wide">
          Password
        </label>
        <input
          id="signup-password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Min. 8 characters"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-indigo-500/70 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30"
        />
      </div>

      <button
        id="signup-submit"
        type="submit"
        disabled={loading || !isLoaded}
        className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
