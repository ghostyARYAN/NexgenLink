import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  User,
  Edit,
  Save,
  Camera,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Shield,
  Bell,
  Lock,
  Download,
  Upload,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
  Settings
} from "lucide-react";

// Mock user profile data
const userProfileData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    dateOfBirth: "1995-06-15",
    gender: "Male",
    bloodType: "O+",
    height: "5'10\"",
    weight: "175 lbs",
    address: {
      street: "123 Main Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62701",
      country: "USA"
    }
  },
  medicalInfo: {
    emergencyContacts: [
      {
        name: "Sarah Doe",
        relationship: "Sister",
        phone: "(555) 987-6543",
        email: "sarah.doe@email.com"
      },
      {
        name: "Michael Johnson",
        relationship: "Friend",
        phone: "(555) 456-7890",
        email: "michael.j@email.com"
      }
    ],
    allergies: ["Peanuts", "Shellfish", "Penicillin"],
    medications: ["Vitamin D3 - 1000 IU daily", "Multivitamin - 1 daily"],
    chronicConditions: ["None"],
    surgicalHistory: ["Appendectomy - 2018"],
    familyHistory: ["Hypertension - Father", "Diabetes - Mother"],
    insuranceInfo: {
      provider: "Blue Cross Blue Shield",
      policyNumber: "BC123456789",
      groupNumber: "GRP001"
    }
  },
  preferences: {
    language: "English",
    timeZone: "Central Time (CT)",
    notifications: {
      appointmentReminders: true,
      medicationReminders: true,
      healthTips: true,
      promotionalEmails: false
    },
    privacy: {
      shareDataWithPartners: false,
      allowMarketingCommunications: false,
      enableTwoFactorAuth: true
    }
  }
};

export default async function UserProfilePage({
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

  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information, medical history, and account preferences.
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Profile Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Overview</CardTitle>
          <CardDescription>Your basic profile information and account status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-blue-600" />
              </div>
              <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8">
                <Camera className="h-3 w-3" />
              </Button>
            </div>
            <div className="space-y-2 flex-1">
              <h2 className="text-2xl font-bold">{userProfileData.personalInfo.firstName} {userProfileData.personalInfo.lastName}</h2>
              <p className="text-gray-600">{userProfileData.personalInfo.email}</p>
              <p className="text-gray-600">{userProfileData.personalInfo.phone}</p>
              <div className="flex gap-2 mt-3">
                <Badge className="bg-green-100 text-green-800" variant="outline">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
                <Badge className="bg-blue-100 text-blue-800" variant="outline">
                  Active Patient
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your basic personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input value={userProfileData.personalInfo.firstName} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input value={userProfileData.personalInfo.lastName} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input value={userProfileData.personalInfo.email} type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <Input value={userProfileData.personalInfo.phone} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date of Birth</label>
              <Input value={userProfileData.personalInfo.dateOfBirth} type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Gender</label>
              <Input value={userProfileData.personalInfo.gender} />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Address Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Street Address</label>
                <Input value={userProfileData.personalInfo.address.street} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <Input value={userProfileData.personalInfo.address.city} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">State</label>
                <Input value={userProfileData.personalInfo.address.state} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">ZIP Code</label>
                <Input value={userProfileData.personalInfo.address.zipCode} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Country</label>
                <Input value={userProfileData.personalInfo.address.country} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Information</CardTitle>
          <CardDescription>Your health profile and medical history</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Blood Type</label>
              <Input value={userProfileData.personalInfo.bloodType} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Height</label>
              <Input value={userProfileData.personalInfo.height} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Weight</label>
              <Input value={userProfileData.personalInfo.weight} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Allergies</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {userProfileData.medicalInfo.allergies.map((allergy, index) => (
                  <Badge key={index} variant="outline" className="bg-red-50 text-red-700">
                    {allergy}
                    <button className="ml-2 text-red-500 hover:text-red-700">×</button>
                  </Badge>
                ))}
                <Button size="sm" variant="outline">+ Add Allergy</Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Current Medications</label>
              <div className="space-y-2 mt-2">
                {userProfileData.medicalInfo.medications.map((medication, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">{medication}</span>
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                <Button size="sm" variant="outline" className="w-full">+ Add Medication</Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Family Medical History</label>
              <div className="space-y-2 mt-2">
                {userProfileData.medicalInfo.familyHistory.map((history, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">{history}</span>
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                <Button size="sm" variant="outline" className="w-full">+ Add Family History</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
          <CardDescription>People to contact in case of medical emergency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userProfileData.medicalInfo.emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input value={contact.name} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Relationship</label>
                    <Input value={contact.relationship} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input value={contact.phone} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input value={contact.email} type="email" />
                  </div>
                </div>
                <Button size="sm" variant="outline" className="mt-3">
                  <Edit className="mr-2 h-3 w-3" />
                  Edit Contact
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">+ Add Emergency Contact</Button>
          </div>
        </CardContent>
      </Card>

      {/* Insurance Information */}
      <Card>
        <CardHeader>
          <CardTitle>Insurance Information</CardTitle>
          <CardDescription>Your health insurance details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Insurance Provider</label>
              <Input value={userProfileData.medicalInfo.insuranceInfo.provider} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Policy Number</label>
              <Input value={userProfileData.medicalInfo.insuranceInfo.policyNumber} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Group Number</label>
              <Input value={userProfileData.medicalInfo.insuranceInfo.groupNumber} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Upload Insurance Card</label>
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload Front & Back
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Notifications */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Appointment Reminders</p>
                <p className="text-xs text-gray-600">Get notified about upcoming appointments</p>
              </div>
              <Button variant="outline" size="sm">
                {userProfileData.preferences.notifications.appointmentReminders ? "On" : "Off"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Medication Reminders</p>
                <p className="text-xs text-gray-600">Daily medication and prescription reminders</p>
              </div>
              <Button variant="outline" size="sm">
                {userProfileData.preferences.notifications.medicationReminders ? "On" : "Off"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Health Tips</p>
                <p className="text-xs text-gray-600">Receive personalized health advice</p>
              </div>
              <Button variant="outline" size="sm">
                {userProfileData.preferences.notifications.healthTips ? "On" : "Off"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Promotional Emails</p>
                <p className="text-xs text-gray-600">Marketing and promotional communications</p>
              </div>
              <Button variant="outline" size="sm">
                {userProfileData.preferences.notifications.promotionalEmails ? "On" : "Off"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacy & Security</CardTitle>
            <CardDescription>Manage your account security and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-gray-600">Extra security for your account</p>
              </div>
              <Badge className="bg-green-100 text-green-800" variant="outline">
                <Shield className="mr-1 h-3 w-3" />
                Enabled
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Data Sharing</p>
                <p className="text-xs text-gray-600">Share data with healthcare partners</p>
              </div>
              <Button variant="outline" size="sm">
                {userProfileData.preferences.privacy.shareDataWithPartners ? "Allowed" : "Blocked"}
              </Button>
            </div>
            <Button variant="outline" className="w-full">
              <Lock className="mr-2 h-4 w-4" />
              Change Password
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download My Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-6">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Advanced Settings
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Profile
        </Button>
      </div>
    </div>
  );
}