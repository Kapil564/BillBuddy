"use client";

import { useSignUp } from "@clerk/nextjs/legacy";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [step, setStep] = useState("register");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-[#d6d0c4] bg-[#eae7df] px-4 py-3 text-sm text-[#1c1c1a] placeholder-[#b8b2aa] outline-none transition-all focus:border-[#2d4a3e] focus:ring-1 focus:ring-[#2d4a3e]/20";

  const labelClass =
    "block text-xs font-medium text-[#7a7570] uppercase tracking-wide";

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    setLoading(true);
    setError("");
    try {
      await signUp.create({ firstName, lastName, emailAddress: email, password });
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

        {/* Info banner */}
        <div className="rounded-xl border border-[#2d4a3e]/25 bg-[#2d4a3e]/8 px-4 py-3 text-sm text-[#2d4a3e]">
          We sent a verification code to{" "}
          <span className="font-semibold text-[#1c1c1a]">{email}</span>. Please check your inbox.
        </div>

        {error && (
          <div className="rounded-xl border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="space-y-1.5">
          <label htmlFor="verify-code" className={labelClass}>
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
            className={`${inputClass} tracking-widest text-center`}
          />
        </div>

        <button
          id="verify-submit"
          type="submit"
          disabled={loading || !isLoaded}
          className="w-full rounded-xl bg-[#2d4a3e] px-4 py-3 text-sm font-semibold text-[#f4f1eb] transition-all hover:bg-[#1e3329] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying…" : "Verify Email"}
        </button>

        <button
          type="button"
          onClick={() => { setStep("register"); setError(""); setCode(""); }}
          className="w-full text-center text-sm text-[#7a7570] hover:text-[#1c1c1a] transition-colors"
        >
          ← Back to sign up
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4">

      {error && (
        <div className="rounded-xl border border-red-400/40 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* First / Last name */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor="signup-firstname" className={labelClass}>First Name</label>
          <input
            id="signup-firstname"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Riya"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="signup-lastname" className={labelClass}>Last Name</label>
          <input
            id="signup-lastname"
            type="text"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Sharma"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="signup-email" className={labelClass}>Email</label>
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label htmlFor="signup-password" className={labelClass}>Password</label>
        <input
          id="signup-password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Min. 8 characters"
          className={inputClass}
        />
      </div>

      <button
        id="signup-submit"
        type="submit"
        disabled={loading || !isLoaded}
        className="w-full rounded-xl bg-[#2d4a3e] px-4 py-3 text-sm font-semibold text-[#f4f1eb] transition-all hover:bg-[#1e3329] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}