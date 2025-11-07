import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Search,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ResponsiveShow } from "@/components/ui/responsive";
import { useMobileNav } from "@/components/ui/responsive";

interface ResponsiveHeaderProps {
  title: string;
  subtitle?: string;
  user?: {
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
  notifications?: number;
  onMenuToggle?: () => void;
  onLogout?: () => void;
  actions?: Array<{
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    onClick: () => void;
    variant?: "default" | "outline" | "secondary";
  }>;
}

export function ResponsiveHeader({
  title,
  subtitle,
  user,
  notifications = 0,
  onMenuToggle,
  onLogout,
  actions = []
}: ResponsiveHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <ResponsiveShow below="md">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="mr-3"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </ResponsiveShow>

        {/* Logo/Title Section */}
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl">
              {title}
            </h1>
            {subtitle && (
              <ResponsiveShow above="sm">
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </ResponsiveShow>
            )}
          </div>
        </div>

        {/* Desktop Actions */}
        <ResponsiveShow above="md">
          <div className="flex items-center space-x-2">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "outline"}
                size="sm"
                onClick={action.onClick}
              >
                {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                {action.label}
              </Button>
            ))}
          </div>
        </ResponsiveShow>

        {/* Right Side - Notifications and User Menu */}
        <div className="flex items-center space-x-2 ml-4">
          {/* Search Button - Mobile Only */}
          <ResponsiveShow below="md">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
          </ResponsiveShow>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0"
              >
                {notifications > 9 ? "9+" : notifications}
              </Badge>
            )}
          </Button>

          {/* User Menu */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <ResponsiveShow above="sm">
                      <div className="text-left">
                        <p className="text-sm font-medium">{user.name}</p>
                        <ResponsiveShow above="lg">
                          <p className="text-xs text-muted-foreground capitalize">
                            {user.role}
                          </p>
                        </ResponsiveShow>
                      </div>
                    </ResponsiveShow>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <Badge variant="secondary" className="w-fit text-xs capitalize">
                    {user.role}
                  </Badge>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                
                {/* Mobile Actions Menu */}
                <ResponsiveShow below="md">
                  {actions.map((action, index) => (
                    <DropdownMenuItem key={index} onClick={action.onClick}>
                      {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                      {action.label}
                    </DropdownMenuItem>
                  ))}
                  {actions.length > 0 && <DropdownMenuSeparator />}
                </ResponsiveShow>
                
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}

// Mobile Sidebar Overlay
interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function MobileSidebar({
  isOpen,
  onClose,
  children
}: MobileSidebarProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ResponsiveShow below="md">
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-background shadow-xl">
          {/* Close Button */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </ResponsiveShow>
  );
}

// Page Layout with Responsive Header
interface ResponsivePageLayoutProps {
  children: React.ReactNode;
  header: {
    title: string;
    subtitle?: string;
    user?: {
      name: string;
      email: string;
      role: string;
    };
    notifications?: number;
    actions?: Array<{
      label: string;
      icon?: React.ComponentType<{ className?: string }>;
      onClick: () => void;
      variant?: "default" | "outline" | "secondary";
    }>;
  };
  sidebar?: React.ReactNode;
  className?: string;
}

export function ResponsivePageLayout({
  children,
  header,
  sidebar,
  className
}: ResponsivePageLayoutProps) {
  const { isOpen, toggle, close } = useMobileNav();

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader
        {...header}
        onMenuToggle={toggle}
        onLogout={() => console.log("Logout")}
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        {sidebar && (
          <ResponsiveShow above="md">
            <div className="w-64 border-r bg-background/95">
              {sidebar}
            </div>
          </ResponsiveShow>
        )}
        
        {/* Mobile Sidebar */}
        {sidebar && (
          <MobileSidebar isOpen={isOpen} onClose={close}>
            {sidebar}
          </MobileSidebar>
        )}
        
        {/* Main Content */}
        <main className={`flex-1 overflow-hidden ${className}`}>
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}