// components/providers.tsx
"use client";

import * as React from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL ?? "https://posh-octopus-300.convex.cloud";

  const convex = React.useMemo(() => new ConvexReactClient(convexUrl), [convexUrl]);

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
