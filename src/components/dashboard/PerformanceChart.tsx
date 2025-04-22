
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const monthlyData = [
  { name: "Jan", value: 10000 },
  { name: "Feb", value: 10800 },
  { name: "Mar", value: 11500 },
  { name: "Apr", value: 10900 },
  { name: "May", value: 12300 },
  { name: "Jun", value: 13200 },
  { name: "Jul", value: 14100 },
  { name: "Aug", value: 15000 },
  { name: "Sep", value: 16200 },
];

interface PerformanceChartProps {
  title?: string;
  className?: string;
}

export function PerformanceChart({ title = "Quarterly Performance", className }: PerformanceChartProps) {
  return (
    <Card className={`overflow-hidden card-gradient animate-scale-in ${className}`}>
      <CardHeader>
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="name" 
                stroke="#8E9196"
                tick={{ fill: '#8E9196' }}
              />
              <YAxis 
                stroke="#8E9196"
                tick={{ fill: '#8E9196' }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C', 
                  borderColor: '#333',
                  color: '#FFF' 
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#F97316" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#F97316' }}
                activeDot={{ r: 6, fill: '#F97316' }}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
