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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import moment from "moment";
import Campaign from "./campaign";


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
          <div className="flex-1 space-x-6">
            <Input
              placeholder="Filter emails..."
              value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
              }
              className="max-w-md"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto border border-dashed focus-visible:ring-0 outline outline-dotted">
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
            </DropdownMenu>
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Create Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
                <DialogDescription>
                  Fill the form below to create a new campaign.
                </DialogDescription>
              </DialogHeader>
              <Campaign />
            </DialogContent>
          </Dialog>
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
                        <div className="m-2 p-4 bg-card rounded-lg border shadow-sm animate-in slide-in-from-top-5 duration-300">
                          <div className="flex items-center justify-between border-b pb-2 mb-4">
                            <h3 className="text-sm font-semibold text-foreground">Appointment Details</h3>
                            <Button variant="ghost" size="sm" onClick={() => row.toggleExpanded()}>
                              <span className="sr-only">Close</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.entries(row.original as CampaignAppointment).map(([key, value]) => {
                              // Skip rendering these complex objects as separate entries
                              if (["location", "provider"].includes(key)) return null;

                              const formattedValue = (() => {
                                if (value === null || value === undefined) {
                                  return <span className="text-muted-foreground italic text-xs">Empty</span>;
                                }

                                if (key === "scheduledDate" || key === "lastReminderDate" || key === "createdAt" || key === "updatedAt") {
                                  return value instanceof Date
                                    ? moment(value).format("lll")
                                    : moment(value as string).format("lll");
                                }

                                if (typeof value === "object") {
                                  return <span className="text-muted-foreground italic text-xs">Complex data</span>;
                                }

                                return String(value);
                              })();

                              return (
                                <div key={key} className="overflow-hidden space-y-1.5">
                                  <div className="text-xs font-medium text-muted-foreground capitalize flex items-center gap-1">
                                    {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}
                                  </div>
                                  <div className="text-sm text-card-foreground break-words">
                                    {formattedValue}
                                  </div>
                                </div>
                              );
                            })}

                            {/* Location details */}
                            <div className="overflow-hidden space-y-1.5 col-span-1 md:col-span-2">
                              <div className="text-xs font-medium text-muted-foreground capitalize flex items-center gap-1">
                                Location
                              </div>
                              <div className="text-sm bg-muted/30 p-2 rounded-md">
                                {(row.original as CampaignAppointment).location ? (
                                  <div className="space-y-1">
                                    <div><span className="font-medium">Name:</span> {(row.original as CampaignAppointment).location.name}</div>
                                    <div><span className="font-medium">Address:</span> {(row.original as CampaignAppointment).location.address}</div>
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground italic text-xs">No location data</span>
                                )}
                              </div>
                            </div>

                            {/* Provider details */}
                            <div className="overflow-hidden space-y-1.5 col-span-1 md:col-span-2">
                              <div className="text-xs font-medium text-muted-foreground capitalize flex items-center gap-1">
                                Provider
                              </div>
                              <div className="text-sm bg-muted/30 p-2 rounded-md">
                                {(row.original as CampaignAppointment).provider ? (
                                  <div className="space-y-1">
                                    <div><span className="font-medium">Name:</span> {(row.original as CampaignAppointment).provider.name}</div>
                                    <div><span className="font-medium">Specialty:</span> {(row.original as CampaignAppointment).provider.specialty}</div>
                                    <div><span className="font-medium">Credentials:</span> {(row.original as CampaignAppointment).provider.credentials}</div>
                                    <div><span className="font-medium">ID:</span> {(row.original as CampaignAppointment).provider.id}</div>
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground italic text-xs">No provider data</span>
                                )}
                              </div>
                            </div>

                            {/* Notes (full width if available) */}
                            {(row.original as CampaignAppointment).notes && (
                              <div className="overflow-hidden space-y-1.5 col-span-1 md:col-span-3">
                                <div className="text-xs font-medium text-muted-foreground capitalize flex items-center gap-1">
                                  Notes
                                </div>
                                <div className="text-sm bg-muted/30 p-2 rounded-md whitespace-pre-wrap">
                                  {(row.original as CampaignAppointment).notes}
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
