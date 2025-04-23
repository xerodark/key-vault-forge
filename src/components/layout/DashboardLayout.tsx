
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
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <header className="border-b border-crypto-gray-dark h-16 flex items-center px-4 sticky top-0 z-10 bg-crypto-gray-darker">
            <SidebarTrigger className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </SidebarTrigger>
            <div className="ml-auto flex items-center space-x-4">
              <div className="flex items-center space-x-2">
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
