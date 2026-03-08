import OAuthButtons from "@/components/auth/OAuthButtons";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#0d0e1a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#13141f] border border-white/8 rounded-2xl p-8 shadow-2xl">
        <div className="space-y-6">
          {/* Title */}
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-white mb-2">
              Welcome back
            </h1>
            <p className="text-white/70 text-sm">
              Sign in to your Bill Buddy account
            </p>
          </div>

          {/* OAuth Buttons */}
          <OAuthButtons />

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-white/50 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Sign In Form */}
          <SignInForm />

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="text-indigo-400 hover:text-indigo-300 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}