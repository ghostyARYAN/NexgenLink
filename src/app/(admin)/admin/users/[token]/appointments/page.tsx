import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Video,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Stethoscope,
  User
} from "lucide-react";

// Mock appointments data
const appointmentsData = [
  {
    id: "A-001",
    doctor: {
      name: "Dr. Sarah Smith",
      specialty: "General Practice",
      image: "/placeholder-doctor.jpg"
    },
    date: "2024-02-15",
    time: "10:00 AM",
    duration: "30 min",
    type: "in-person",
    status: "confirmed",
    location: "Medical Center - Room 201",
    phone: "(555) 123-4567",
    notes: "Annual physical examination",
    reason: "Annual Checkup"
  },
  {
    id: "A-002",
    doctor: {
      name: "Dr. Jennifer Johnson",
      specialty: "Cardiology",
      image: "/placeholder-doctor.jpg"
    },
    date: "2024-02-28",
    time: "2:00 PM",
    duration: "45 min",
    type: "video",
    status: "confirmed",
    location: "Virtual Consultation",
    phone: "(555) 987-6543",
    notes: "Follow-up consultation for blood pressure monitoring",
    reason: "Follow-up Consultation"
  },
  {
    id: "A-003",
    doctor: {
      name: "Dr. Michael Brown",
      specialty: "Dermatology",
      image: "/placeholder-doctor.jpg"
    },
    date: "2024-03-10",
    time: "11:30 AM",
    duration: "30 min",
    type: "in-person",
    status: "pending",
    location: "Dermatology Clinic - Room 105",
    phone: "(555) 456-7890",
    notes: "Skin examination and mole check",
    reason: "Skin Screening"
  },
  {
    id: "A-004",
    doctor: {
      name: "Dr. Lisa Davis",
      specialty: "Dentistry",
      image: "/placeholder-doctor.jpg"
    },
    date: "2024-01-20",
    time: "9:00 AM",
    duration: "60 min",
    type: "in-person",
    status: "completed",
    location: "Dental Office - Chair 3",
    phone: "(555) 321-0987",
    notes: "Routine cleaning and examination",
    reason: "Dental Cleaning"
  },
  {
    id: "A-005",
    doctor: {
      name: "Dr. Robert Wilson",
      specialty: "Ophthalmology",
      image: "/placeholder-doctor.jpg"
    },
    date: "2024-01-05",
    time: "3:30 PM",
    duration: "45 min",
    type: "in-person",
    status: "completed",
    location: "Eye Center - Room 2",
    phone: "(555) 654-3210",
    notes: "Annual eye examination",
    reason: "Eye Exam"
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'confirmed':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'pending':
      return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-blue-600" />;
    case 'cancelled':
      return <XCircle className="h-4 w-4 text-red-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'video':
      return <Video className="h-4 w-4 text-blue-600" />;
    case 'in-person':
      return <MapPin className="h-4 w-4 text-green-600" />;
    default:
      return <Calendar className="h-4 w-4 text-gray-600" />;
  }
}

export default async function UserAppointmentsPage({
  params,
}: {
  params: Promise<{
    token: string;

  }>;
}) {
  const { token } = await params;
  const session = await getServerSession(AuthOptions);

  if (!session || !session.user) {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  const user = session.user as any;
  const userToken = user?.token;
  const userPincode = user?.pincode;
  const userState = user?.state;
  const userName = user?.name?.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (token !== userToken || user.role !== "student") {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  // Separate appointments by status
  const upcomingAppointments = appointmentsData.filter(apt =>
    new Date(apt.date) >= new Date() && (apt.status === 'confirmed' || apt.status === 'pending')
  );
  const pastAppointments = appointmentsData.filter(apt =>
    new Date(apt.date) < new Date() || apt.status === 'completed'
  );

  const stats = {
    total: appointmentsData.length,
    upcoming: upcomingAppointments.length,
    completed: appointmentsData.filter(apt => apt.status === 'completed').length,
    pending: appointmentsData.filter(apt => apt.status === 'pending').length
  };

  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Appointments</h1>
          <p className="text-muted-foreground">
            Manage your medical appointments and consultation schedule.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Book New Appointment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.upcoming}</div>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <p className="text-xs text-muted-foreground">Finished</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Find Appointments</CardTitle>
          <CardDescription>Search and filter your appointment history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by doctor name, specialty, or date..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Status
              </Button>
              <Button variant="outline">
                <Stethoscope className="mr-2 h-4 w-4" />
                By Specialty
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Appointments */}
      {upcomingAppointments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled appointments and consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-6 bg-blue-50 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{appointment.doctor.name}</h3>
                          <Badge className={getStatusColor(appointment.status)} variant="outline">
                            {getStatusIcon(appointment.status)}
                            <span className="ml-1">{appointment.status}</span>
                          </Badge>
                        </div>

                        <p className="text-sm text-gray-600">{appointment.doctor.specialty}</p>

                        <div className="grid gap-2 md:grid-cols-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{appointment.time} ({appointment.duration})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTypeIcon(appointment.type)}
                            <span>{appointment.type === 'video' ? 'Video Call' : appointment.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span>{appointment.phone}</span>
                          </div>
                        </div>

                        <div className="bg-white p-3 rounded-md border-l-4 border-blue-500">
                          <p className="text-sm"><strong>Reason:</strong> {appointment.reason}</p>
                          <p className="text-sm text-gray-600">{appointment.notes}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm">
                        {appointment.type === 'video' ? (
                          <>
                            <Video className="mr-2 h-3 w-3" />
                            Join Call
                          </>
                        ) : (
                          <>
                            <MapPin className="mr-2 h-3 w-3" />
                            View Location
                          </>
                        )}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-3 w-3" />
                        Reschedule
                      </Button>
                      <Button size="sm" variant="outline">
                        <XCircle className="mr-2 h-3 w-3" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Past Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Appointment History</CardTitle>
          <CardDescription>Your completed and past appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastAppointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{appointment.doctor.name}</h3>
                        <Badge className={getStatusColor(appointment.status)} variant="outline">
                          {getStatusIcon(appointment.status)}
                          <span className="ml-1">{appointment.status}</span>
                        </Badge>
                      </div>

                      <p className="text-sm text-gray-600">{appointment.doctor.specialty}</p>

                      <div className="grid gap-2 md:grid-cols-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(appointment.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.time} ({appointment.duration})</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm"><strong>Reason:</strong> {appointment.reason}</p>
                        <p className="text-sm text-gray-600">{appointment.notes}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      View Summary
                    </Button>
                    <Button size="sm" variant="outline">
                      Book Follow-up
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg">Appointment Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Schedule New Appointment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              Set Reminders
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Next Appointment</span>
              <span className="font-bold text-green-600">
                {upcomingAppointments.length > 0 ?
                  new Date(upcomingAppointments[0].date).toLocaleDateString() :
                  'None scheduled'
                }
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>This Month</span>
              <span className="font-bold">{stats.upcoming}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Completion Rate</span>
              <span className="font-bold text-green-600">
                {Math.round((stats.completed / stats.total) * 100)}%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50">
          <CardHeader>
            <CardTitle className="text-lg">Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {upcomingAppointments.slice(0, 2).map((appointment, index) => (
              <div key={index} className="text-sm">
                <p className="font-medium text-orange-700">{appointment.doctor.name}</p>
                <p className="text-gray-600">
                  {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                </p>
              </div>
            ))}
            <Button size="sm" className="w-full" variant="outline">
              <AlertCircle className="mr-2 h-3 w-3" />
              Enable Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}