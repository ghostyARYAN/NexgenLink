import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Filter,
    Search,
    Download,
    Eye,
    UserCheck,
    Heart,
    Brain,
    Thermometer,
    Activity,
    Stethoscope,
    AlertTriangle,
    Calendar as Cal,
    MapPin,
    Phone,
    File
} from "lucide-react";
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
import PatientsStats from "./_components/Stats";
import RangerCalender from "@/components/custom/ranger-calender";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


// Sample patient data with diseases
const patientData = [
    {
        id: "P001",
        name: "Sarah Johnson",
        age: 34,
        gender: "Female",
        phone: "+1 (555) 123-4567",
        email: "sarah.johnson@email.com",
        address: "123 Main St, New York, NY 10001",
        diseases: ["Diabetes Type 2", "Hypertension"],
        severity: "moderate",
        lastVisit: "2024-01-15",
        nextAppointment: "2024-02-01",
        doctor: "Dr. Michael Chen",
        status: "active"
    },
    {
        id: "P002",
        name: "Robert Williams",
        age: 58,
        gender: "Male",
        phone: "+1 (555) 234-5678",
        email: "robert.williams@email.com",
        address: "456 Oak Ave, Los Angeles, CA 90210",
        diseases: ["Hypertension", "Heart Disease", "High Cholesterol"],
        severity: "high",
        lastVisit: "2024-01-20",
        nextAppointment: "2024-01-25",
        doctor: "Dr. Sarah Mitchell",
        status: "critical"
    },
    {
        id: "P003",
        name: "Emily Davis",
        age: 29,
        gender: "Female",
        phone: "+1 (555) 345-6789",
        email: "emily.davis@email.com",
        address: "789 Pine St, Chicago, IL 60601",
        diseases: ["Asthma", "Allergies"],
        severity: "mild",
        lastVisit: "2024-01-10",
        nextAppointment: "2024-03-01",
        doctor: "Dr. James Wilson",
        status: "stable"
    },
    {
        id: "P004",
        name: "Michael Brown",
        age: 45,
        gender: "Male",
        phone: "+1 (555) 456-7890",
        email: "michael.brown@email.com",
        address: "321 Elm St, Houston, TX 77001",
        diseases: ["Diabetes Type 1", "Kidney Disease"],
        severity: "high",
        lastVisit: "2024-01-18",
        nextAppointment: "2024-01-28",
        doctor: "Dr. Lisa Anderson",
        status: "monitoring"
    },
    {
        id: "P005",
        name: "Jessica Miller",
        age: 52,
        gender: "Female",
        phone: "+1 (555) 567-8901",
        email: "jessica.miller@email.com",
        address: "654 Maple Dr, Phoenix, AZ 85001",
        diseases: ["Arthritis", "Osteoporosis"],
        severity: "moderate",
        lastVisit: "2024-01-12",
        nextAppointment: "2024-02-15",
        doctor: "Dr. David Thompson",
        status: "active"
    },
    {
        id: "P006",
        name: "David Wilson",
        age: 67,
        gender: "Male",
        phone: "+1 (555) 678-9012",
        email: "david.wilson@email.com",
        address: "987 Cedar Ln, Miami, FL 33101",
        diseases: ["COPD", "Heart Disease", "Diabetes Type 2"],
        severity: "high",
        lastVisit: "2024-01-22",
        nextAppointment: "2024-01-30",
        doctor: "Dr. Maria Rodriguez",
        status: "critical"
    }
];

// Disease categories
const diseaseCategories = [
    { name: "All Diseases", count: patientData.length, color: "bg-gray-100 text-gray-700" },
    { name: "Diabetes", count: patientData.filter(p => p.diseases.some(d => d.includes("Diabetes"))).length, color: "bg-red-100 text-red-700" },
    { name: "Hypertension", count: patientData.filter(p => p.diseases.includes("Hypertension")).length, color: "bg-orange-100 text-orange-700" },
    { name: "Heart Disease", count: patientData.filter(p => p.diseases.includes("Heart Disease")).length, color: "bg-pink-100 text-pink-700" },
    { name: "Respiratory", count: patientData.filter(p => p.diseases.some(d => d.includes("Asthma") || d.includes("COPD"))).length, color: "bg-blue-100 text-blue-700" },
    { name: "Kidney Disease", count: patientData.filter(p => p.diseases.includes("Kidney Disease")).length, color: "bg-purple-100 text-purple-700" },
    { name: "Musculoskeletal", count: patientData.filter(p => p.diseases.some(d => d.includes("Arthritis") || d.includes("Osteoporosis"))).length, color: "bg-green-100 text-green-700" }
];

