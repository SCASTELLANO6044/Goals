"use client";

import { Hero47 } from "@/components/hero47";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const name = session.user?.name || "User";``
      router.push("/profile/" + encodeURIComponent(name));
    }
  }, [session, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-black">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-white"></div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (session) {
    // Show loading while redirecting
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-black">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-white"></div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Redirecting to profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero47 />
    </div>
  );
}
