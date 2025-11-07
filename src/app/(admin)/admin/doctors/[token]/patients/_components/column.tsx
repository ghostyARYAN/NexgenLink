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

// Add the Patient type definition
type Patient = {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  institution: {
    type: string;
    name: string;
    grade?: string;
    rollNumber?: string;
  };
  guardian: {
    name: string;
    relation: string;
    phone?: string;
    email?: string;
  };
  contact: {
    email?: string;
    phone?: string;
  };
  location: {
    state: string;
    district: string;
    city: string;
    pincode?: string;
    region?: string;
    coordinates?: { lat: number; lng: number };
  };
  healthReport: {
    type: string;
    date: string;
    examiner: {
      name: string;
      specialization?: string;
      institution?: string;
    };
    details: Record<string, any>;
    followUpRequired?: boolean;
  };
  lifestyle?: {
    diet?: string;
    sports?: string[];
    screenTimeHours?: number;
    sleepHours?: number;
  };
  campaignId?: string;
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <span className="font-medium">{name}</span>;
    }
  },
  {
    accessorKey: "contact",
    header: "Email",
    cell: ({ row }) => {
      const contact = row.getValue("contact") as { email?: string, phone?: string };
      return <span className="text-sm text-muted-foreground">
        {contact?.email || "N/A"}
      </span>;
    }
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => {
      const age = row.getValue("age") as number;
      return <span>{age} yrs</span>;
    }
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => {
      const gender = row.getValue("gender") as string;
      return <span className="capitalize">{gender}</span>;
    }
  },
  {
    accessorKey: "institution",
    header: "Institution",
    cell: ({ row }) => {
      const institution = row.getValue("institution") as { type: string, name: string };
      return <span>{institution.name} ({institution.type})</span>;
    }
  },
  {
    accessorKey: "guardian",
    header: "Guardian",
    cell: ({ row }) => {
      const guardian = row.getValue("guardian") as { name: string, relation: string };
      return <span>{guardian.name} ({guardian.relation})</span>;
    }
  },
  {
    accessorKey: "healthReport",
    header: "Last Examination",
    cell: ({ row }) => {
      const healthReport = row.getValue("healthReport") as { date: string, type: string };
      return <span>{moment(healthReport.date).format("DD MMM, YYYY")}</span>;
    }
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location = row.getValue("location") as { city: string, state: string };
      return <span>{location.city}, {location.state}</span>;
    }
  },
  {
    id: "actions",
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
              Copy Patient ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View patient details</DropdownMenuItem>
            <DropdownMenuItem>Edit patient info</DropdownMenuItem>
            <DropdownMenuItem>View health report</DropdownMenuItem>
            <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete patient record
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
