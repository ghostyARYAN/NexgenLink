'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Search, FileText, Download } from 'lucide-react'

type Report = {
  id: string
  studentName: string
  reportType: string
  date: string
  status: 'Pending' | 'Reviewed' | 'Critical'
  details?: string
}

const initialReports: Report[] = [
  { id: '1', studentName: 'Riya Sharma', reportType: 'Blood Test', date: '2025-10-08', status: 'Pending', details: 'Hemoglobin slightly low, recommended iron supplements.' },
  { id: '2', studentName: 'Aarav Patel', reportType: 'X-Ray', date: '2025-10-07', status: 'Reviewed', details: 'No fractures detected.' },
  { id: '3', studentName: 'Maya Gupta', reportType: 'MRI Scan', date: '2025-10-06', status: 'Critical', details: 'Abnormality detected, requires immediate attention.' },
  { id: '4', studentName: 'Devansh Mehta', reportType: 'Urine Test', date: '2025-10-05', status: 'Reviewed', details: 'Normal results.' },
  { id: '5', studentName: 'Ananya Rao', reportType: 'Vision Test', date: '2025-10-04', status: 'Pending', details: 'Slight myopia detected, prescription glasses recommended.' },
]

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>(initialReports)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [viewReport, setViewReport] = useState<Report | null>(null)

  const filteredReports = reports.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.reportType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || r.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const summary = {
    total: reports.length,
    pending: reports.filter(r => r.status === 'Pending').length,
    reviewed: reports.filter(r => r.status === 'Reviewed').length,
    critical: reports.filter(r => r.status === 'Critical').length,
  }

  const handleExportCSV = () => {
    if (filteredReports.length === 0) return

    const headers = ['ID', 'Student Name', 'Report Type', 'Date', 'Status', 'Details']
    const rows = filteredReports.map(r => [r.id, r.studentName, r.reportType, r.date, r.status, r.details || ''])

    const csvContent = [headers, ...rows]
      .map(row => row.map(val => `"${val}"`).join(','))
      .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'reports.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadSingleReportCSV = (report: Report) => {
    const headers = ['ID', 'Student Name', 'Report Type', 'Date', 'Status', 'Details']
    const rows = [[report.id, report.studentName, report.reportType, report.date, report.status, report.details || '']]

    const csvContent = [headers, ...rows]
      .map(row => row.map(val => `"${val}"`).join(','))
      .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${report.studentName}_report.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getBadgeVariant = (status: Report['status']) => {
    switch(status) {
      case 'Reviewed': return 'secondary'
      case 'Critical': return 'destructive'
      default: return 'outline'
    }
  }

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600"/> Reports Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader><CardTitle>Total Reports</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-semibold">{summary.total}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Pending</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-semibold text-yellow-600">{summary.pending}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Reviewed</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-semibold text-blue-600">{summary.reviewed}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Critical</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-semibold text-red-600">{summary.critical}</p></CardContent>
        </Card>
      </div>

      {/* Filters & Export */}
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-lg font-medium">Filter & Search</CardTitle></CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 w-full sm:w-1/2">
            <Search className="h-4 w-4 text-gray-500"/>
            <Input
              placeholder="Search by student or report type..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-1/4">
            <Select onValueChange={value => setStatusFilter(value)} defaultValue="All">
              <SelectTrigger><SelectValue placeholder="Filter by status"/></SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Reviewed">Reviewed</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={handleExportCSV}
              className="flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-100"
            >
              <Download className="w-4 h-4"/> Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports Table */}
      <Card className="shadow-md">
        <CardHeader><CardTitle className="text-lg font-semibold">Reports List</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Report Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map(r => (
                <TableRow key={r.id} className="hover:bg-gray-50">
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.studentName}</TableCell>
                  <TableCell>{r.reportType}</TableCell>
                  <TableCell>{r.date}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(r.status)}>{r.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog open={viewReport?.id === r.id} onOpenChange={(open) => setViewReport(open ? r : null)}>
                      <DialogTrigger asChild>
                        <Button variant="link" className="text-blue-600 hover:underline">View</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Report Details</DialogTitle>
                        </DialogHeader>
                        <p className="my-2"><strong>Student:</strong> {r.studentName}</p>
                        <p className="my-2"><strong>Report Type:</strong> {r.reportType}</p>
                        <p className="my-2"><strong>Date:</strong> {r.date}</p>
                        <p className="my-2"><strong>Status:</strong> {r.status}</p>
                        <p className="my-2"><strong>Details:</strong> {r.details}</p>
                        <DialogFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => handleDownloadSingleReportCSV(r)} className="flex items-center gap-2">
                            <Download className="w-4 h-4"/> Download CSV
                          </Button>
                          <Button onClick={() => setViewReport(null)}>Close</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
