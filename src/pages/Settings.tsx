
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-crypto-gray-light mt-1">
            Manage your account preferences and security settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Profile Information</CardTitle>
                <CardDescription>
                  Update your account details and personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="John"
                      className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                  />
                </div>
                
                <Button className="bg-crypto-orange hover:bg-crypto-orange-light text-white">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Security</CardTitle>
                <CardDescription>
                  Manage your account security settings and password
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                    className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="••••••••"
                      className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="bg-crypto-gray-dark border-crypto-gray-dark/50"
                    />
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-crypto-gray-light">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-crypto-gray-light">
                        Receive email notifications for account activity
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button className="bg-crypto-orange hover:bg-crypto-orange-light text-white">
                  Update Security Settings
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">KYC Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                    <span className="text-yellow-500 text-2xl">!</span>
                  </div>
                  <h3 className="font-medium text-lg mb-2">Verification Needed</h3>
                  <p className="text-sm text-crypto-gray-light text-center mb-4">
                    Complete identity verification to unlock full platform functionality
                  </p>
                  <Button className="w-full bg-crypto-orange hover:bg-crypto-orange-light text-white">
                    Complete Verification
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Connected Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-crypto-gray-dark border border-crypto-gray-dark/50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-xs">🏦</span>
                      </div>
                      <div>
                        <p className="font-medium">Bank Account</p>
                        <p className="text-xs text-crypto-gray-light">Connected on Apr 10, 2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Connect New Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
