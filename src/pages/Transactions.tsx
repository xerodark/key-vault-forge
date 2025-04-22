
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const transactions = [
  {
    id: "tx1",
    type: "deposit",
    amount: "5,000.00",
    date: "Apr 15, 2025",
    status: "completed",
    description: "Bank transfer deposit"
  },
  {
    id: "tx2",
    type: "withdrawal",
    amount: "1,200.00",
    date: "Apr 12, 2025",
    status: "completed",
    description: "Withdrawal to bank account"
  },
  {
    id: "tx3",
    type: "deposit",
    amount: "3,000.00",
    date: "Apr 5, 2025",
    status: "completed",
    description: "Bank transfer deposit"
  },
  {
    id: "tx4",
    type: "deposit",
    amount: "2,500.00",
    date: "Mar 28, 2025",
    status: "completed",
    description: "Debit card deposit"
  },
  {
    id: "tx5",
    type: "withdrawal",
    amount: "800.00",
    date: "Mar 22, 2025",
    status: "completed",
    description: "Withdrawal to bank account"
  },
  {
    id: "tx6",
    type: "deposit",
    amount: "1,500.00",
    date: "Mar 15, 2025",
    status: "completed",
    description: "Bank transfer deposit"
  },
  {
    id: "tx7",
    type: "withdrawal",
    amount: "400.00",
    date: "Mar 8, 2025",
    status: "completed",
    description: "Withdrawal to bank account"
  }
];

const Transactions = () => {
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
            <Button variant="outline" size="sm">
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
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px] bg-crypto-gray-dark border-crypto-gray-dark/50">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-crypto-gray-dark border-crypto-gray-dark/50 text-white">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="deposit">Deposits</SelectItem>
                  <SelectItem value="withdrawal">Withdrawals</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="30">
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
                      <p className="text-xs text-crypto-gray-light">{tx.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-medium">${tx.amount}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-crypto-gray-light">{tx.date}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
