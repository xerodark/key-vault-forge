
import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useQuery } from "@tanstack/react-query";

export function AppSidebar() {
  const navigate = useNavigate();

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return null;
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
        
      return profile;
    }
  });

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
        <button 
          className="flex items-center text-crypto-gray-light hover:text-white transition-colors w-full"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
