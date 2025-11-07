import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText,
  Download,
  TrendingUp,
  Users,
  Calendar,
  Activity,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  LineChart,
  Filter,
  Search,
  FileBarChart
} from "lucide-react";

// Mock reports data
const reportsData = [
  {
    id: "R-001",
    title: "Monthly Health Summary",
    type: "health-overview",
    date: "2024-01-31",
    status: "completed",
    description: "Comprehensive health status report for January 2024"
  },
  {
    id: "R-002",
    title: "Vaccination Coverage Report",
    type: "vaccination",
    date: "2024-01-28",
    status: "completed",
    description: "Current vaccination status and compliance tracking"
  },
  {
    id: "R-003",
    title: "Incident Reports",
    type: "incidents",
    date: "2024-01-25",
    status: "draft",
    description: "Health incidents and emergency responses for January"
  },
  {
    id: "R-004",
    title: "Chronic Conditions Tracking",
    type: "chronic",
    date: "2024-01-20",
    status: "completed",
    description: "Students with ongoing health conditions monitoring"
  },
  {
    id: "R-005",
    title: "Health Screening Results",
    type: "screening",
    date: "2024-01-15",
    status: "completed",
    description: "Annual health screening summary and follow-ups"
  }
];

// Mock health metrics
const healthMetrics = {
  totalStudents: 1245,
  healthyStudents: 1180,
  studentsNeedingAttention: 45,
  vaccinationCompliance: 98.5,
  incidentsThisMonth: 12,
  screeningsCompleted: 1200,
  chronicConditions: 28,
  allergyAlerts: 156
};

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'draft':
      return 'bg-yellow-100 text-yellow-800';
    case 'pending':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getReportTypeIcon(type: string) {
  switch (type) {
    case 'health-overview':
      return <Activity className="h-4 w-4" />;
    case 'vaccination':
      return <CheckCircle className="h-4 w-4" />;
    case 'incidents':
      return <AlertTriangle className="h-4 w-4" />;
    case 'chronic':
      return <FileText className="h-4 w-4" />;
    case 'screening':
      return <Users className="h-4 w-4" />;
    default:
      return <FileBarChart className="h-4 w-4" />;
  }
}

export default async function SchoolReportsPage({
  params,
}: {
  params: Promise<{
    token: string;
    pincode: string;
    state: string;
    name: string;
  }>;
}) {
  const { token, pincode, state, name } = await params;
  const session = await getServerSession(AuthOptions);

  if (!session || !session.user) {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  const user = session.user as any;
  const userToken = user?.token;
  const userPincode = user?.pincode;
  const userState = user?.state;
  const userName = user?.name?.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (token !== userToken || pincode !== userPincode || state !== userState || name !== userName || user.role !== "school") {
    return <div className="flex items-center justify-center h-full text-red-500">Unauthorized Access</div>;
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Health Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Generate and view comprehensive health reports for {user.name}.
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Generate New Report
        </Button>
      </div>

      {/* Health Metrics Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthMetrics.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Currently enrolled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Healthy Students</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{healthMetrics.healthyStudents}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((healthMetrics.healthyStudents / healthMetrics.totalStudents) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vaccination Rate</CardTitle>
            <Activity className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{healthMetrics.vaccinationCompliance}%</div>
            <p className="text-xs text-muted-foreground">Up to date</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{healthMetrics.incidentsThisMonth}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Report Generation */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Report Generation</CardTitle>
          <CardDescription>Generate commonly used health reports instantly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col">
              <BarChart3 className="h-6 w-6 mb-2" />
              <span>Health Overview</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <PieChart className="h-6 w-6 mb-2" />
              <span>Vaccination Status</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <LineChart className="h-6 w-6 mb-2" />
              <span>Trend Analysis</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              <span>Custom Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Report Library</CardTitle>
          <CardDescription>Browse and manage your health reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reports by title, type, or date..."
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
            </div>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {reportsData.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                    {getReportTypeIcon(report.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-sm text-gray-600">{report.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{new Date(report.date).toLocaleDateString()}</span>
                      <Badge className={getStatusColor(report.status)} variant="outline">
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Health Analytics Dashboard */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Health Trends</CardTitle>
            <CardDescription>Monthly health statistics and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Students with Good Health</span>
                <span className="text-sm font-bold text-green-600">
                  {Math.round((healthMetrics.healthyStudents / healthMetrics.totalStudents) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${(healthMetrics.healthyStudents / healthMetrics.totalStudents) * 100}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Vaccination Compliance</span>
                <span className="text-sm font-bold text-blue-600">{healthMetrics.vaccinationCompliance}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${healthMetrics.vaccinationCompliance}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Health Screenings Completed</span>
                <span className="text-sm font-bold text-purple-600">
                  {Math.round((healthMetrics.screeningsCompleted / healthMetrics.totalStudents) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full" 
                  style={{ width: `${(healthMetrics.screeningsCompleted / healthMetrics.totalStudents) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Categories</CardTitle>
            <CardDescription>Breakdown of health-related data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Healthy Students</span>
                </div>
                <span className="text-sm font-bold">{healthMetrics.healthyStudents}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Need Attention</span>
                </div>
                <span className="text-sm font-bold">{healthMetrics.studentsNeedingAttention}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Chronic Conditions</span>
                </div>
                <span className="text-sm font-bold">{healthMetrics.chronicConditions}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Allergy Alerts</span>
                </div>
                <span className="text-sm font-bold">{healthMetrics.allergyAlerts}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Monthly Incidents</span>
                </div>
                <span className="text-sm font-bold">{healthMetrics.incidentsThisMonth}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Export & Share</CardTitle>
          <CardDescription>Export reports in various formats for sharing and archiving</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export to PDF
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export to Excel
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export to CSV
            </Button>
            <Button variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}