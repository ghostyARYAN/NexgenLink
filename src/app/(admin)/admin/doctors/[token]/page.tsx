import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  Users,
  Calendar,
  FileText,
  Activity,
  Clock,
  AlertCircle,
  CheckCircle,
  Plus,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

// Mock doctor dashboard data
const doctorData = {
  patients: {
    total: 156,
    active: 142,
    newThisWeek: 8,
    followUps: 23,
  },
  appointments: {
    today: 12,
    thisWeek: 45,
    completed: 8,
    upcoming: 4,
    cancelled: 1,
  },
  recentPatients: [
    {
      id: "P-001",
      name: "Sarah Johnson",
      age: 34,
      lastVisit: "2024-01-15",
      condition: "Routine Checkup",
      status: "stable",
      nextAppointment: "2024-02-15",
    },
    {
      id: "P-002",
      name: "Mike Davis",
      age: 28,
      lastVisit: "2024-01-14",
      condition: "Sports Injury Follow-up",
      status: "improving",
      nextAppointment: "2024-01-28",
    },
    {
      id: "P-003",
      name: "Emma Wilson",
      age: 45,
      lastVisit: "2024-01-13",
      condition: "Blood Pressure Monitoring",
      status: "attention",
      nextAppointment: "2024-01-27",
    },
  ],
  todayAppointments: [
    {
      id: "A-001",
      time: "09:00 AM",
      patient: "John Smith",
      type: "Consultation",
      status: "confirmed",
    },
    {
      id: "A-002",
      time: "10:30 AM",
      patient: "Lisa Brown",
      type: "Follow-up",
      status: "completed",
    },
    {
      id: "A-003",
      time: "02:00 PM",
      patient: "Robert Taylor",
      type: "Initial Assessment",
      status: "confirmed",
    },
    {
      id: "A-004",
      time: "03:30 PM",
      patient: "Maria Garcia",
      type: "Routine Checkup",
      status: "pending",
    },
  ],
};

function getPatientStatusColor(status: string) {
  switch (status) {
    case "stable":
      return "bg-green-100 text-green-800";
    case "improving":
      return "bg-blue-100 text-blue-800";
    case "attention":
      return "bg-yellow-100 text-yellow-800";
    case "critical":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getAppointmentStatusColor(status: string) {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800";
    case "completed":
      return "bg-blue-100 text-blue-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default async function DoctorDashboard({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const session = await getServerSession(AuthOptions);

  // If there's no session or required user fields are missing, return unauthorized
  if (!session || !session.user) {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Unauthorized Access
      </div>
    );
  }

  const user = session.user as any;
  const userToken = user?.token;

  // If tokens or slugs don't match, return unauthorized
  if (token !== userToken || user.role !== "doctor") {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Unauthorized Access
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, {user.name}!
              </h1>
              <p className="text-gray-600 mt-2">
                Your medical practice dashboard for today,{" "}
                {new Date().toLocaleDateString()}.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Patient
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">
                Total Patients
              </CardTitle>
              <Users className="h-4 w-4 text-blue-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {doctorData.patients.total}
              </div>
              <p className="text-xs text-blue-200">
                +{doctorData.patients.newThisWeek} new this week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">
                Today's Appointments
              </CardTitle>
              <Calendar className="h-4 w-4 text-green-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {doctorData.appointments.today}
              </div>
              <p className="text-xs text-green-200">
                {doctorData.appointments.completed} completed
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">
                Active Patients
              </CardTitle>
              <Activity className="h-4 w-4 text-purple-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {doctorData.patients.active}
              </div>
              <p className="text-xs text-purple-200">Currently under care</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">
                Follow-ups Due
              </CardTitle>
              <Clock className="h-4 w-4 text-orange-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {doctorData.patients.followUps}
              </div>
              <p className="text-xs text-orange-200">This week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {doctorData.todayAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {appointment.time}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">{appointment.patient}</h4>
                        <p className="text-sm text-gray-600">
                          {appointment.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={getAppointmentStatusColor(
                          appointment.status,
                        )}
                        variant="outline"
                      >
                        {appointment.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used medical tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                asChild
                className="w-full justify-start"
                variant="outline"
              >
                <Link href={`${user.roleBasedURL}/patients`}>
                  <Users className="mr-2 h-4 w-4" />
                  View All Patients
                </Link>
              </Button>
              <Button
                asChild
                className="w-full justify-start"
                variant="outline"
              >
                <Link href={`${user.roleBasedURL}/appointments`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Manage Schedule
                </Link>
              </Button>
              <Button
                asChild
                className="w-full justify-start"
                variant="outline"
              >
                <Link href={`${user.roleBasedURL}/records`}>
                  <FileText className="mr-2 h-4 w-4" />
                  Medical Records
                </Link>
              </Button>
              <Button
                asChild
                className="w-full justify-start"
                variant="outline"
              >
                <Link href={`${user.roleBasedURL}/telemedicine`}>
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Telemedicine
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Patients
            </CardTitle>
            <CardDescription>Patients you've seen recently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {doctorData.recentPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">
                          {patient.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Age: {patient.age} • ID: {patient.id}
                        </p>
                      </div>
                      <Badge
                        className={getPatientStatusColor(patient.status)}
                        variant="outline"
                      >
                        {patient.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        Last Visit:{" "}
                        {new Date(patient.lastVisit).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-600">
                        Next:{" "}
                        {new Date(patient.nextAppointment).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Condition: </span>
                      {patient.condition}
                    </p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-3 w-3" />
                      View Record
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="mr-2 h-3 w-3" />
                      Call Patient
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="mr-2 h-3 w-3" />
                      Send Message
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medical Insights */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Practice Statistics
              </CardTitle>
              <CardDescription>
                Your practice metrics this month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Patient Satisfaction
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-bold text-green-600">4.8/5.0</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Appointment Completion
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-bold">96%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Average Consultation Time
                </span>
                <span className="font-bold">18 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Follow-up Compliance
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-bold text-green-600">89%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Clinical Alerts
              </CardTitle>
              <CardDescription>Important patient notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Lab Results Pending</p>
                    <p className="text-xs text-gray-600">
                      3 patients awaiting review
                    </p>
                  </div>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Critical Values</p>
                    <p className="text-xs text-gray-600">1 urgent result</p>
                  </div>
                  <Badge variant="secondary">1</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Medication Renewals</p>
                    <p className="text-xs text-gray-600">5 prescriptions due</p>
                  </div>
                  <Badge variant="secondary">5</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
