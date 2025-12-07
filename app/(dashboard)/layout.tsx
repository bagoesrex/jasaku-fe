import DashboardHeader from "@/components/layout/header/dashboard-header";
import AppSidebar from "@/components/layout/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
