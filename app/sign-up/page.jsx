"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import OAuthButtons from "@/components/auth/OAuthButtons";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  // Don't render the form if user is already signed in
  if (!isLoaded || isSignedIn) {
    return (
      <div className="min-h-screen bg-[#0d0e1a] flex items-center justify-center px-4">
        <div className="text-white/50 text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0e1a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#13141f] border border-white/8 rounded-2xl p-8 shadow-2xl">
        <div className="space-y-6">
          {/* Title */}
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-white mb-2">
              Create account
            </h1>
            <p className="text-white/70 text-sm">
              Join Bill Buddy to split expenses with friends
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-white text-xs font-medium">Instant Split</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🏦</div>
              <div className="text-white text-xs font-medium">UPI Native</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-white text-xs font-medium">Rich Analytics</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🔒</div>
              <div className="text-white text-xs font-medium">Privacy First</div>
            </div>
          </div>

          {/* OAuth Buttons */}
          <OAuthButtons />

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-white/50 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Sign Up Form */}
          <SignUpForm />

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              Already have an account?{" "}
              <a href="/sign-in" className="text-indigo-400 hover:text-indigo-300 font-medium">
                Sign in
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-white/50 text-xs">Secured by Clerk</p>
          </div>
        </div>
      </div>
    </div>
  );
}