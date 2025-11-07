import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Users,
  Activity,
  FileText,
  Settings,
  LogOut,
  Search
} from "lucide-react";

// Navigation Item Interface
interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
  badge?: string | number;
  items?: NavItem[];
  disabled?: boolean;
}

// Mobile Navigation Props
interface MobileNavigationProps {
  items: NavItem[];
  user?: {
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
  onLogout?: () => void;
  className?: string;
}

// Collapsible Navigation Item
function CollapsibleNavItem({ 
  item, 
  level = 0,
  onItemClick 
}: { 
  item: NavItem; 
  level?: number;
  onItemClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = item.isActive || pathname === item.url;
  const hasSubItems = item.items && item.items.length > 0;

  const paddingClass = level === 0 ? "pl-4" : level === 1 ? "pl-8" : "pl-12";

  if (hasSubItems) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-3 ${paddingClass} text-left hover:bg-accent rounded-md transition-colors ${
            isActive ? 'bg-accent text-accent-foreground' : ''
          } ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={item.disabled}
        >
          <div className="flex items-center space-x-3">
            {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
            <span className="text-sm font-medium">{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto">
                {item.badge}
              </Badge>
            )}
          </div>
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isOpen && (
          <div className="space-y-1 mt-1">
            {item.items?.map((subItem, index) => (
              <CollapsibleNavItem
                key={index}
                item={subItem}
                level={level + 1}
                onItemClick={onItemClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link 
      href={item.url}
      className={`flex items-center space-x-3 p-3 ${paddingClass} hover:bg-accent rounded-md transition-colors ${
        isActive ? 'bg-accent text-accent-foreground' : ''
      } ${item.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
      onClick={onItemClick}
    >
      {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
      <span className="text-sm font-medium flex-1">{item.title}</span>
      {item.badge && (
        <Badge variant="secondary">
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}

// Mobile Navigation Content
function MobileNavigationContent({ 
  items, 
  user, 
  onLogout, 
  onClose 
}: MobileNavigationProps & { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">NextGen Admin</h2>
            <p className="text-sm text-muted-foreground">Healthcare Management</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* User Info */}
      {user && (
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-sm">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              <Badge variant="outline" className="text-xs mt-1">
                {user.role}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {items.map((item, index) => (
            <CollapsibleNavItem
              key={index}
              item={item}
              onItemClick={onClose}
            />
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t space-y-2">
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          size="sm"
          onClick={onClose}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        {onLogout && (
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" 
            size="sm"
            onClick={() => {
              onLogout();
              onClose();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

// Main Mobile Navigation Component
export function MobileNavigation({ 
  items, 
  user, 
  onLogout, 
  className 
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`md:hidden ${className}`}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <MobileNavigationContent
          items={items}
          user={user}
          onLogout={onLogout}
          onClose={() => setIsOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}

// Responsive Header Component
interface ResponsiveHeaderProps {
  title: string;
  subtitle?: string;
  navigationItems: NavItem[];
  user?: {
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
  actions?: React.ReactNode;
  onSearch?: (query: string) => void;
  onLogout?: () => void;
  className?: string;
}

export function ResponsiveHeader({
  title,
  subtitle,
  navigationItems,
  user,
  actions,
  onSearch,
  onLogout,
  className
}: ResponsiveHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <header className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 ${className}`}>
      <div className="container flex h-16 items-center px-4">
        {/* Mobile Navigation */}
        <MobileNavigation
          items={navigationItems}
          user={user}
          onLogout={onLogout}
          className="mr-2"
        />

        {/* Title Section */}
        <div className="flex flex-col min-w-0 flex-1 mr-4">
          <h1 className="text-lg font-semibold truncate md:text-xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground truncate hidden sm:block">
              {subtitle}
            </p>
          )}
        </div>

        {/* Search Bar - Hidden on small screens */}
        {onSearch && (
          <form onSubmit={handleSearch} className="hidden md:flex items-center mr-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-4 py-2 w-64 bg-background border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </form>
        )}

        {/* Actions */}
        {actions && (
          <div className="flex items-center space-x-2">
            {actions}
          </div>
        )}

        {/* Desktop User Menu */}
        {user && (
          <div className="hidden md:flex items-center ml-4 space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.role}</p>
            </div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-xs">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Breadcrumb Navigation for Mobile
interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface MobileBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function MobileBreadcrumb({ items, className }: MobileBreadcrumbProps) {
  if (items.length <= 1) return null;

  return (
    <nav className={`flex items-center space-x-1 text-sm text-muted-foreground mb-4 ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4" />
          )}
          {item.href && index < items.length - 1 ? (
            <Link 
              href={item.href} 
              className="hover:text-foreground transition-colors truncate max-w-[120px] md:max-w-none"
            >
              {item.title}
            </Link>
          ) : (
            <span className={`${index === items.length - 1 ? 'text-foreground font-medium' : ''} truncate max-w-[120px] md:max-w-none`}>
              {item.title}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}