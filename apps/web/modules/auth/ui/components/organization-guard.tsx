"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts/auth-layout";
import { AuthGuard } from "./auth-guard";
import { OrgSelectView } from "../views/org-select-view";

export const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
    const { organization } = useOrganization();

    if (!organization) {
        return (
            <AuthLayout>
                <p>Create or select an organization to continue.</p>
            </AuthLayout>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}