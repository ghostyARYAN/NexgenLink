import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Download,
  Search,
  Calendar,
  Eye,
  Filter,
  Share,
  Upload,
  Heart,
  Activity,
  Clipboard,
  TestTube,
  Stethoscope
} from "lucide-react";
import PatientsStats from "@/components/custom/bento-grid";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FileUpload from "./_components/file-upload";

// Mock reports data for user
const userReportsData = [
  {
    id: "R-001",
    title: "Annual Physical Examination",
    type: "checkup",
    date: "2024-01-15",
    doctor: "Dr. Sarah Smith",
    specialty: "General Practice",
    status: "completed",
    summary: "Comprehensive annual physical with all vitals within normal range",
    files: ["Physical_Exam_2024.pdf", "Lab_Results_2024.pdf"]
  },
  {
    id: "R-002",
    title: "Blood Work Panel",
    type: "lab",
    date: "2024-01-15",
    doctor: "Dr. Sarah Smith",
    specialty: "General Practice",
    status: "completed",
    summary: "Complete blood count, metabolic panel - all results normal",
    files: ["Blood_Work_Jan_2024.pdf"]
  },
  {
    id: "R-003",
    title: "Chest X-Ray",
    type: "imaging",
    date: "2024-01-10",
    doctor: "Dr. Michael Williams",
    specialty: "Radiology",
    status: "completed",
    summary: "Routine chest X-ray - lungs clear, heart size normal",
    files: ["Chest_XRay_2024.pdf", "Radiology_Report.pdf"]
  },
  {
    id: "R-004",
    title: "Cardiology Consultation",
    type: "consultation",
    date: "2023-12-20",
    doctor: "Dr. Jennifer Johnson",
    specialty: "Cardiology",
    status: "completed",
    summary: "Follow-up consultation - heart rhythm normal, blood pressure optimal",
    files: ["Cardiology_Report_Dec2023.pdf"]
  },
  {
    id: "R-005",
    title: "Eye Examination",
    type: "specialty",
    date: "2023-11-28",
    doctor: "Dr. Robert Brown",
    specialty: "Ophthalmology",
    status: "completed",
    summary: "Annual eye exam - vision 20/20, no signs of disease",
    files: ["Eye_Exam_Report_2023.pdf"]
  }
];

// Mock upcoming appointments
const upcomingTests = [
  {
    id: "T-001",
    title: "Dental Cleaning",
    date: "2024-02-15",
    doctor: "Dr. Lisa Davis",
    specialty: "Dentistry"
  },
  {
    id: "T-002",
    title: "Dermatology Check",
    date: "2024-03-10",
    doctor: "Dr. Mark Wilson",
    specialty: "Dermatology"
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'checkup':
      return <Stethoscope className="h-4 w-4" />;
    case 'lab':
      return <TestTube className="h-4 w-4" />;
    case 'imaging':
      return <Activity className="h-4 w-4" />;
    case 'consultation':
      return <Heart className="h-4 w-4" />;
    case 'specialty':
      return <Eye className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
}

export default async function UserReportsPage({
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

  if (token !== userToken || user.role !== "student") {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  const stats = {
    totalReports: userReportsData.length,
    completedTests: userReportsData.filter(r => r.status === 'completed').length,
    upcomingTests: upcomingTests.length,
    recentReports: userReportsData.filter(r => new Date(r.date) > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)).length
  };

  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Medical Reports</h1>
          <p className="text-muted-foreground">
            View and manage your medical records, test results, and health documents.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Upload Document</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Medical Document</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <FileUpload />
          </DialogContent>
        </Dialog>
      </div>

      <PatientsStats />

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search Medical Reports</CardTitle>
          <CardDescription>Find specific reports, test results, or medical documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by report title, doctor, or date..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Type
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
              <Button variant="outline">
                <Stethoscope className="mr-2 h-4 w-4" />
                By Doctor
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Appointments/Tests */}
      {upcomingTests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled medical appointments and tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{test.title}</h3>
                      <p className="text-sm text-gray-600">{test.doctor} - {test.specialty}</p>
                      <p className="text-xs text-gray-500">{new Date(test.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Medical Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Reports History</CardTitle>
          <CardDescription>Your complete medical records and test results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userReportsData.map((report) => (
              <div key={report.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      {getTypeIcon(report.type)}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{report.title}</h3>
                        <Badge className={getStatusColor(report.status)} variant="outline">
                          {report.status}
                        </Badge>
                      </div>

                      <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Doctor:</strong> {report.doctor}</p>
                        <p><strong>Specialty:</strong> {report.specialty}</p>
                        <p><strong>Date:</strong> {new Date(report.date).toLocaleDateString()}</p>
                      </div>

                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                        <strong>Summary:</strong> {report.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs font-medium text-gray-700">Files:</span>
                        {report.files.map((file, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {file}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm">
                      <Eye className="mr-2 h-3 w-3" />
                      View Report
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="mr-2 h-3 w-3" />
                      Share
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
            <CardTitle className="text-lg">Document Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload New Document
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download All Reports
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share with Doctor
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg">Health Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Recent Checkups</span>
              <span className="font-bold text-green-600">{stats.recentReports}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Normal Results</span>
              <span className="font-bold text-green-600">{stats.completedTests}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Health Status</span>
              <span className="font-bold text-green-600">Good</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50">
          <CardHeader>
            <CardTitle className="text-lg">Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <p className="font-medium text-orange-700">Upcoming Appointments</p>
              <p className="text-gray-600">{stats.upcomingTests} scheduled visits</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-blue-700">Annual Checkup</p>
              <p className="text-gray-600">Due in 6 months</p>
            </div>
            <Button size="sm" className="w-full" variant="outline">
              <Calendar className="mr-2 h-3 w-3" />
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}