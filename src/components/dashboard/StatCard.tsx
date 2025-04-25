
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
    <Card className={cn(
      "overflow-hidden glass-card bg-gradient-to-br from-glass-light/10 to-glass/5 border-glass-border animate-scale-in hover:shadow-glow-sm transition-all duration-300 group",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-crypto-gray-light">
          {title}
        </CardTitle>
        {icon && (
          <div className="relative p-1.5 rounded-full bg-glass-light/20 group-hover:bg-glass-light/40 transition-all duration-500">
            <div className="h-4 w-4 text-crypto-orange group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80 group-hover:from-crypto-orange group-hover:via-crypto-purple group-hover:to-crypto-blue transition-all duration-500">
          {value}
        </div>
        {trend && (
          <p className={cn(
            "text-xs mt-1 flex items-center",
            trend.positive ? "text-green-500" : "text-red-500"
          )}>
            <span className="mr-1">
              {trend.positive ? "↑" : "↓"}
            </span>
            {trend.positive ? "+" : ""}{trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
