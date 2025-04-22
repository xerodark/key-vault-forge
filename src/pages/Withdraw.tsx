
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Withdraw = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Withdraw</h1>
          <p className="text-crypto-gray-light mt-1">
            Withdraw funds from your vault to your bank account
          </p>
        </div>

        <Card className="overflow-hidden card-gradient animate-scale-in max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-medium">Withdraw Funds</CardTitle>
            <CardDescription>
              Convert your USDC back to USD and withdraw to your bank account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-crypto-gray-light">Available Balance</p>
                  <p className="font-medium">$15,800.00</p>
                </div>
                <div className="h-2 bg-crypto-gray-darker rounded-full overflow-hidden">
                  <div className="h-full bg-crypto-orange w-[75%]" />
                </div>
                <p className="text-xs text-crypto-gray-light mt-2">75% of your funds are available for immediate withdrawal</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Withdrawal Amount (USD)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bank">Destination</Label>
                  <div className="p-4 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-crypto-gray-darker flex items-center justify-center">
                        <span className="text-xs">🏦</span>
                      </div>
                      <div>
                        <p className="font-medium">Bank Account</p>
                        <p className="text-xs text-crypto-gray-light">**** 1234</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                </div>
                
                <Button className="w-full bg-crypto-orange hover:bg-crypto-orange-light text-white">
                  Initiate Withdrawal
                </Button>
              </div>
              
              <div className="text-sm text-crypto-gray-light">
                <h4 className="font-medium text-white mb-2">Withdrawal Information:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Withdrawals are typically processed within 1-3 business days</li>
                  <li>No fees are charged for withdrawals</li>
                  <li>Minimum withdrawal amount is $100 USD</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Withdraw;
