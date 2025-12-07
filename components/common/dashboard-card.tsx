import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface DashboardCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  percentage: string;
}

export default function DashboardCard({
  icon: Icon,
  label,
  value,
  percentage,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <Icon
            className="rounded-md bg-green-300/50 p-2 text-green-700"
            size={37}
          />
          {percentage}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">{label}</p>
          <p className="text-xl font-bold text-black">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
