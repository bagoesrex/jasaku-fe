import { LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";

interface CustomBadgeProps {
  icon: LucideIcon;
  label: string;
}

export default function CustomBadge({ icon: Icon, label }: CustomBadgeProps) {
  return (
    <Badge className="flex items-center justify-center gap-2 border-blue-300 bg-blue-300/40 text-blue-700">
      <Icon className="h-4 w-4 animate-pulse" />
      {label}
    </Badge>
  );
}
