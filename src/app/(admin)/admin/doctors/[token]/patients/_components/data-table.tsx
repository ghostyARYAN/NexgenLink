"use client";

import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  VisibilityState,
  ColumnFiltersState,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";
import { DataTablePagination } from "@/components/custom/data-table-pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, Rows3 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import moment from "moment";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [expanded, setExpanded] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([])
  // Insert an expander column at runtime so the table is still generic
  const allColumns = React.useMemo(() => {
    const expander: ColumnDef<TData, any> = {
      id: "expander",
      header: () => null,
      cell: ({ row }) => {
        return (
          <button
            aria-label={row.getIsExpanded() ? "Collapse" : "Expand"}
            className="text-sm w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
            onClick={() => row.toggleExpanded()}
          >
            {row.getIsExpanded() ? "−" : "+"}
          </button>
        );
      },
      enableSorting: false,
      enableHiding: false,
    };

    return [expander, ...(columns as ColumnDef<TData, TValue>[])];
  }, [columns]);
  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onExpandedChange: setExpanded,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { columnVisibility, columnFilters, expanded, sorting, },
  });
  return (
    <div className="space-y-4">
      <div className="p-6 shadow-md rounded-xl">
        <div className="mb-8 flex items-center gap-2">
          <Filter className="size-5" />
          Filter Patients
        </div>
        <div className="flex justify-between items-center mt-2 gap-4">
          <div className="flex-1 flex gap-4">
            <Input
              placeholder="Filter emails..."
              value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-md"
            />
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="border">
                Status <ChevronDown className="ml-2 size-4" />
              </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
              {["all", "scheduled", "confirmed", "completed", "cancelled", "no-show", "rescheduled"].map((status) => (
                <DropdownMenuCheckboxItem
                key={status}
                checked={status === "all" ? !table.getColumn("status")?.getFilterValue() : table.getColumn("status")?.getFilterValue() === status}
                onCheckedChange={(checked) => {
                  if (status === "all") {
                  table.getColumn("status")?.setFilterValue("");
                  } else {
                  table.getColumn("status")?.setFilterValue(checked ? status : "");
                  }
                }}
                >
                {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                <Rows3 />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border shadow-xl">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-accent/50 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-3">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>

                  {row.getIsExpanded() && (
                    <TableRow className="hover:bg-transparent">
                      <TableCell colSpan={table.getVisibleFlatColumns().length} className="p-0">
                        <div className="bg-white p-6 m-4 rounded-lg border">
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Patient Details</h3>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <div className="border rounded-lg p-4">
                              <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                                Personal Information
                              </h4>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-600">Age</span>
                                  <span className="text-sm font-medium text-gray-900">{(row.original as any).age} years</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-600">Gender</span>
                                  <span className="text-sm font-medium text-gray-900">{(row.original as any).gender}</span>
                                </div>
                              </div>
                            </div>

                            {/* Institution Details */}
                            {(row.original as any).institution && (
                              <div className="border rounded-lg p-4">
                                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                                  Institution
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Type</span>
                                    <span className="text-sm font-medium text-gray-900 capitalize">{(row.original as any).institution.type}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Name</span>
                                    <span className="text-sm font-medium text-gray-900">{(row.original as any).institution.name}</span>
                                  </div>
                                  {(row.original as any).institution.grade && (
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-600">Grade</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).institution.grade}</span>
                                    </div>
                                  )}
                                  {(row.original as any).institution.rollNumber && (
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-600">Roll Number</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).institution.rollNumber}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Guardian Information */}
                            {(row.original as any).guardian && (
                              <div className="border rounded-lg p-4">
                                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                                  Guardian
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Name</span>
                                    <span className="text-sm font-medium text-gray-900">{(row.original as any).guardian.name}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Relation</span>
                                    <span className="text-sm font-medium text-gray-900 capitalize">{(row.original as any).guardian.relation}</span>
                                  </div>
                                  {(row.original as any).guardian.phone && (
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-600">Phone</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).guardian.phone}</span>
                                    </div>
                                  )}
                                  {(row.original as any).guardian.email && (
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-600">Email</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).guardian.email}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Contact Information */}
                            {(row.original as any).contact && (
                              <div className="border rounded-lg p-4">
                                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                                  Contact
                                </h4>
                                <div className="space-y-2">
                                  {(row.original as any).contact.phone && (
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-600">Phone</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).contact.phone}</span>
                                    </div>
                                  )}
                                  {(row.original as any).contact.email && (
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-600">Email</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).contact.email}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Location */}
                            {(row.original as any).location && (
                              <div className="border rounded-lg p-4 lg:col-span-2">
                                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                                  Location
                                </h4>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                  <div>
                                    <span className="text-sm text-gray-600 block">State</span>
                                    <span className="text-sm font-medium text-gray-900">{(row.original as any).location.state}</span>
                                  </div>
                                  <div>
                                    <span className="text-sm text-gray-600 block">District</span>
                                    <span className="text-sm font-medium text-gray-900">{(row.original as any).location.district}</span>
                                  </div>
                                  <div>
                                    <span className="text-sm text-gray-600 block">City</span>
                                    <span className="text-sm font-medium text-gray-900">{(row.original as any).location.city}</span>
                                  </div>
                                  {(row.original as any).location.pincode && (
                                    <div>
                                      <span className="text-sm text-gray-600 block">Pincode</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).location.pincode}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Health Report */}
                            {(row.original as any).healthReport && (
                              <div className="border rounded-lg p-4 lg:col-span-2">
                                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b flex items-center gap-2">
                                  Health Report
                                  {(row.original as any).healthReport.followUpRequired && (
                                    <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded border">Follow-up Required</span>
                                  )}
                                </h4>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                  <div className="space-y-2">
                                    <div>
                                      <span className="text-sm text-gray-600 block">Type</span>
                                      <span className="text-sm font-medium text-gray-900 capitalize">{(row.original as any).healthReport.type}</span>
                                    </div>
                                    <div>
                                      <span className="text-sm text-gray-600 block">Date</span>
                                      <span className="text-sm font-medium text-gray-900">{moment((row.original as any).healthReport.date).format('MMM DD, YYYY')}</span>
                                    </div>
                                  </div>
                                  {(row.original as any).healthReport.examiner && (
                                    <div className="lg:col-span-2">
                                      <span className="text-sm text-gray-600 block mb-2">Examiner</span>
                                      <div className="border rounded p-3 space-y-1">
                                        <div className="text-sm font-medium text-gray-900">{(row.original as any).healthReport.examiner.name}</div>
                                        {(row.original as any).healthReport.examiner.specialization && (
                                          <div className="text-xs text-gray-600">{(row.original as any).healthReport.examiner.specialization}</div>
                                        )}
                                        {(row.original as any).healthReport.examiner.institution && (
                                          <div className="text-xs text-gray-600">{(row.original as any).healthReport.examiner.institution}</div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Lifestyle */}
                            {(row.original as any).lifestyle && (
                              <div className="border rounded-lg p-4 lg:col-span-2">
                                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                                  Lifestyle
                                </h4>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                  {(row.original as any).lifestyle.diet && (
                                    <div>
                                      <span className="text-sm text-gray-600 block">Diet</span>
                                      <span className="text-sm font-medium text-gray-900 capitalize">{(row.original as any).lifestyle.diet}</span>
                                    </div>
                                  )}
                                  {(row.original as any).lifestyle.screenTimeHours && (
                                    <div>
                                      <span className="text-sm text-gray-600 block">Screen Time</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).lifestyle.screenTimeHours} hrs/day</span>
                                    </div>
                                  )}
                                  {(row.original as any).lifestyle.sleepHours && (
                                    <div>
                                      <span className="text-sm text-gray-600 block">Sleep</span>
                                      <span className="text-sm font-medium text-gray-900">{(row.original as any).lifestyle.sleepHours} hrs/day</span>
                                    </div>
                                  )}
                                  {(row.original as any).lifestyle.sports && (row.original as any).lifestyle.sports.length > 0 && (
                                    <div>
                                      <span className="text-sm text-gray-600 block">Sports</span>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {(row.original as any).lifestyle.sports.map((sport: string, index: number) => (
                                          <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded border">
                                            {sport}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
