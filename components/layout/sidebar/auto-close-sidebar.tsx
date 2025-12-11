"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";

export default function AutoCloseSidebar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname, isMobile, setOpenMobile]);

  return null;
}
