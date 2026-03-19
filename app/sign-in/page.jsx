"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import OAuthButtons from "@/components/auth/OAuthButtons";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);
  if (!isLoaded || isSignedIn) {
    return (
      <div className="min-h-screen bg-[#eae7df] flex items-center justify-center px-4">
        <div className="text-[#1c1c1a]/40 text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eae7df] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#f4f1eb] border border-[#d6d0c4] rounded-2xl p-8 shadow-sm">
        <div className="space-y-6">

          {/* Title */}
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-[#1c1c1a] mb-2">
              Welcome back
            </h1>
            <p className="text-[#7a7570] text-sm">
              Sign in to your Bill Buddy account
            </p>
          </div>

          {/* OAuth Buttons */}
          <OAuthButtons />

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#d6d0c4]"></div>
            <span className="text-[#7a7570] text-sm">or</span>
            <div className="flex-1 h-px bg-[#d6d0c4]"></div>
          </div>

          {/* Sign In Form */}
          <SignInForm />

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-[#7a7570] text-sm">
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="text-[#2d4a3e] hover:text-[#1e3329] font-medium">
                Sign up
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}