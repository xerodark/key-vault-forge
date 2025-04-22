
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

const transactions = [
  {
    id: "tx1",
    type: "deposit",
    amount: "5,000.00",
    date: "Apr 15, 2025",
    status: "completed",
  },
  {
    id: "tx2",
    type: "withdrawal",
    amount: "1,200.00",
    date: "Apr 12, 2025",
    status: "completed",
  },
  {
    id: "tx3",
    type: "deposit",
    amount: "3,000.00",
    date: "Apr 5, 2025",
    status: "completed",
  },
  {
    id: "tx4",
    type: "deposit",
    amount: "2,500.00",
    date: "Mar 28, 2025",
    status: "completed",
  },
];

export function RecentTransactions() {
  return (
    <Card className="overflow-hidden card-gradient animate-scale-in">
      <CardHeader>
        <CardTitle className="text-md font-medium">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${tx.type === "deposit" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                  {tx.type === "deposit" ? (
                    <ArrowDown className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowUp className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium capitalize">{tx.type}</p>
                  <p className="text-xs text-crypto-gray-light">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${tx.amount}</p>
                <p className="text-xs text-green-500 capitalize">{tx.status}</p>
              </div>
            </div>
          ))}
          <button className="w-full text-center text-sm text-crypto-orange hover:text-crypto-orange-light transition-colors py-2">
            View All Transactions
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
