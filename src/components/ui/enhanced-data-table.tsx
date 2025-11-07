"use client";
import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  ColumnFiltersState,
  VisibilityState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
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
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronDown, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Plus, 
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Archive,
  RefreshCw
} from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
  column: string;
}

interface BulkAction {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  action: (selectedRows: any[]) => void;
  variant?: "default" | "destructive" | "secondary";
}

interface QuickAction {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  action: (row: any) => void;
  variant?: "default" | "outline" | "secondary" | "destructive";
}

interface EnhancedDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  searchColumn?: string;
  filterOptions?: FilterOption[];
  bulkActions?: BulkAction[];
  quickActions?: QuickAction[];
  enableExport?: boolean;
  enableImport?: boolean;
  onAdd?: () => void;
  onRefresh?: () => void;
  loading?: boolean;
  emptyMessage?: string;
  emptyDescription?: string;
}

export function EnhancedDataTable<TData, TValue>({
  columns,
  data,
  title,
  description,
  searchPlaceholder = "Search...",
  searchColumn = "name",
  filterOptions = [],
  bulkActions = [],
  quickActions = [],
  enableExport = true,
  enableImport = false,
  onAdd,
  onRefresh,
  loading = false,
  emptyMessage = "No results found.",
  emptyDescription = "No data available to display.",
}: EnhancedDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  const selectedRows = table.getSelectedRowModel().rows.map(row => row.original);

  return (
    <Card className="w-full">
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="space-y-4">
        {/* Top Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Global Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={searchPlaceholder}
                value={globalFilter}
                onChange={(event) => setGlobalFilter(event.target.value)}
                className="max-w-sm pl-9"
              />
            </div>

            {/* Dynamic Filters */}
            {filterOptions.map((filter) => (
              <DropdownMenu key={filter.column}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {filter.label} <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem
                    onClick={() => table.getColumn(filter.column)?.setFilterValue("")}
                  >
                    All {filter.label}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {/* You would populate this with actual filter values */}
                  <DropdownMenuItem
                    onClick={() => table.getColumn(filter.column)?.setFilterValue(filter.value)}
                  >
                    {filter.value}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* Clear Filters */}
            {(globalFilter || columnFilters.length > 0) && (
              <Button 
                variant="ghost" 
                onClick={() => {
                  setGlobalFilter("");
                  setColumnFilters([]);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {/* Refresh Button */}
            {onRefresh && (
              <Button
                variant="outline"
                size="sm"
                onClick={onRefresh}
                disabled={loading}
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
            )}

            {/* Export Button */}
            {enableExport && (
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            )}

            {/* Import Button */}
            {enableImport && (
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Import
              </Button>
            )}

            {/* Add Button */}
            {onAdd && (
              <Button onClick={onAdd}>
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            )}

            {/* Column Visibility */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Selection Actions */}
        {Object.keys(rowSelection).length > 0 && (
          <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-md">
            <div className="text-sm text-blue-700">
              {Object.keys(rowSelection).length} of {table.getFilteredRowModel().rows.length} row(s) selected
            </div>
            {bulkActions.length > 0 && (
              <div className="flex space-x-2">
                {bulkActions.map((action, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant={action.variant || "outline"}
                    onClick={() => action.action(selectedRows)}
                  >
                    {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                  {quickActions.length > 0 && (
                    <TableHead className="text-right">Actions</TableHead>
                  )}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length + (quickActions.length > 0 ? 1 : 0)} className="h-24 text-center">
                    <RefreshCw className="mx-auto h-6 w-6 animate-spin" />
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-gray-50"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                    {quickActions.length > 0 && (
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {quickActions.map((action, index) => (
                              <DropdownMenuItem
                                key={index}
                                onClick={() => action.action(row.original)}
                              >
                                {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                                {action.label}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + (quickActions.length > 0 ? 1 : 0)}
                    className="h-24 text-center"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <p className="text-lg font-medium">{emptyMessage}</p>
                      <p className="text-sm text-muted-foreground">{emptyDescription}</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Table Info and Pagination */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>
              Showing {table.getPaginationRowModel().rows.length} of {table.getFilteredRowModel().rows.length} entries
            </span>
            {table.getFilteredRowModel().rows.length !== data.length && (
              <Badge variant="secondary">
                (filtered from {data.length} total)
              </Badge>
            )}
          </div>

          <div className="flex items-center space-x-6">
            {/* Page Size Selector */}
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">Rows per page</p>
              <select
                className="h-8 w-16 rounded border border-input bg-transparent px-2 py-1 text-sm"
                value={table.getState().pagination.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
              >
                {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                First
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              
              <div className="flex items-center justify-center text-sm font-medium min-w-[100px]">
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                Last
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Predefined common actions
export const commonQuickActions: QuickAction[] = [
  {
    label: "View",
    icon: Eye,
    action: (row) => console.log("View", row),
    variant: "outline"
  },
  {
    label: "Edit",
    icon: Edit,
    action: (row) => console.log("Edit", row),
    variant: "outline"
  },
  {
    label: "Archive",
    icon: Archive,
    action: (row) => console.log("Archive", row),
    variant: "outline"
  },
  {
    label: "Delete",
    icon: Trash2,
    action: (row) => console.log("Delete", row),
    variant: "destructive"
  }
];

export const commonBulkActions: BulkAction[] = [
  {
    label: "Export Selected",
    icon: Download,
    action: (rows) => console.log("Export", rows),
    variant: "secondary"
  },
  {
    label: "Archive Selected",
    icon: Archive,
    action: (rows) => console.log("Archive", rows),
    variant: "secondary"
  },
  {
    label: "Delete Selected",
    icon: Trash2,
    action: (rows) => console.log("Delete", rows),
    variant: "destructive"
  }
];