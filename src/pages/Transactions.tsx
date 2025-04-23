
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Download, Filter, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Transactions = () => {
  const [transactionType, setTransactionType] = useState<string>("all");
  const [timePeriod, setTimePeriod] = useState<string>("30");
  const { toast } = useToast();

  const { data: transactions, isLoading, error } = useQuery({
    queryKey: ['transactions', transactionType, timePeriod],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error("User is not authenticated");
      }
      
      let query = supabase
        .from('transactions')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });
        
      // Filter by transaction type if not "all"
      if (transactionType !== "all") {
        query = query.eq('type', transactionType);
      }
      
      // Apply time period filter
      if (timePeriod !== "all") {
        const daysAgo = parseInt(timePeriod);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        query = query.gte('created_at', date.toISOString());
      }
      
      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      return data;
    },
    meta: {
      onSettled: (data, error) => {
        if (error) {
          toast({
            title: "Error loading transactions",
            description: error.message,
            variant: "destructive"
          });
        }
      }
    }
  });

  const handleExport = () => {
    // Implement export functionality
    toast({
      title: "Export functionality",
      description: "This feature is not yet implemented.",
    });
  };

  const handleTypeChange = (value: string) => {
    setTransactionType(value);
  };

  const handlePeriodChange = (value: string) => {
    setTimePeriod(value);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
            <p className="text-crypto-gray-light mt-1">
              View and manage your transaction history
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden card-gradient animate-scale-in">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <CardTitle className="text-xl font-medium">All Transactions</CardTitle>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <Select defaultValue={transactionType} onValueChange={handleTypeChange}>
                <SelectTrigger className="w-[150px] bg-crypto-gray-dark border-crypto-gray-dark/50">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-crypto-gray-dark border-crypto-gray-dark/50 text-white">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="deposit">Deposits</SelectItem>
                  <SelectItem value="withdrawal">Withdrawals</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue={timePeriod} onValueChange={handlePeriodChange}>
                <SelectTrigger className="w-[150px] bg-crypto-gray-dark border-crypto-gray-dark/50">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent className="bg-crypto-gray-dark border-crypto-gray-dark/50 text-white">
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-crypto-gray-light" />
              </div>
            ) : error ? (
              <div className="p-8 text-center text-red-500">
                Error loading transactions. Please try again.
              </div>
            ) : transactions && transactions.length > 0 ? (
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50 hover:bg-crypto-gray-dark/70 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${tx.type === "deposit" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                        {tx.type === "deposit" ? (
                          <ArrowDown className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowUp className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium capitalize">{tx.type}</p>
                        <p className="text-xs text-crypto-gray-light">{tx.description || `${tx.type} transaction`}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-medium">${typeof tx.amount === 'number' ? tx.amount.toLocaleString() : tx.amount}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-crypto-gray-light">
                          {new Date(tx.created_at).toLocaleDateString()}
                        </p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
                          {tx.status || 'completed'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-crypto-gray-light">
                No transactions found. Try adjusting your filters or make a deposit to get started.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
