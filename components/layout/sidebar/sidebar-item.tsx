"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  href: string;
}

export default function SidebarItem({
  icon: Icon,
  title,
  href,
}: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={`h-fit transition-all duration-200 hover:bg-blue-300/40 ${active && "bg-blue-300/40 text-blue-700 hover:bg-blue-300/40 hover:text-blue-700"} `}
      >
        <Link href={href} className="flex items-center gap-2">
          <div className="rounded-xl px-2 transition-all duration-200">
            <Icon
              size={18}
              className={`transition-all duration-200 ${active ? "text-blue-700" : "text-gray-600"} `}
            />
          </div>

          <span
            className={`font-medium transition-all duration-200 ${!active && "text-muted-foreground"} `}
          >
            {title}
          </span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
