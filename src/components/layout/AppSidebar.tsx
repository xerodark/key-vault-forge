
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { supabase } from "@/integrations/supabase/client";
import { useProfile } from "@/hooks/useProfile";

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = useProfile();

  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/dashboard",
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
    // Only show Admin tab for admin users
    ...(profile?.is_admin ? [{
      title: "Admin",
      icon: Shield,
      url: "/admin",
    }] : []),
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  return (
    <Sidebar className="glass border-r border-glass-border bg-gradient-to-b from-black/50 to-black/30">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-crypto-orange via-crypto-purple to-crypto-blue opacity-75 blur"></div>
            <div className="relative h-8 w-8 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-crypto-orange to-crypto-orange-light">KV</span>
            </div>
          </div>
          <span className="text-xl font-bold text-white">Key Vault</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-crypto-gray-light">Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      className={`${isActive ? 'glass-light bg-glass-light text-white' : 'hover:glass-light hover:bg-glass-light/50'} transition-all duration-300`}
                    >
                      <Link to={item.url} className="flex items-center">
                        <div className={`${isActive ? 'text-crypto-orange' : 'text-gray-400'} mr-3`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <button 
          className="flex items-center text-crypto-gray-light hover:text-white hover:bg-red-500/10 p-2 rounded-lg transition-colors w-full"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
