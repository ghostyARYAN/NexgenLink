"use client";
import {
  Calendar,
  Home,
  Inbox,
  Settings,
  Users,
  Stethoscope,
  FileText,
  BarChart2,
  LogOut,
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
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

// Build role-based menu for a health dashboard.
function getItemsForRole(role?: string) {
  // Menu items remain the same
  const home = {
    title: "Home",
    url: "/",
    icon: Home,
  };

  const adminItems = [
    {
      title: "Users",
      url: "/users",
      icon: Users,
    },
    {
      title: "Clinical Records",
      url: "/patients",
      icon: FileText,
    },
    {
      title: "Campaign",
      url: "/campaign",
      icon: FileText,
    },
    {
      title: "Schedules",
      url: "/appointments",
      icon: Calendar,
    },
  ];

  const doctorItems = [
    {
      title: "My Patients",
      url: "/patients",
      icon: Users,
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Calendar,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: FileText,
    },
  ];

  const schoolItems = [
    {
      title: "Students",
      url: "/students",
      icon: Users,
    },
    {
      title: "Campaigns",
      url: "/campaign",
      icon: FileText,
    },
  ];

  const studentItems = [
    {
      title: "My Health",
      url: "/reports",
      icon: FileText,
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Calendar,
    },
  ];

  const defaultItems = [
    {
      title: "My Records",
      url: "/records",
      icon: FileText,
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Calendar,
    },
    {
      title: "Find a Provider",
      url: "/providers",
      icon: Stethoscope,
    },
  ];

  const roleKey = role?.toLowerCase?.().trim?.() ?? "user";

  const roleMap: Record<string, typeof defaultItems> = {
    admin: adminItems,
    doctor: doctorItems,
    physician: doctorItems,
    school: schoolItems,
    student: studentItems,
  };

  return [home, ...(roleMap[roleKey] ?? defaultItems)];
}

export default function AppSidebar({
  user,
  role,
  roleBasedURL,
}: {
  user: User;
  role?: string;
  roleBasedURL: string;
}) {
  const items = getItemsForRole(role);
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r shadow-sm bg-white dark:bg-slate-900"
    >
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-3 ps-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="size-8"
            />
            <SidebarGroupLabel className="text-lg font-semibold">
              NextGen Health
            </SidebarGroupLabel>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarSeparator />
          <SidebarGroupContent className="h-[calc(100vh-25vh)] mt-6 space-y-8">
            <SidebarMenu>
              {items.map((item, index) => {
                const base = (roleBasedURL || "").replace(/\/$/, "");
                const href =
                  item.url === "/" ? base || "/" : `${base}${item.url}`;
                const isActive = pathname === href || pathname === `${href}/`;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "rounded-lg transition-all duration-200 py-6",
                          isActive
                            ? "bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:text-slate-100"
                            : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-200",
                        )}
                      >
                        <Link href={href} className="px-2">
                          <item.icon
                            className={cn(
                              "size-5",
                              isActive ? "stroke-[2.5px]" : "",
                            )}
                          />
                          <span
                            className={cn(
                              "ml-3",
                              isActive ? "font-medium" : "",
                            )}
                          >
                            {item.title}
                          </span>
                          {isActive && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-200"></div>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenuButton
              asChild
              onClick={async () => {
                await signOut();
              }}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 h-11 w-full rounded-lg transition-all duration-200"
            >
              <button className="flex items-center gap-3">
                <LogOut className="size-5" />
                <span className="font-medium">Log Out</span>
              </button>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
