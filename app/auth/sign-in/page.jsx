"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Sign in to your Bill Buddy account
        </p>
      </div>

      {/* Clerk Sign In Component */}
      <div className="w-full">
        <SignIn
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
            },
            variables: {
              colorPrimary: "rgb(94, 96, 206)",
              colorText: "#eeeaf8",
              colorTextSecondary: "#a8a8c0",
              colorBackground: "#0f0f1a",
              colorInputBackground: "#1a1a2e",
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
          signUpUrl="/auth/sign-up"
        />
      </div>

      {/* Additional help text */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/30" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-background text-muted-foreground">
            First time here?{" "}
            <a href="/auth/sign-up" className="text-primary hover:text-primary/80 font-medium">
              Create account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
