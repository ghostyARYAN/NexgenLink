import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResponsiveGrid, ResponsiveShow, ResponsiveText } from "@/components/ui/responsive";
import { 
  TrendingUp, 
  TrendingDown, 
  MoreHorizontal,
  ExternalLink,
  ChevronRight,
  Plus
} from "lucide-react";

// Mobile-Optimized Stat Card
interface MobileStatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  variant?: "default" | "success" | "warning" | "danger" | "info";
  onClick?: () => void;
  compact?: boolean;
}

export function MobileStatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = "default",
  onClick,
  compact = false
}: MobileStatCardProps) {
  const variantStyles = {
    default: "border-gray-200",
    success: "border-green-200 bg-green-50",
    warning: "border-yellow-200 bg-yellow-50",
    danger: "border-red-200 bg-red-50",
    info: "border-blue-200 bg-blue-50"
  };

  const iconStyles = {
    default: "text-gray-600",
    success: "text-green-600",
    warning: "text-yellow-600", 
    danger: "text-red-600",
    info: "text-blue-600"
  };

  if (compact) {
    return (
      <Card 
        className={`${variantStyles[variant]} ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
        onClick={onClick}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <ResponsiveText 
                size={{ default: "sm", md: "base" }}
                className="font-medium text-muted-foreground"
              >
                {title}
              </ResponsiveText>
              <ResponsiveText 
                size={{ default: "xl", md: "2xl" }}
                weight="bold"
                className="block mt-1"
              >
                {value}
              </ResponsiveText>
              {trend && (
                <div className="flex items-center mt-1">
                  {trend.isPositive ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={`text-xs ml-1 ${
                    trend.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {Math.abs(trend.value)}%
                  </span>
                </div>
              )}
            </div>
            {Icon && (
              <Icon className={`h-5 w-5 md:h-6 md:w-6 ${iconStyles[variant]}`} />
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={`${variantStyles[variant]} ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className={`h-4 w-4 ${iconStyles[variant]}`} />}
      </CardHeader>
      <CardContent>
        <ResponsiveText 
          size={{ default: "xl", md: "2xl" }}
          weight="bold"
        >
          {value}
        </ResponsiveText>
        <div className="flex items-center justify-between mt-2">
          <div>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
            {trend && (
              <div className="flex items-center mt-1">
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={`text-xs ml-1 ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {Math.abs(trend.value)}% {trend.period}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Mobile-Optimized Activity List
interface MobileActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "info" | "success" | "warning" | "error";
  user?: string;
  action?: () => void;
}

interface MobileActivityListProps {
  title: string;
  activities: MobileActivityItem[];
  maxItems?: number;
  onViewAll?: () => void;
  compact?: boolean;
}

export function MobileActivityList({
  title,
  activities,
  maxItems = 5,
  onViewAll,
  compact = false
}: MobileActivityListProps) {
  const displayedActivities = activities.slice(0, maxItems);
  
  const typeIndicators = {
    info: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500"
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base md:text-lg">{title}</CardTitle>
        {onViewAll && (
          <Button variant="ghost" size="sm" onClick={onViewAll}>
            <ResponsiveShow above="md">
              <ExternalLink className="mr-2 h-3 w-3" />
              View All
            </ResponsiveShow>
            <ResponsiveShow below="md">
              <ChevronRight className="h-4 w-4" />
            </ResponsiveShow>
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {displayedActivities.map((activity) => (
            <div 
              key={activity.id} 
              className={`flex items-start space-x-3 ${compact ? 'py-2' : 'py-1'} ${
                activity.action ? 'cursor-pointer hover:bg-gray-50 rounded p-2 -m-2' : ''
              }`}
              onClick={activity.action}
            >
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${typeIndicators[activity.type]}`}></div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <ResponsiveText 
                    size={{ default: "sm", md: "base" }}
                    weight="medium"
                    className="truncate flex-1"
                  >
                    {activity.title}
                  </ResponsiveText>
                  <ResponsiveText 
                    size={{ default: "xs", md: "sm" }}
                    className="text-muted-foreground flex-shrink-0"
                  >
                    {activity.timestamp}
                  </ResponsiveText>
                </div>
                <ResponsiveText 
                  size={{ default: "xs", md: "sm" }}
                  className="text-muted-foreground block"
                >
                  {activity.description}
                </ResponsiveText>
                {activity.user && (
                  <ResponsiveText 
                    size={{ default: "xs" }}
                    className="text-blue-600 block"
                  >
                    by {activity.user}
                  </ResponsiveText>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Mobile Quick Actions Grid
interface MobileQuickAction {
  id: string;
  title: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "green" | "yellow" | "red" | "purple" | "gray";
  onClick: () => void;
  disabled?: boolean;
  badge?: string | number;
}

interface MobileQuickActionsProps {
  title: string;
  actions: MobileQuickAction[];
  layout?: "grid" | "list";
  compact?: boolean;
}

export function MobileQuickActions({
  title,
  actions,
  layout = "grid",
  compact = false
}: MobileQuickActionsProps) {
  const colorStyles = {
    blue: "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700",
    green: "bg-green-50 hover:bg-green-100 border-green-200 text-green-700",
    yellow: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200 text-yellow-700",
    red: "bg-red-50 hover:bg-red-100 border-red-200 text-red-700",
    purple: "bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700",
    gray: "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
  };

  const iconStyles = {
    blue: "text-blue-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    red: "text-red-600",
    purple: "text-purple-600",
    gray: "text-gray-600"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base md:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {layout === "grid" ? (
          <ResponsiveGrid 
            cols={{ default: 2, md: 3, lg: 4 }}
            gap={compact ? 2 : 4}
          >
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={action.onClick}
                disabled={action.disabled}
                className={`relative p-3 md:p-4 rounded-lg border transition-colors text-left ${
                  action.disabled 
                    ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                    : colorStyles[action.color]
                }`}
              >
                {action.badge && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
                    variant="destructive"
                  >
                    {action.badge}
                  </Badge>
                )}
                <action.icon className={`h-5 w-5 md:h-6 md:w-6 mb-2 ${iconStyles[action.color]}`} />
                <ResponsiveText 
                  size={{ default: "sm", md: "base" }}
                  weight="medium"
                  className="block"
                >
                  {action.title}
                </ResponsiveText>
                {action.description && !compact && (
                  <ResponsiveText 
                    size={{ default: "xs", md: "sm" }}
                    className="text-muted-foreground block mt-1"
                  >
                    {action.description}
                  </ResponsiveText>
                )}
              </button>
            ))}
          </ResponsiveGrid>
        ) : (
          <div className="space-y-2">
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={action.onClick}
                disabled={action.disabled}
                className={`w-full flex items-center p-3 rounded-lg border transition-colors text-left ${
                  action.disabled 
                    ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                    : colorStyles[action.color]
                }`}
              >
                <action.icon className={`h-5 w-5 mr-3 flex-shrink-0 ${iconStyles[action.color]}`} />
                <div className="flex-1">
                  <ResponsiveText 
                    size={{ default: "sm", md: "base" }}
                    weight="medium"
                  >
                    {action.title}
                  </ResponsiveText>
                  {action.description && (
                    <ResponsiveText 
                      size={{ default: "xs", md: "sm" }}
                      className="text-muted-foreground block"
                    >
                      {action.description}
                    </ResponsiveText>
                  )}
                </div>
                {action.badge && (
                  <Badge variant="secondary" className="ml-2">
                    {action.badge}
                  </Badge>
                )}
                <ChevronRight className="h-4 w-4 ml-2 flex-shrink-0" />
              </button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Mobile Dashboard Layout
interface MobileDashboardLayoutProps {
  children: React.ReactNode;
  header?: {
    title: string;
    subtitle?: string;
    action?: {
      label: string;
      onClick: () => void;
      icon?: React.ComponentType<{ className?: string }>;
    };
  };
  spacing?: "tight" | "normal" | "loose";
}

export function MobileDashboardLayout({
  children,
  header,
  spacing = "normal"
}: MobileDashboardLayoutProps) {
  const spacingClasses = {
    tight: "space-y-4",
    normal: "space-y-6 md:space-y-8",
    loose: "space-y-8 md:space-y-12"
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {header && (
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <ResponsiveText 
              size={{ default: "2xl", md: "3xl" }}
              weight="bold"
              className="tracking-tight"
            >
              {header.title}
            </ResponsiveText>
            {header.subtitle && (
              <ResponsiveText 
                size={{ default: "sm", md: "base" }}
                className="text-muted-foreground mt-1 block"
              >
                {header.subtitle}
              </ResponsiveText>
            )}
          </div>
          {header.action && (
            <Button onClick={header.action.onClick}>
              {header.action.icon && (
                <header.action.icon className="mr-2 h-4 w-4" />
              )}
              <ResponsiveShow above="sm">
                {header.action.label}
              </ResponsiveShow>
              <ResponsiveShow below="sm">
                <Plus className="h-4 w-4" />
              </ResponsiveShow>
            </Button>
          )}
        </div>
      )}
      <div className={spacingClasses[spacing]}>
        {children}
      </div>
    </div>
  );
}