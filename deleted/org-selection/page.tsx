"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";

export default function OrgSelectionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Select or Create an Organization</h1>
      <OrganizationSwitcher />
    </div>
  );
}
