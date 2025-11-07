import React from "react";
import { cn } from "@/lib/utils";

// Responsive Grid Component
interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

export function ResponsiveGrid({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 4,
  className
}: ResponsiveGridProps) {
  const gridClasses = [
    `grid`,
    `gap-${gap}`,
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ].filter(Boolean);

  return (
    <div className={cn(gridClasses.join(" "), className)}>
      {children}
    </div>
  );
}

// Responsive Container Component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export function ResponsiveContainer({
  children,
  size = "full",
  className
}: ResponsiveContainerProps) {
  const sizeClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md", 
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "max-w-full"
  };

  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
}

// Mobile-first Stack Component
interface StackProps {
  children: React.ReactNode;
  direction?: "row" | "col";
  breakpoint?: "sm" | "md" | "lg";
  spacing?: number;
  className?: string;
}

export function Stack({
  children,
  direction = "col",
  breakpoint = "md",
  spacing = 4,
  className
}: StackProps) {
  const directionClasses = {
    row: `flex-col ${breakpoint}:flex-row`,
    col: `flex-col ${breakpoint}:flex-col`
  };

  return (
    <div className={cn(
      "flex",
      directionClasses[direction],
      `gap-${spacing}`,
      className
    )}>
      {children}
    </div>
  );
}

// Responsive Show/Hide Component
interface ResponsiveShowProps {
  children: React.ReactNode;
  above?: "sm" | "md" | "lg" | "xl";
  below?: "sm" | "md" | "lg" | "xl";
  only?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function ResponsiveShow({
  children,
  above,
  below,
  only,
  className
}: ResponsiveShowProps) {
  let showClasses = "";

  if (only) {
    const onlyClasses = {
      sm: "sm:block md:hidden",
      md: "hidden sm:hidden md:block lg:hidden",
      lg: "hidden md:hidden lg:block xl:hidden", 
      xl: "hidden lg:hidden xl:block"
    };
    showClasses = `hidden ${onlyClasses[only]}`;
  } else {
    if (above) {
      const aboveClasses = {
        sm: "hidden sm:block",
        md: "hidden md:block",
        lg: "hidden lg:block",
        xl: "hidden xl:block"
      };
      showClasses = aboveClasses[above];
    }
    
    if (below) {
      const belowClasses = {
        sm: "block sm:hidden",
        md: "block md:hidden", 
        lg: "block lg:hidden",
        xl: "block xl:hidden"
      };
      showClasses = belowClasses[below];
    }
  }

  return (
    <div className={cn(showClasses, className)}>
      {children}
    </div>
  );
}

// Mobile Navigation Toggle Hook
export function useMobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // Close on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isOpen, toggle, close, open };
}

// Responsive Text Component
interface ResponsiveTextProps {
  children: React.ReactNode;
  size?: {
    default?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    sm?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    md?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    lg?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  };
  weight?: "normal" | "medium" | "semibold" | "bold";
  className?: string;
}

export function ResponsiveText({
  children,
  size = { default: "base", md: "lg" },
  weight = "normal",
  className
}: ResponsiveTextProps) {
  const sizeClasses = [
    size.default && `text-${size.default}`,
    size.sm && `sm:text-${size.sm}`,
    size.md && `md:text-${size.md}`,
    size.lg && `lg:text-${size.lg}`,
  ].filter(Boolean);

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold", 
    bold: "font-bold"
  };

  return (
    <span className={cn(
      sizeClasses.join(" "),
      weightClasses[weight],
      className
    )}>
      {children}
    </span>
  );
}

// Responsive Spacing Component
interface ResponsiveSpacingProps {
  children: React.ReactNode;
  p?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  m?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  className?: string;
}

export function ResponsiveSpacing({
  children,
  p,
  m,
  className
}: ResponsiveSpacingProps) {
  const classes = [];
  
  if (p) {
    p.default && classes.push(`p-${p.default}`);
    p.sm && classes.push(`sm:p-${p.sm}`);
    p.md && classes.push(`md:p-${p.md}`);
    p.lg && classes.push(`lg:p-${p.lg}`);
  }
  
  if (m) {
    m.default && classes.push(`m-${m.default}`);
    m.sm && classes.push(`sm:m-${m.sm}`);
    m.md && classes.push(`md:m-${m.md}`);
    m.lg && classes.push(`lg:m-${m.lg}`);
  }

  return (
    <div className={cn(classes.join(" "), className)}>
      {children}
    </div>
  );
}