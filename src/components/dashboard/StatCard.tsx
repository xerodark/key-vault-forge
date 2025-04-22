
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden card-gradient animate-scale-in", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-crypto-gray-light">
          {title}
        </CardTitle>
        {icon && <div className="h-5 w-5 text-crypto-orange">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "text-xs mt-1",
            trend.positive ? "text-green-500" : "text-red-500"
          )}>
            {trend.positive ? "+" : ""}{trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
