"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import moment from "moment";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


function Truncate(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

export const columns: ColumnDef<CampaignAppointment>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const data = row.getValue("title") as string;
      return <div className="w-44">{Truncate(data, 25)}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "appointmentType",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("appointmentType") as string;
      return <span className="capitalize">{type.replace("-", " ")}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colorClasses = {
        scheduled: "bg-blue-200 text-blue-950 hover:bg-blue-200",
        confirmed: "bg-green-200 text-green-950 hover:bg-green-200",
        completed: "bg-emerald-100 text-emerald-950 hover:bg-emerald-200",
        cancelled: "bg-red-200 text-red-950 hover:bg-red-200",
        "no-show": "bg-amber-200 text-amber-950 hover:bg-amber-200",
        rescheduled: "bg-purple-200 text-purple-950 hover:bg-purple-200",
      };

      return (
        <Badge className={colorClasses[status as keyof typeof colorClasses]}>
          {status.replace("-", " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "scheduledDate",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("scheduledDate") as Date;
      return <span>{moment(date).format("lll")}</span>;
    },
  },
  {
    accessorKey: "provider.name",
    header: "Conductor",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
              Copy Appointment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit appointment</DropdownMenuItem>
            <DropdownMenuItem>Send reminder</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Cancel appointment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
