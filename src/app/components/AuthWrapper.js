"use client"; // ✅ Marks this as a Client Component

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);

    if (!auth && pathname !== "/login") {
      router.push("/login"); // ✅ Redirect to login if not authenticated
    }
  }, [pathname, router]);

  if (!isAuthenticated && pathname !== "/login") {
    return null; // ✅ Prevent unauthorized page rendering before redirecting
  }

  return <>{children}</>;
}
