"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold">Create account</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Join Bill Buddy to split expenses with friends
        </p>
      </div>
      {/* Features highlight */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-card border border-border/30 rounded-xl">
        <div className="text-center space-y-1">
          <div className="text-lg">⚡</div>
          <p className="text-xs text-muted-foreground font-medium">Instant Split</p>
        </div>
        <div className="text-center space-y-1">
          <div className="text-lg">🏦</div>
          <p className="text-xs text-muted-foreground font-medium">UPI Native</p>
        </div>
        <div className="text-center space-y-1">
          <div className="text-lg">📊</div>
          <p className="text-xs text-muted-foreground font-medium">Rich Analytics</p>
        </div>
        <div className="text-center space-y-1">
          <div className="text-lg">🔒</div>
          <p className="text-xs text-muted-foreground font-medium">Privacy First</p>
        </div>
      </div>
      {/* Clerk Sign Up Component */}
      <div className="w-full">
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-card border border-border/50 rounded-2xl shadow-lg backdrop-blur-sm",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton:
                "w-full h-11 rounded-lg border border-border/50 bg-background hover:bg-secondary transition-colors font-sans text-sm font-medium flex items-center justify-center gap-2",
              socialButtonsBlockButtonText: "hidden",
              dividerLine: "bg-border/30",
              dividerText: "text-muted-foreground text-xs",
              formFieldLabel: "text-foreground font-sans text-sm font-medium",
              formFieldInput:
                "h-10 px-3 rounded-lg border border-border/50 bg-background hover:bg-secondary focus:bg-secondary focus:border-primary/50 focus:outline-none transition-all text-foreground font-sans text-sm",
              formButtonPrimary:
                "w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-sans font-medium transition-all",
              footerActionLink: "text-primary hover:text-primary/80 font-medium text-sm",
              identifierField: "text-foreground font-sans",
              alternativeMethodsBlockButton:
                "text-primary hover:text-primary/80 font-medium text-xs",
              otpCodeFieldInput:
                "h-10 px-2 rounded-lg border border-border/50 bg-background focus:border-primary/50 focus:outline-none transition-all text-foreground text-center font-mono text-lg",
              backButton: "text-primary hover:text-primary/80",
              legalText: "text-muted-foreground text-xs",
            },
            variables: {
              colorPrimary: "rgb(94, 96, 206)",
              colorForeground: "#eeeaf8",
              colorMutedForeground: "#a8a8c0",
              colorBackground: "#0f0f1a",
              colorInput: "#1a1a2e",
              colorInputBorder: "rgba(255, 255, 255, 0.1)",
              colorNeutral: "#2a2a3e",
              colorSuccess: "#7ae582",
              colorWarning: "#fbbf24",
              colorDanger: "rgb(239, 68, 68)",
              colorShimmer: "#0f0f1a",
              fontSize: "14px",
              fontFamily: "inherit",
              borderRadius: "0.5rem",
            },
          }}
          redirectUrl="/dashboard"
          signInUrl="/auth/sign-in"
        />
      </div>
      {/* Additional help text */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/30" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-background text-muted-foreground">
            Already have an account?{" "}
            <a href="/auth/sign-in" className="text-primary hover:text-primary/80 font-medium">
              Sign in
            </a>
          </span>
        </div>
      </div>
      {/* Terms note */}
      <p className="text-center text-xs text-muted-foreground">
        By creating an account, you agree to our{" "}
        <a href="#" className="text-primary hover:text-primary/80 font-medium">
          Terms of Service
        </a>
        {" "}and{" "}
        <a href="#" className="text-primary hover:text-primary/80 font-medium">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
