"use client";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useEffect } from "react";


import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
   const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) return null; 
  if (!isSignedIn) return null;
  return (<DashboardLayout />)
}