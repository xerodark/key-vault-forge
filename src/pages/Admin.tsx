
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/dashboard/StatCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { Users, DollarSign, Wallet, AreaChart, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const users = [
  {
    id: "user1",
    name: "John Doe",
    email: "john.doe@example.com",
    portfolioValue: "15,800.00",
    contribution: "12,500.00",
    kycStatus: "Complete",
    joinDate: "Feb 15, 2025",
  },
  {
    id: "user2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    portfolioValue: "42,300.00",
    contribution: "35,000.00",
    kycStatus: "Complete",
    joinDate: "Jan 12, 2025",
  },
  {
    id: "user3",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    portfolioValue: "8,700.00",
    contribution: "8,000.00",
    kycStatus: "Pending",
    joinDate: "Mar 22, 2025",
  },
  {
    id: "user4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    portfolioValue: "21,500.00",
    contribution: "18,000.00",
    kycStatus: "Complete",
    joinDate: "Jan 5, 2025",
  },
  {
    id: "user5",
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    portfolioValue: "5,200.00",
    contribution: "5,000.00",
    kycStatus: "Pending",
    joinDate: "Apr 10, 2025",
  },
];

const snapshots = [
  {
    id: "snap1",
    date: "Apr 01, 2025",
    totalAUM: "247,500.00",
    totalUsers: "12",
    netDeposits: "15,000.00",
    monthlyReturn: "+2.8%",
  },
  {
    id: "snap2",
    date: "Mar 01, 2025",
    totalAUM: "232,500.00",
    totalUsers: "11",
    netDeposits: "22,000.00",
    monthlyReturn: "+3.5%",
  },
  {
    id: "snap3",
    date: "Feb 01, 2025",
    totalAUM: "210,500.00",
    totalUsers: "10",
    netDeposits: "18,500.00",
    monthlyReturn: "+1.7%",
  },
  {
    id: "snap4",
    date: "Jan 01, 2025",
    totalAUM: "192,000.00",
    totalUsers: "8",
    netDeposits: "192,000.00",
    monthlyReturn: "0.0%",
  },
];

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-crypto-gray-light mt-1">
              Manage users, view platform metrics, and generate reports
            </p>
          </div>
          <Button className="bg-crypto-orange hover:bg-crypto-orange-light text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Generate New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Users"
            value="12"
            icon={<Users />}
            trend={{ value: "2 new this month", positive: true }}
          />
          <StatCard
            title="Total AUM"
            value="$247,500.00"
            icon={<DollarSign />}
            trend={{ value: "6.5% this month", positive: true }}
          />
          <StatCard
            title="Average Portfolio"
            value="$20,625.00"
            icon={<Wallet />}
            trend={{ value: "3.2% this month", positive: true }}
          />
          <StatCard
            title="Platform Return"
            value="8.0% YTD"
            icon={<AreaChart />}
            trend={{ value: "2.8% this month", positive: true }}
          />
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="snapshots">Fund Snapshots</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="mt-6">
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">User Management</CardTitle>
                <CardDescription>
                  View and manage all users on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-crypto-gray-dark/50">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-crypto-gray-dark hover:bg-crypto-gray-dark/90">
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Portfolio Value</TableHead>
                        <TableHead>Contribution</TableHead>
                        <TableHead>KYC Status</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="hover:bg-crypto-gray-dark/50">
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>${user.portfolioValue}</TableCell>
                          <TableCell>${user.contribution}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.kycStatus === "Complete" 
                                ? "bg-green-500/20 text-green-500" 
                                : "bg-yellow-500/20 text-yellow-500"
                            }`}>
                              {user.kycStatus}
                            </span>
                          </TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-6">
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Platform Performance</CardTitle>
                <CardDescription>
                  View and analyze platform performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceChart title="Platform AUM Growth" />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="snapshots" className="mt-6">
            <Card className="overflow-hidden card-gradient animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Fund Snapshots</CardTitle>
                <CardDescription>
                  Monthly snapshots of fund performance and metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-crypto-gray-dark/50">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-crypto-gray-dark hover:bg-crypto-gray-dark/90">
                        <TableHead>Date</TableHead>
                        <TableHead>Total AUM</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>Net Deposits</TableHead>
                        <TableHead>Monthly Return</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {snapshots.map((snapshot) => (
                        <TableRow key={snapshot.id} className="hover:bg-crypto-gray-dark/50">
                          <TableCell className="font-medium">{snapshot.date}</TableCell>
                          <TableCell>${snapshot.totalAUM}</TableCell>
                          <TableCell>{snapshot.totalUsers}</TableCell>
                          <TableCell>${snapshot.netDeposits}</TableCell>
                          <TableCell>
                            <span className={`text-${snapshot.monthlyReturn.startsWith("+") ? "green" : "red"}-500`}>
                              {snapshot.monthlyReturn}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Details</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
