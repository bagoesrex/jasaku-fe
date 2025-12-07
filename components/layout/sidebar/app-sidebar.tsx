"use client";

import { LayoutDashboard, List, MessageSquare } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarItem from "./sidebar-item";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Chat AI",
    url: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Transaksi",
    url: "/transaction",
    icon: List,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-b-gray-200 px-4 py-4">
        <h1 className="text-xl font-bold">
          Catat<span className="text-blue-700">In</span>
        </h1>
      </SidebarHeader>
      <SidebarContent className="mt-3 px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  href={item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
