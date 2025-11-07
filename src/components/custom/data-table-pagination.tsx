import { Table } from "@tanstack/react-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronsLeft, ChevronsRight } from "lucide-react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 25, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem className="hidden lg:inline-flex">
              <PaginationLink
                onClick={() => table.setPageIndex(0)}
                aria-disabled={!table.getCanNextPage()}
                aria-label="Go to first page"
              >
                <span className="sr-only">First</span>
                <span>
                  <ChevronsLeft />
                </span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => table.previousPage()}
                aria-disabled={!table.getCanNextPage()}
                aria-label="Go to previous page"
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink isActive>
                {table.getState().pagination.pageIndex + 1}
              </PaginationLink>
            </PaginationItem>

            {table.getPageCount() > 1 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => table.getCanNextPage() && table.nextPage()}
                  aria-disabled={!table.getCanNextPage()}
                  className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : ""}
                >
                  {table.getState().pagination.pageIndex + 2}
                </PaginationLink>
              </PaginationItem>
            )}

            {table.getPageCount() > 2 && <PaginationEllipsis />}

            <PaginationItem>
              <PaginationNext
                onClick={() => table.nextPage()}
                aria-disabled={!table.getCanNextPage()}
                aria-label="Go to next page"
              />
            </PaginationItem>
            <PaginationItem className="hidden lg:inline-flex">
              <PaginationLink
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                aria-disabled={!table.getCanNextPage()}
                aria-label="Go to last page"
              >
                <span className="sr-only">Last</span>
                <span>
                  <ChevronsRight />
                </span>
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="text-sm text-muted-foreground">
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </div>
    </div >
  );
}
