import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Deposit = () => {
  const [lockIn, setLockIn] = useState("6");

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
              <div className="mb-8 w-full max-w-xs">
                <span className="block text-sm text-white font-semibold mb-1">Choose your lock-in period</span>
                <RadioGroup className="flex gap-6" value={lockIn} onValueChange={setLockIn}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="6" id="lock-6" />
                    <label htmlFor="lock-6" className="text-white">6 months</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="12" id="lock-12" />
                    <label htmlFor="lock-12" className="text-white">12 months</label>
                  </div>
                </RadioGroup>
              </div>
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
                <li>
                  {lockIn === "6" 
                    ? "Your funds will be locked for 6 months. Early withdrawal will not be possible." 
                    : "Enjoy the highest yield by locking in for 12 months. Early withdrawal will not be possible."}
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Deposit;
