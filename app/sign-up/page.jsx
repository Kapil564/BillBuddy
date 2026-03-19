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
              Create account
            </h1>
            <p className="text-[#7a7570] text-sm">
              Join Bill Buddy to split expenses with friends
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#eae7df] border border-[#d6d0c4] rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-[#1c1c1a] text-xs font-medium">Instant Split</div>
            </div>
            <div className="bg-[#eae7df] border border-[#d6d0c4] rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🏦</div>
              <div className="text-[#1c1c1a] text-xs font-medium">UPI Native</div>
            </div>
            <div className="bg-[#eae7df] border border-[#d6d0c4] rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-[#1c1c1a] text-xs font-medium">Rich Analytics</div>
            </div>
            <div className="bg-[#eae7df] border border-[#d6d0c4] rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🔒</div>
              <div className="text-[#1c1c1a] text-xs font-medium">Privacy First</div>
            </div>
          </div>

          {/* OAuth Buttons */}
          <OAuthButtons />

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#d6d0c4]"></div>
            <span className="text-[#7a7570] text-sm">or</span>
            <div className="flex-1 h-px bg-[#d6d0c4]"></div>
          </div>

          {/* Sign Up Form */}
          <SignUpForm />

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-[#7a7570] text-sm">
              Already have an account?{" "}
              <a href="/sign-in" className="text-[#2d4a3e] hover:text-[#1e3329] font-medium">
                Sign in
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-[#d6d0c4]">
            <p className="text-[#b8b2aa] text-xs">Secured by Clerk</p>
          </div>

        </div>
      </div>
    </div>
  );
}