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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Settings,
  Shield,
  Database,
  Mail,
  Bell,
  Users,
  Lock,
  Server,
  Globe,
  Save,
  RefreshCw,
} from "lucide-react";

export default async function SettingsPage() {
  const session = await getServerSession(AuthOptions);

  if (!session || session.user.role !== "admin") {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Unauthorized Access
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Health & Campaign Settings
        </h1>
        <p className="text-muted-foreground">
          Configure platform settings, patient data policies, and outreach
          campaign preferences.
        </p>
      </div>

      <div className="grid gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Platform Settings
            </CardTitle>
            <CardDescription>
              Basic platform configuration and campaign defaults
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="systemName">Platform Name</Label>
                <Input
                  id="systemName"
                  placeholder="HealthCampaign Platform"
                  defaultValue="HealthCampaign Pro"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  placeholder="admin@example.com"
                  defaultValue={session.user.email || ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Campaign Timezone</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time</option>
                  <option value="America/Chicago">Central Time</option>
                  <option value="America/Denver">Mountain Time</option>
                  <option value="America/Los_Angeles">Pacific Time</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Platform Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security & Data Privacy
            </CardTitle>
            <CardDescription>
              Manage security policies and patient data access controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Password Policy</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Minimum password length</span>
                    <Input className="w-20" type="number" defaultValue="8" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Require special characters</span>
                    <Badge
                      className="bg-green-100 text-green-800"
                      variant="outline"
                    >
                      Enabled
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Password expiry (days)</span>
                    <Input className="w-20" type="number" defaultValue="90" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Session & Access</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Session timeout (minutes)</span>
                    <Input className="w-20" type="number" defaultValue="30" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Multi-device access</span>
                    <Badge
                      className="bg-blue-100 text-blue-800"
                      variant="outline"
                    >
                      Allowed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Two-factor authentication</span>
                    <Badge
                      className="bg-yellow-100 text-yellow-800"
                      variant="outline"
                    >
                      Optional
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button>
                <Lock className="mr-2 h-4 w-4" />
                Update Security Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Messaging Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Messaging & Deliverability
              </CardTitle>
              <CardDescription>
                SMTP, SMS provider, and notification delivery settings for
                campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="smtpServer">SMTP Server</Label>
                <Input id="smtpServer" placeholder="smtp.gmail.com" />
              </div>
              <div className="grid gap-2 grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">Port</Label>
                  <Input id="smtpPort" placeholder="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="encryption">Encryption</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="tls">TLS</option>
                    <option value="ssl">SSL</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="smsProvider">SMS Provider</Label>
                <Input id="smsProvider" placeholder="Twilio, Nexmo, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="messagingApiKey">Messaging API Key</Label>
                <Input
                  id="messagingApiKey"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <Button className="w-full" variant="outline">
                Test Messaging Connection
              </Button>
            </CardContent>
          </Card>

          {/* Campaign & Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Campaigns & Notifications
              </CardTitle>
              <CardDescription>Configure system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Patient Registrations</p>
                    <p className="text-sm text-gray-600">
                      Email/SMS notifications for new patients
                    </p>
                  </div>
                  <Badge
                    className="bg-green-100 text-green-800"
                    variant="outline"
                  >
                    On
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Critical System Alerts</p>
                    <p className="text-sm text-gray-600">
                      Immediate notifications for critical events
                    </p>
                  </div>
                  <Badge
                    className="bg-green-100 text-green-800"
                    variant="outline"
                  >
                    On
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Campaign Reminders</p>
                    <p className="text-sm text-gray-600">
                      Automated reminders and follow-ups for campaigns
                    </p>
                  </div>
                  <Badge
                    className="bg-green-100 text-green-800"
                    variant="outline"
                  >
                    On
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Campaign Performance Reports</p>
                    <p className="text-sm text-gray-600">
                      Weekly summary of campaign metrics
                    </p>
                  </div>
                  <Badge
                    className="bg-gray-100 text-gray-800"
                    variant="outline"
                  >
                    Off
                  </Badge>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Configure Campaign Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              System & Campaign Status
            </CardTitle>
            <CardDescription>
              Platform health, messaging deliverability, and campaign queues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Database
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Status</span>
                    <Badge
                      className="bg-green-100 text-green-800"
                      variant="outline"
                    >
                      Online
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Last Backup</span>
                    <span className="font-medium">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Size</span>
                    <span className="font-medium">2.3 GB</span>
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Backup Now
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Active Patients
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Currently Online</span>
                    <span className="font-medium text-green-600">287</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Peak Today</span>
                    <span className="font-medium">451</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Avg Response</span>
                    <span className="font-medium">120ms</span>
                  </div>
                </div>
                <Button size="sm" className="w-full" variant="outline">
                  View Details
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Messaging API Status
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Uptime</span>
                    <span className="font-medium text-green-600">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Requests Today</span>
                    <span className="font-medium">24.5k</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Error Rate</span>
                    <span className="font-medium">0.01%</span>
                  </div>
                </div>
                <Button size="sm" className="w-full" variant="outline">
                  API Logs
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save All Changes */}
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Apply Settings</h3>
                <p className="text-sm text-gray-600">
                  Apply changes to platform, data, and campaign settings
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save All Changes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
