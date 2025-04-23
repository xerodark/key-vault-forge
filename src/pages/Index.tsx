
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { AreaChart, DollarSign, Wallet } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
        
      if (error) {
        toast({
          title: "Error fetching profile",
          description: error.message,
          variant: "destructive",
        });
        return null;
      }
      
      return data;
    }
  });

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
            value={`$${profile?.total_contribution?.toLocaleString() ?? '0.00'}`}
            icon={<DollarSign />}
            trend={{ value: `${profile?.monthly_growth ?? 0}% since last month`, positive: (profile?.monthly_growth ?? 0) > 0 }}
          />
          <StatCard
            title="Current Value"
            value={`$${profile?.current_value?.toLocaleString() ?? '0.00'}`}
            icon={<Wallet />}
            trend={{ 
              value: `${((profile?.current_value ?? 0) / (profile?.total_contribution ?? 1) * 100 - 100).toFixed(1)}% all time`, 
              positive: (profile?.current_value ?? 0) > (profile?.total_contribution ?? 0) 
            }}
          />
          <StatCard
            title="Quarterly Return"
            value={`${profile?.quarterly_return ?? 0}%`}
            icon={<AreaChart />}
            trend={{ value: `${profile?.monthly_growth ?? 0}% this month`, positive: (profile?.monthly_growth ?? 0) > 0 }}
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
