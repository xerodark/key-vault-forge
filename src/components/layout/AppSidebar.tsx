
import React from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  ArrowDown, 
  ArrowUp, 
  Clock, 
  Settings, 
  Shield, 
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/",
    },
    {
      title: "Deposit",
      icon: ArrowDown,
      url: "/deposit",
    },
    {
      title: "Withdraw",
      icon: ArrowUp,
      url: "/withdraw",
    },
    {
      title: "Transactions",
      icon: Clock,
      url: "/transactions",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/settings",
    },
    {
      title: "Admin",
      icon: Shield,
      url: "/admin",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-crypto-orange flex items-center justify-center">
            <span className="font-bold text-white">KV</span>
          </div>
          <span className="text-xl font-bold text-white">Key Vault</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <button className="flex items-center text-crypto-gray-light hover:text-white transition-colors w-full">
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