export default async function AdminPatientsPage({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;
    const session = await getServerSession(AuthOptions);

    if (!session || session.user.token !== token || session.user.role !== "admin") {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="text-red-500 text-xl font-semibold">Unauthorized Access</div>
                    <p className="text-gray-600 mt-2">You do not have permission to view this page.</p>
                </div>
            </div>
        );
    }

    const user = session.user as any;

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "mild": return "bg-green-100 text-green-800";
            case "moderate": return "bg-yellow-100 text-yellow-800";
            case "high": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-green-100 text-green-800";
            case "stable": return "bg-blue-100 text-blue-800";
            case "monitoring": return "bg-yellow-100 text-yellow-800";
            case "critical": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Patient Disease Management
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Filter and manage patients by disease conditions and health status
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Export Data
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Export Patient Data</DialogTitle>
                                <DialogDescription>
                                    Choose the format and filters to export patient records.
                                </DialogDescription>
                            </DialogHeader>
                            <form className="grid gap-4">
                                <div className="grid gap-2">
                                    <Select>
                                        <SelectTrigger className="w-93">
                                            <File />
                                            <SelectValue placeholder="Document Format" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">PDF</SelectItem>
                                            <SelectItem value="dark">CSV</SelectItem>
                                            <SelectItem value="system">JSON</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <RangerCalender />
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Export</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Stats of Patients */}
            <PatientsStats />

            {/* Disease Categories Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {diseaseCategories.map((category) => (
                    <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4 text-center">
                            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${category.color} mb-2`}>
                                {category.name}
                            </div>
                            <div className="text-2xl font-bold">{category.count}</div>
                            <div className="text-xs text-muted-foreground">patients</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Filters and Search */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filter Patients
                    </CardTitle>
                    <CardDescription>
                        Use filters to find patients with specific conditions or criteria
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by patient name, ID, or disease..."
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>All Diseases</option>
                                <option>Diabetes</option>
                                <option>Hypertension</option>
                                <option>Heart Disease</option>
                                <option>Respiratory</option>
                                <option>Kidney Disease</option>
                            </select>
                            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>All Severity</option>
                                <option>Mild</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Stable</option>
                                <option>Monitoring</option>
                                <option>Critical</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Patient List */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Activity className="h-5 w-5" />
                            Patient Records ({patientData.length})
                        </div>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View All
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {patientData.map((patient) => (
                            <div
                                key={patient.id}
                                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                                    {/* Patient Info */}
                                    <div className="lg:col-span-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-semibold text-lg">{patient.name}</h3>
                                                <p className="text-sm text-gray-600">ID: {patient.id}</p>
                                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                                    <span>{patient.age} years • {patient.gender}</span>
                                                    <span className="flex items-center gap-1">
                                                        <Phone className="h-3 w-3" />
                                                        {patient.phone}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                                                    <MapPin className="h-3 w-3" />
                                                    <span className="truncate">{patient.address}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Badge className={getSeverityColor(patient.severity)}>
                                                    {patient.severity} severity
                                                </Badge>
                                                <Badge className={getStatusColor(patient.status)}>
                                                    {patient.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Diseases */}
                                    <div>
                                        <h4 className="font-medium mb-2 flex items-center gap-2">
                                            <Stethoscope className="h-4 w-4" />
                                            Conditions
                                        </h4>
                                        <div className="space-y-1">
                                            {patient.diseases.map((disease, index) => (
                                                <Badge key={index} variant="outline" className="mr-2 mb-1">
                                                    {disease}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Medical Info */}
                                    <div>
                                        <h4 className="font-medium mb-2 flex items-center gap-2">
                                            <Cal className="h-4 w-4" />
                                            Medical Schedule
                                        </h4>
                                        <div className="text-sm space-y-1">
                                            <p><span className="text-gray-600">Doctor:</span> {patient.doctor}</p>
                                            <p><span className="text-gray-600">Last Visit:</span> {patient.lastVisit}</p>
                                            <p><span className="text-gray-600">Next Appointment:</span> {patient.nextAppointment}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Thermometer className="h-4 w-4" />
                                        <span>Health monitoring active</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="sm">
                                            <Eye className="h-4 w-4 mr-1" />
                                            View Details
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Cal className="h-4 w-4 mr-1" />
                                            Schedule
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Heart className="h-4 w-4 mr-1" />
                                            Health Records
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="font-semibold">Critical Cases</h3>
                        <p className="text-2xl font-bold text-red-600">
                            {patientData.filter(p => p.status === "critical").length}
                        </p>
                        <p className="text-sm text-gray-600">Require immediate attention</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-yellow-100 rounded-full">
                            <Activity className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h3 className="font-semibold">Monitoring</h3>
                        <p className="text-2xl font-bold text-yellow-600">
                            {patientData.filter(p => p.status === "monitoring").length}
                        </p>
                        <p className="text-sm text-gray-600">Under observation</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full">
                            <UserCheck className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold">Stable</h3>
                        <p className="text-2xl font-bold text-green-600">
                            {patientData.filter(p => p.status === "stable" || p.status === "active").length}
                        </p>
                        <p className="text-sm text-gray-600">Healthy and active</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full">
                            <Heart className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold">Total Patients</h3>
                        <p className="text-2xl font-bold text-blue-600">{patientData.length}</p>
                        <p className="text-sm text-gray-600">In the system</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}