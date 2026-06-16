import type React from "react";
import { useAuth } from "./AuthContext.tsx";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }: {children: React.ReactNode}) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to = "/dashboard" />
    }

    return <>{children}</>;
}
