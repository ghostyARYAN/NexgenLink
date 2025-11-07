"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type Appointment = {
  id: string;
  studentName: string;
  doctorName: string;
  date: string;
  time: string;
  status: "Pending" | "Confirmed" | "Completed";
};

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "studentName",
    header: "Student Name",
  },
  {
    accessorKey: "doctorName",
    header: "Doctor Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variant =
        status === "Completed"
          ? "default"
          : status === "Confirmed"
          ? "secondary"
          : "outline";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
];
