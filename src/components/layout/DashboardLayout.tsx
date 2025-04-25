
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { MenuIcon } from "lucide-react";
import { UserAvatar } from "./UserAvatar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-50%] left-[10%] w-[80%] h-[70%] rounded-full bg-crypto-purple/10 blur-[120px] opacity-20 animate-float" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[60%] rounded-full bg-crypto-blue/8 blur-[100px] opacity-15 animate-float" style={{ animationDelay: '-1s' }} />
          <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] rounded-full bg-crypto-orange/6 blur-[130px] opacity-20 animate-float" style={{ animationDelay: '-3s' }} />
          
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMC4zIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjwvZz48L3N2Zz4=')] opacity-5" />
        </div>
      
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <header className="glass backdrop-blur-lg border-b border-glass-border h-16 flex items-center px-6 sticky top-0 z-10 bg-gradient-to-r from-black/40 to-black/30">
            <SidebarTrigger className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </SidebarTrigger>
            
            <div className="flex-1 ml-4">
              <div className="text-sm text-gray-400">Dashboard</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-crypto-orange/40 to-crypto-purple/40 opacity-0 hover:opacity-100 blur transition-opacity duration-300"></div>
                <UserAvatar />
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
