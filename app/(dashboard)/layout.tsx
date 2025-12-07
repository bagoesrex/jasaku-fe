"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import AppSidebar from "@/components/layout/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return;

  if (!user) {
    router.push("/auth/login");
    return null;
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {/* <SidebarTrigger /> */}
        <DashboardHeader />
        <div className="min-h-screen bg-blue-100/30 pt-15">{children}</div>
      </main>
    </SidebarProvider>
  );
}
