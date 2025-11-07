import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  ExternalLink
} from "lucide-react";

// Enhanced Stat Card Component
interface StatCardProps {
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
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = "default",
  onClick,
  action
}: StatCardProps) {
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
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center justify-between mt-2">
          <div>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
            {trend && (
              <div className="flex items-center mt-1">
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : trend.value === 0 ? (
                  <Minus className="h-3 w-3 text-gray-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={`text-xs ml-1 ${
                  trend.isPositive ? 'text-green-600' : trend.value === 0 ? 'text-gray-600' : 'text-red-600'
                }`}>
                  {Math.abs(trend.value)}% {trend.period}
                </span>
              </div>
            )}
          </div>
          {action && (
            <Button size="sm" variant="outline" onClick={(e) => {
              e.stopPropagation();
              action.onClick();
            }}>
              {action.label}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Progress Card Component
interface ProgressCardProps {
  title: string;
  current: number;
  total: number;
  description?: string;
  color?: "blue" | "green" | "yellow" | "red" | "purple";
  showPercentage?: boolean;
}

export function ProgressCard({
  title,
  current,
  total,
  description,
  color = "blue",
  showPercentage = true
}: ProgressCardProps) {
  const percentage = Math.round((current / total) * 100);
  
  const colorStyles = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    yellow: "bg-yellow-600",
    red: "bg-red-600",
    purple: "bg-purple-600"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold">{current}</span>
          <span className="text-sm text-muted-foreground">of {total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className={`${colorStyles[color]} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {showPercentage && (
          <p className="text-sm text-muted-foreground">{percentage}% completed</p>
        )}
      </CardContent>
    </Card>
  );
}

// Activity List Component
interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "info" | "success" | "warning" | "error";
  user?: string;
  action?: () => void;
}

interface ActivityListProps {
  title: string;
  activities: ActivityItem[];
  maxItems?: number;
  onViewAll?: () => void;
}

export function ActivityList({
  title,
  activities,
  maxItems = 5,
  onViewAll
}: ActivityListProps) {
  const displayedActivities = activities.slice(0, maxItems);
  
  const typeStyles = {
    info: "bg-blue-100 border-blue-200",
    success: "bg-green-100 border-green-200",
    warning: "bg-yellow-100 border-yellow-200",
    error: "bg-red-100 border-red-200"
  };

  const typeIndicators = {
    info: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500"
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        {onViewAll && (
          <Button variant="outline" size="sm" onClick={onViewAll}>
            <ExternalLink className="mr-2 h-3 w-3" />
            View All
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {displayedActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${typeIndicators[activity.type]}`}></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                {activity.user && (
                  <p className="text-xs text-blue-600 mt-1">by {activity.user}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Quick Actions Grid Component
interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "green" | "yellow" | "red" | "purple" | "gray";
  onClick: () => void;
  disabled?: boolean;
}

interface QuickActionsProps {
  title: string;
  actions: QuickAction[];
  columns?: 2 | 3 | 4;
}

export function QuickActions({
  title,
  actions,
  columns = 3
}: QuickActionsProps) {
  const colorStyles = {
    blue: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    green: "bg-green-50 hover:bg-green-100 border-green-200",
    yellow: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    red: "bg-red-50 hover:bg-red-100 border-red-200",
    purple: "bg-purple-50 hover:bg-purple-100 border-purple-200",
    gray: "bg-gray-50 hover:bg-gray-100 border-gray-200"
  };

  const iconStyles = {
    blue: "text-blue-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    red: "text-red-600",
    purple: "text-purple-600",
    gray: "text-gray-600"
  };

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3", 
    4: "grid-cols-4"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid gap-4 ${gridCols[columns]}`}>
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              disabled={action.disabled}
              className={`p-4 rounded-lg border transition-colors text-left ${
                action.disabled 
                  ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                  : colorStyles[action.color]
              }`}
            >
              <action.icon className={`h-6 w-6 mb-2 ${iconStyles[action.color]}`} />
              <h3 className="font-medium text-sm">{action.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Simple Chart Component (using CSS for basic visualization)
interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface SimpleBarChartProps {
  title: string;
  data: ChartData[];
  height?: number;
}

export function SimpleBarChart({
  title,
  data,
  height = 200
}: SimpleBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end space-x-2" style={{ height }}>
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="relative w-full flex-1 flex items-end">
                <div
                  className={`w-full rounded-t ${item.color || 'bg-blue-500'} transition-all duration-300`}
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Status Distribution Component
interface StatusDistributionProps {
  title: string;
  data: Array<{
    status: string;
    count: number;
    color: string;
    percentage: number;
  }>;
}

export function StatusDistribution({
  title,
  data
}: StatusDistributionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium">{item.status}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.count} ({item.percentage}%)
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${item.percentage}%`,
                    backgroundColor: item.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}