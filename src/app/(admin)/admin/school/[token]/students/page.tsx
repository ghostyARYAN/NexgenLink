import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Users,
  Search,
  Filter,
  Plus,
  Phone,
  Mail,
  Calendar,
  FileText,
  Activity,
  AlertTriangle,
  CheckCircle,
  UserPlus,
  Shield,
  BookOpen
} from "lucide-react";

// Mock students data for school
const studentsData = [
  {
    id: "S-001",
    name: "Emily Johnson",
    age: 12,
    grade: "7th",
    email: "parent.johnson@email.com",
    phone: "(555) 123-4567",
    healthStatus: "good",
    lastCheckup: "2024-01-10",
    nextCheckup: "2024-07-10",
    vaccinations: "current",
    allergies: ["Peanuts"],
    medications: ["None"],
    emergencyContact: "Sarah Johnson - Mother",
    bloodType: "O+",
    chronicConditions: "None"
  },
  {
    id: "S-002",
    name: "Marcus Williams",
    age: 10,
    grade: "5th",
    email: "parent.williams@email.com",
    phone: "(555) 987-6543",
    healthStatus: "attention",
    lastCheckup: "2024-01-08",
    nextCheckup: "2024-06-08",
    vaccinations: "current",
    allergies: ["None known"],
    medications: ["Albuterol inhaler"],
    emergencyContact: "Michael Williams - Father",
    bloodType: "A+",
    chronicConditions: "Asthma"
  },
  {
    id: "S-003",
    name: "Sofia Martinez",
    age: 8,
    grade: "3rd",
    email: "parent.martinez@email.com",
    phone: "(555) 456-7890",
    healthStatus: "good",
    lastCheckup: "2023-12-15",
    nextCheckup: "2024-06-15",
    vaccinations: "due",
    allergies: ["Shellfish"],
    medications: ["Children's Vitamins"],
    emergencyContact: "Maria Martinez - Mother",
    bloodType: "B+",
    chronicConditions: "None"
  },
  {
    id: "S-004",
    name: "James Chen",
    age: 11,
    grade: "6th",
    email: "parent.chen@email.com",
    phone: "(555) 321-0987",
    healthStatus: "good",
    lastCheckup: "2024-01-05",
    nextCheckup: "2024-07-05",
    vaccinations: "current",
    allergies: ["Dairy"],
    medications: ["Lactase enzyme"],
    emergencyContact: "Li Chen - Mother",
    bloodType: "AB+",
    chronicConditions: "Lactose intolerance"
  },
  {
    id: "S-005",
    name: "Ava Thompson",
    age: 9,
    grade: "4th",
    email: "parent.thompson@email.com",
    phone: "(555) 654-3210",
    healthStatus: "good",
    lastCheckup: "2024-01-12",
    nextCheckup: "2024-07-12",
    vaccinations: "current",
    allergies: ["None known"],
    medications: ["None"],
    emergencyContact: "Robert Thompson - Father",
    bloodType: "O-",
    chronicConditions: "None"
  }
];

function getHealthStatusColor(status: string) {
  switch (status) {
    case 'good':
      return 'bg-green-100 text-green-800';
    case 'attention':
      return 'bg-yellow-100 text-yellow-800';
    case 'concern':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getVaccinationStatusColor(status: string) {
  switch (status) {
    case 'current':
      return 'bg-green-100 text-green-800';
    case 'due':
      return 'bg-yellow-100 text-yellow-800';
    case 'overdue':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default async function SchoolStudentsPage({
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

  if (token !== userToken) {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  const stats = {
    total: studentsData.length,
    healthyStatus: studentsData.filter(s => s.healthStatus === 'good').length,
    needAttention: studentsData.filter(s => s.healthStatus === 'attention').length,
    vaccinationsCurrent: studentsData.filter(s => s.vaccinations === 'current').length,
    vaccinationsDue: studentsData.filter(s => s.vaccinations === 'due').length
  };

  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Health Management</h1>
          <p className="text-muted-foreground">
            Monitor and manage health records for all students at {user.name}.
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Student
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Currently enrolled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Healthy Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.healthyStatus}</div>
            <p className="text-xs text-muted-foreground">Good health status</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.needAttention}</div>
            <p className="text-xs text-muted-foreground">Health concerns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vaccinations Current</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.vaccinationsCurrent}</div>
            <p className="text-xs text-muted-foreground">Up to date</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vaccinations Due</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.vaccinationsDue}</div>
            <p className="text-xs text-muted-foreground">Need updates</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search Students</CardTitle>
          <CardDescription>Find specific students and their health information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, grade, or student ID..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Grade
              </Button>
              <Button variant="outline">
                <Activity className="mr-2 h-4 w-4" />
                Health Status
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Checkups Due
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students List */}
      <div className="space-y-4">
        {studentsData.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  {/* Student Header */}
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.age} years old • {student.grade} Grade • ID: {student.id}</p>
                    </div>
                    <Badge className={getHealthStatusColor(student.healthStatus)} variant="outline">
                      {student.healthStatus}
                    </Badge>
                    <Badge className={getVaccinationStatusColor(student.vaccinations)} variant="outline">
                      Vaccinations {student.vaccinations}
                    </Badge>
                  </div>

                  {/* Student Details Grid */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-gray-700">Parent Contact:</span>
                        <p>{student.email}</p>
                        <p>{student.phone}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Blood Type:</span>
                        <p>{student.bloodType}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-gray-700">Allergies:</span>
                        <p>{student.allergies.join(", ")}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Medications:</span>
                        <p>{student.medications.join(", ")}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-gray-700">Last Checkup:</span>
                        <p>{new Date(student.lastCheckup).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Next Checkup:</span>
                        <p className="text-blue-600 font-medium">{new Date(student.nextCheckup).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Health Information */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid gap-2 md:grid-cols-2 text-xs text-gray-600">
                      <div>
                        <span className="font-medium">Chronic Conditions:</span> {student.chronicConditions}
                      </div>
                      <div>
                        <span className="font-medium">Emergency Contact:</span> {student.emergencyContact}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 ml-6">
                  <Button size="sm">
                    <FileText className="mr-2 h-3 w-3" />
                    Health Record
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="mr-2 h-3 w-3" />
                    Schedule Checkup
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="mr-2 h-3 w-3" />
                    Call Parent
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="mr-2 h-3 w-3" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg">Student Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Health Notes
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Screening
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Export Records
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg">Health Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Students with Good Health</span>
              <span className="font-bold text-green-600">{Math.round((stats.healthyStatus / stats.total) * 100)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Vaccinations Current</span>
              <span className="font-bold text-green-600">{Math.round((stats.vaccinationsCurrent / stats.total) * 100)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Checkups This Month</span>
              <span className="font-bold">12</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50">
          <CardHeader>
            <CardTitle className="text-lg">Action Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <p className="font-medium text-orange-700">Vaccinations Due</p>
              <p className="text-gray-600">{stats.vaccinationsDue} students need updates</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-red-700">Health Concerns</p>
              <p className="text-gray-600">{stats.needAttention} students need attention</p>
            </div>
            <Button size="sm" className="w-full" variant="outline">
              <AlertTriangle className="mr-2 h-3 w-3" />
              Priority Actions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}