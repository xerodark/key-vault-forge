
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export function RecentTransactions() {
  const { toast } = useToast();
  
  const { data: transactions, isLoading, error } = useQuery({
    queryKey: ['recent-transactions'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return [];
      
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false })
        .limit(4);
        
      if (error) {
        toast({
          title: "Error fetching transactions",
          description: error.message,
          variant: "destructive",
        });
        return [];
      }
      
      return data;
    }
  });

  return (
    <Card className="overflow-hidden card-gradient animate-scale-in">
      <CardHeader>
        <CardTitle className="text-md font-medium">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center p-4">
            <Loader2 className="h-6 w-6 animate-spin text-crypto-gray-light" />
          </div>
        ) : error ? (
          <div className="p-4 text-center text-sm text-red-500">
            Unable to load transactions
          </div>
        ) : transactions && transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${tx.type === 'deposit' ? "bg-green-500/20" : "bg-red-500/20"}`}>
                    {tx.type === 'deposit' ? (
                      <ArrowDown className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowUp className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{tx.type}</p>
                    <p className="text-xs text-crypto-gray-light">
                      {new Date(tx.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${typeof tx.amount === 'number' ? tx.amount.toLocaleString() : tx.amount}</p>
                  <p className="text-xs text-green-500 capitalize">{tx.status || 'completed'}</p>
                </div>
              </div>
            ))}
            <Link to="/transactions" className="block w-full text-center text-sm text-crypto-orange hover:text-crypto-orange-light transition-colors py-2">
              View All Transactions
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 text-center text-sm text-crypto-gray-light">
              No recent transactions
            </div>
            <Link to="/deposit" className="block w-full text-center text-sm text-crypto-orange hover:text-crypto-orange-light transition-colors py-2">
              Make Your First Deposit
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
