
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Deposit = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deposit</h1>
          <p className="text-crypto-gray-light mt-1">
            Add funds to your vault using USD
          </p>
        </div>

        <Card className="overflow-hidden card-gradient animate-scale-in max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-medium">Fund Your Vault</CardTitle>
            <CardDescription>
              Deposit USD to convert to USDC with zero fees
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-full p-6 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50 flex flex-col items-center justify-center my-8">
              <p className="text-crypto-gray-light mb-4">Coinbase Onramp Widget Placeholder</p>
              <div className="w-16 h-16 rounded-full bg-crypto-orange/20 flex items-center justify-center mb-4">
                <span className="text-crypto-orange text-2xl">$</span>
              </div>
              <p className="text-center max-w-md text-sm text-crypto-gray-light mb-4">
                Connect your bank account or debit card to deposit funds directly to your vault
              </p>
              <Button className="bg-crypto-orange hover:bg-crypto-orange-light text-white">
                Connect Payment Method
              </Button>
            </div>
            
            <div className="text-sm text-crypto-gray-light w-full mt-4">
              <h4 className="font-medium text-white mb-2">Important Notes:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>All transactions are secured with bank-level encryption</li>
                <li>Deposits are typically available within 1-2 business days</li>
                <li>No fees are charged for deposits</li>
                <li>Minimum deposit amount is $100 USD</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Deposit;
