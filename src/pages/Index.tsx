
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { AreaChart, DollarSign, Wallet } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-crypto-gray-light mt-1">
            View your portfolio performance and recent activity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Total Contribution"
            value="$12,500.00"
            icon={<DollarSign />}
            trend={{ value: "12% since last month", positive: true }}
          />
          <StatCard
            title="Current Value"
            value="$15,800.00"
            icon={<Wallet />}
            trend={{ value: "26.4% all time", positive: true }}
          />
          <StatCard
            title="Quarterly Return"
            value="18.2%"
            icon={<AreaChart />}
            trend={{ value: "3.5% this month", positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <PerformanceChart className="lg:col-span-2" />
          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
