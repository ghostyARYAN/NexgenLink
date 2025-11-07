import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Calendar,
  FileText,
  Activity,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Bell,
  Settings,
  Upload,
  Download,
  Share2
} from "lucide-react";
import RecentReport from "./_components/recent-report";

// Mock user health data
const userHealthData = {
  personalInfo: {
    bloodType: "O+",
    height: "5'8\"",
    weight: "165 lbs",
    age: 28,
    emergencyContact: "Sarah Johnson - Sister",
    emergencyPhone: "(555) 123-4567"
  },
  recentAppointments: [
    {
      id: "A-001",
      doctor: "Dr. Smith",
      specialty: "General Practice",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "completed",
      notes: "Annual checkup - All normal"
    },
    {
      id: "A-002",
      doctor: "Dr. Johnson",
      specialty: "Cardiology",
      date: "2024-01-28",
      time: "2:00 PM",
      status: "upcoming",
      notes: "Follow-up consultation"
    }
  ],
  healthMetrics: {
    lastCheckup: "2024-01-15",
    nextCheckup: "2024-07-15",
    vaccinations: "Up to date",
    chronicConditions: "None",
    allergies: ["Peanuts", "Shellfish"],
    medications: ["Vitamin D3", "Multivitamin"]
  },
  recentReports: [
    {
      id: "R-001",
      title: "Blood Work Results",
      date: "2024-01-15",
      status: "normal",
      doctor: "Dr. Smith"
    },
    {
      id: "R-002",
      title: "X-Ray Report",
      date: "2024-01-10",
      status: "normal",
      doctor: "Dr. Williams"
    }
  ]
};

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default async function UserDashboardPage({
  params,
}: {
  params: Promise<{
    token: string;
  }>;
}) {
  const { token, } = await params;
  const session = await getServerSession(AuthOptions);

  if (!session || !session.user) {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  const user = session.user as any;
  const userToken = user?.token;

  if (token !== userToken || user.role !== "student") {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }
  const QuickActions = [
    { id: "schedule", title: "Referal Link", icon: Calendar },
    { id: "upload", title: "Upload Documents", icon: Upload },
    { id: "notify", title: "Send Notification", icon: Bell },
  ];

  const QuickStats = [
    {
      id: "nextCampaign",
      title: "Next Campaign",
      icon: Calendar,
      value: "Jan 28",
      subtitle: "City Health Drive - 2:00 PM",
    },
    {
      id: "lastCheckup",
      title: "Last Checkup",
      icon: Activity,
      value: "Jan 15",
      subtitle: "All normal results",
    },
    {
      id: "health",
      title: "Health Status",
      icon: Heart,
      value: "Good",
      subtitle: "No concerns",
      valueClass: "text-green-600",
    },
    {
      id: "reports",
      title: "Reports",
      icon: FileText,
      value: userHealthData.recentReports.length,
      subtitle: "Recent results",
    },
  ];

  const campaigns = userHealthData.recentAppointments.map((a) => ({
    id: a.id,
    title: `${a.doctor}`,
    subtitle: a.specialty,
    notes: a.notes,
    date: a.date,
    time: a.time,
    status: a.status,
  }));

  return (
    <div className="space-y-8 p-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Your personal health dashboard and medical records.</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {QuickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.valueClass ?? ""}`}>{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Personal Health Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Health Info</CardTitle>
            <CardDescription>Your basic health information and emergency contacts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <span className="text-sm font-medium text-gray-700">Blood Type:</span>
                <p className="font-semibold">{userHealthData.personalInfo.bloodType}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">Age:</span>
                <p className="font-semibold">{userHealthData.personalInfo.age} years</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">Height:</span>
                <p className="font-semibold">{userHealthData.personalInfo.height}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">Weight:</span>
                <p className="font-semibold">{userHealthData.personalInfo.weight}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Emergency Contact</h4>
              <p className="text-sm">{userHealthData.personalInfo.emergencyContact}</p>
              <p className="text-sm text-gray-600">{userHealthData.personalInfo.emergencyPhone}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Overview</CardTitle>
            <CardDescription>Current health status and important medical information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-700">Allergies:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {userHealthData.healthMetrics.allergies.map((allergy, index) => (
                  <Badge key={index} variant="outline" className="bg-red-50 text-red-700">
                    {allergy}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700">Current Medications:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {userHealthData.healthMetrics.medications.map((medication, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700">
                    {medication}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700">Chronic Conditions:</span>
              <p className="text-sm">{userHealthData.healthMetrics.chronicConditions}</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700">Vaccinations:</span>
              <Badge className="bg-green-100 text-green-800 ml-2" variant="outline">
                {userHealthData.healthMetrics.vaccinations}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent & Upcoming Campaigns */}
      <Card>
        <CardHeader>
          <CardTitle>Recent & Upcoming Campaigns</CardTitle>
          <CardDescription>Your campaign history and scheduled events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-600">{c.subtitle}</p>
                  <p className="text-xs text-gray-500">{c.notes}</p>
                </div>
                <div className="text-right space-y-2">
                  <div>
                    <p className="text-sm font-medium">{new Date(c.date).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-500">{c.time}</p>
                  </div>
                  <Badge className={getStatusColor(c.status)} variant="outline">
                    {c.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <RecentReport />
    </div>
  );
}
