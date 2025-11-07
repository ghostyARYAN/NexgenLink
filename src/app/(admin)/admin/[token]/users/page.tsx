import { columns, UserData } from "./_components/column";
import { DataTable } from "./_components/data-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, UserCheck, UserX, Clock } from "lucide-react";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { AdminInbox } from "@/components/custom/admin-inbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import NewUser from "./_components/user/new-user";


async function getUsersData(): Promise<UserData[]> {
  // Mock data - in real app, this would fetch from database
  return [
    {
      id: "1",
      email: "john.doe@example.com",
      name: "John Doe",
      role: "user",
      permissions: ["read"],
      status: "active",
      createdAt: new Date("2023-12-01"),
      updatedAt: new Date("2024-01-15"),
      token: "user-token-123",
      pincode: "123456",
      state: "california",
    },
    {
      id: "2",
      email: "dr.smith@hospital.com",
      name: "Dr. Sarah Smith",
      role: "doctor",
      permissions: ["read", "write"],
      status: "active",
      createdAt: new Date("2023-11-15"),
      updatedAt: new Date("2024-01-10"),
      token: "doctor-token-456",
    },
    {
      id: "3",
      email: "admin@greenvalley.edu",
      name: "Green Valley School",
      role: "school",
      permissions: ["read", "write"],
      status: "active",
      createdAt: new Date("2023-10-20"),
      updatedAt: new Date("2024-01-05"),
      token: "school-token-789",
      pincode: "654321",
      state: "newyork",
    },
    {
      id: "4",
      email: "jane.student@email.com",
      name: "Jane Student",
      role: "student",
      permissions: ["read"],
      status: "pending",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01"),
      token: "student-token-101",
      pincode: "789123",
      state: "texas",
    },
    {
      id: "5",
      email: "mike.wilson@clinic.com",
      name: "Dr. Mike Wilson",
      role: "doctor",
      permissions: ["read", "write"],
      status: "suspended",
      createdAt: new Date("2023-09-10"),
      updatedAt: new Date("2023-12-15"),
      token: "doctor-token-202",
    },
    {
      id: "6",
      email: "lisa.brown@example.com",
      name: "Lisa Brown",
      role: "user",
      permissions: ["read"],
      status: "inactive",
      createdAt: new Date("2023-08-25"),
      updatedAt: new Date("2023-11-30"),
      token: "user-token-303",
      pincode: "456789",
      state: "florida",
    },
    {
      id: "7",
      email: "riverside.admin@school.edu",
      name: "Riverside Elementary",
      role: "school",
      permissions: ["read", "write", "delete"],
      status: "active",
      createdAt: new Date("2023-07-12"),
      updatedAt: new Date("2024-01-20"),
      token: "school-token-404",
      pincode: "987654",
      state: "illinois",
    },
    {
      id: "8",
      email: "alex.student@university.edu",
      name: "Alex Johnson",
      role: "student",
      permissions: ["read"],
      status: "active",
      createdAt: new Date("2023-09-05"),
      updatedAt: new Date("2024-01-18"),
      token: "student-token-505",
      pincode: "321654",
      state: "oregon",
    },
  ];
}

export default async function UsersPage() {
  const session = await getServerSession(AuthOptions);
  const data = await getUsersData();

  // Calculate stats
  const stats = {
    total: data.length,
    active: data.filter((u) => u.status === "active").length,
    pending: data.filter((u) => u.status === "pending").length,
    suspended: data.filter((u) => u.status === "suspended").length,
  };

  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor all users in your healthcare system.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="lg:max-w-xl">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Fill in the details below to add a new user to the system.
              </DialogDescription>
            </DialogHeader>
            <NewUser />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              All registered users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.active}
            </div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {stats.pending}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suspended</CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {stats.suspended}
            </div>
            <p className="text-xs text-muted-foreground">Account suspended</p>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            A comprehensive list of all users in your system with their roles,
            status, and permissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
