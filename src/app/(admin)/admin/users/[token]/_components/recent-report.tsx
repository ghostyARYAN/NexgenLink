import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import ShareOption from "./share";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    FileText,
    Download,
    Share2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const recentReports = [
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

export default function RecentReport() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Medical Reports</CardTitle>
                <CardDescription>Your latest test results and medical documentation</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentReports.map((report) => (
                        <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{report.title}</h3>
                                    <p className="text-sm text-gray-600">Dr. {report.doctor}</p>
                                    <p className="text-xs text-gray-500">{new Date(report.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge className="bg-green-100 text-green-800" variant="outline">
                                    {report.status}
                                </Badge>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size="sm" variant="outline">
                                            <Share2 className="mr-2 size-3" />
                                            Share
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle>Share Documents</DialogTitle>
                                            <DialogDescription>
                                                Choose how you'd like to share your medical report.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <ShareOption />
                                    </DialogContent>
                                </Dialog>
                                <Button size="sm" variant="outline">
                                    <Download className="mr-2 size-3" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
