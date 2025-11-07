import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCheck,
  Activity,
  AlertCircle,
  TrendingUp,
  BarChart2,
  Settings,
  FileText,
  Stethoscope,
  Filter,
} from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const session = await getServerSession(AuthOptions);

  if (
    !session ||
    session.user.token !== token ||
    session.user.role !== "admin"
  ) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="text-red-500 text-xl font-semibold">
            Unauthorized Access
          </div>
          <p className="text-gray-600 mt-2">
            You do not have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  const user = session.user as any;

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Welcome back, {user.name}!
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Here's what's happening with your health management system today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={`${user.roleBasedURL}/patients`}>
              <Filter className="h-4 w-4 mr-2" />
              Patient Diseases
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href={`${user.roleBasedURL}/users`}>
              <Users className="h-4 w-4 mr-2" />
              Manage Users
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Users */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Total Users
                </p>
                <p className="text-2xl md:text-3xl font-bold">1,250</p>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">
                    +12% from last month
                  </span>
                </div>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Active Users
                </p>
                <p className="text-2xl md:text-3xl font-bold">980</p>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">
                    +5% from last week
                  </span>
                </div>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-100 flex items-center justify-center">
                <UserCheck className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Healthcare Providers */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Healthcare Providers
                </p>
                <p className="text-2xl md:text-3xl font-bold">45</p>
                <span className="text-xs text-muted-foreground">
                  Doctors & specialists
                </span>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Stethoscope className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  System Alerts
                </p>
                <p className="text-2xl md:text-3xl font-bold">3</p>
                <span className="text-xs text-amber-600">
                  Requires attention
                </span>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>
                Latest system activities and user interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium">
                      New User Registration
                    </p>
                    <p className="text-sm text-muted-foreground">
                      john.doe@email.com registered as patient
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium">
                      Appointment Scheduled
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Patient booked appointment with Dr. Smith
                    </p>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium">
                      System Backup Completed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Daily backup completed successfully
                    </p>
                    <p className="text-xs text-muted-foreground">6 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link
              href={`${user.roleBasedURL}/users`}
              className="w-full flex items-center gap-3 p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base font-medium">Manage Users</p>
                <p className="text-xs text-muted-foreground">
                  View and manage all users
                </p>
              </div>
              <Badge variant="secondary">12</Badge>
            </Link>

            <Link
              href={`${user.roleBasedURL}/patients`}
              className="w-full flex items-center gap-3 p-3 text-left bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center">
                <Filter className="h-4 w-4 text-pink-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base font-medium">
                  Patient Diseases
                </p>
                <p className="text-xs text-muted-foreground">
                  Filter patients by conditions
                </p>
              </div>
              <Badge variant="secondary">6</Badge>
            </Link>

            <Link
              href={`${user.roleBasedURL}/analytics`}
              className="w-full flex items-center gap-3 p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <BarChart2 className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base font-medium">Analytics</p>
                <p className="text-xs text-muted-foreground">
                  View system analytics
                </p>
              </div>
            </Link>

            <Link
              href={`${user.roleBasedURL}/records`}
              className="w-full flex items-center gap-3 p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                <FileText className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base font-medium">
                  Clinical Records
                </p>
                <p className="text-xs text-muted-foreground">
                  Manage medical records
                </p>
              </div>
            </Link>

            <Link
              href={`${user.roleBasedURL}/settings`}
              className="w-full flex items-center gap-3 p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Settings className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base font-medium">
                  System Settings
                </p>
                <p className="text-xs text-muted-foreground">
                  Configure system settings
                </p>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
