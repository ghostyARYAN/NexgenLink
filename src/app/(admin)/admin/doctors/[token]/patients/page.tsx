import { Calendar, Zap, Clock, CheckCircle, BarChart3 } from "lucide-react";
import { columns } from "./_components/column";
import { DataTable } from "./_components/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { data } from "./_components/data"

async function getData() {
  return JSON.parse(JSON.stringify(data));
}

// Mock campaign statistics
const campaignStats = {
  total: 34,
  active: 12,
  scheduled: 8,
  completed: 14,
  impressions: "245.8K",
  conversionRate: "3.2%",
  growth: "+18%"
};

export default async function CampaignPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Campaign Dashboard</h1>
        <Badge variant="outline" className="px-3 py-1">
          <Zap className="h-3.5 w-3.5 mr-1" />
          <span>{campaignStats.growth} this month</span>
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Campaigns",
            icon: <Calendar className="h-4 w-4 text-blue-500" />,
            value: campaignStats.total,
            description: "All created campaigns",
            color: "blue",
            progress: 100,
            progrssColor: "bg-blue-500"
          },
          {
            title: "Active Campaigns",
            icon: <Zap className="h-4 w-4 text-green-500" />,
            value: campaignStats.active,
            description: "Currently running",
            color: "green",
            progress: (campaignStats.active / campaignStats.total) * 100,
            progrssColor: "bg-green-500"
          },
          {
            title: "Scheduled",
            icon: <Clock className="h-4 w-4 text-amber-500" />,
            value: campaignStats.scheduled,
            description: "Upcoming campaigns",
            color: "amber",
            progress: (campaignStats.scheduled / campaignStats.total) * 100,
            progrssColor: "bg-amber-500"
          },
          {
            title: "Completed",
            icon: <CheckCircle className="h-4 w-4 text-purple-500" />,
            value: campaignStats.completed,
            description: "Finished campaigns",
            color: "purple",
            progress: (campaignStats.completed / campaignStats.total) * 100,
            progrssColor: "bg-purple-500"
          }
        ].map((card, index) => (
          <Card key={index} className={`overflow-hidden border-l-4 border-l-${card.color}-500`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${index > 0 ? `text-${card.color}-600` : ''}`}>
                {card.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
            <CardFooter className="p-2 bg-muted/20">
              <Progress value={card.progress} className="h-1" indicatorClassName={`${card.progrssColor}`} />
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">{campaignStats.impressions}</div>
              <p className="text-xs text-muted-foreground">Total impressions</p>
            </div>
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <span className="font-medium text-green-500 mr-1">↑4.3%</span> from last month
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">{campaignStats.conversionRate}</div>
              <p className="text-xs text-muted-foreground">Average across campaigns</p>
            </div>
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <span className="font-medium text-green-500 mr-1">↑0.8%</span> from last month
          </CardFooter>
        </Card>
      </div> */}

      <DataTable columns={columns} data={data} />
    </div>
  );
}
