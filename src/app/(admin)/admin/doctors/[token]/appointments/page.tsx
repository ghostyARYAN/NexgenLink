'use client'

import React, { useState } from 'react'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, Download } from 'lucide-react'
import { columns, Appointment } from './columns'
import { appointments as initialAppointments } from './data'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

export default function Page() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [open, setOpen] = useState(false)

  const [newAppointment, setNewAppointment] = useState({
    studentName: '',
    doctorName: '',
    date: '',
    time: '',
    status: 'Pending' as 'Pending' | 'Confirmed' | 'Completed',
  })

  // Filter logic
  const filteredAppointments = appointments.filter(a => {
    const matchesSearch =
      a.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || a.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Summary counts
  const summary = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'Pending').length,
    confirmed: appointments.filter(a => a.status === 'Confirmed').length,
    completed: appointments.filter(a => a.status === 'Completed').length,
  }

  const handleAddAppointment = () => {
    if (
      !newAppointment.studentName ||
      !newAppointment.doctorName ||
      !newAppointment.date ||
      !newAppointment.time
    ) {
      alert('Please fill all fields!')
      return
    }

    const newEntry: Appointment = {
      id: (appointments.length + 1).toString(),
      ...newAppointment,
    }

    setAppointments(prev => [...prev, newEntry])
    setNewAppointment({
      studentName: '',
      doctorName: '',
      date: '',
      time: '',
      status: 'Pending',
    })
    setOpen(false)
  }

  // CSV Export
  const handleExportCSV = () => {
    if (filteredAppointments.length === 0) return

    const headers = ['ID', 'Student Name', 'Doctor Name', 'Date', 'Time', 'Status']
    const rows = filteredAppointments.map(a => [
      a.id,
      a.studentName,
      a.doctorName,
      a.date,
      a.time,
      a.status,
    ])

    const csvContent =
      [headers, ...rows]
        .map(row => row.map(val => `"${val}"`).join(','))
        .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'appointments.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="p-8 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Doctor Appointments</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Appointment
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Appointment</DialogTitle>
              <DialogDescription>
                Fill in the details to schedule a new doctor appointment.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Student Name</Label>
                <Input
                  placeholder="Enter student name"
                  value={newAppointment.studentName}
                  onChange={e =>
                    setNewAppointment({ ...newAppointment, studentName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Doctor Name</Label>
                <Input
                  placeholder="Enter doctor name"
                  value={newAppointment.doctorName}
                  onChange={e =>
                    setNewAppointment({ ...newAppointment, doctorName: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Date</Label>
                  <Input
                    type="date"
                    value={newAppointment.date}
                    onChange={e =>
                      setNewAppointment({ ...newAppointment, date: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Time</Label>
                  <Input
                    type="time"
                    value={newAppointment.time}
                    onChange={e =>
                      setNewAppointment({ ...newAppointment, time: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label>Status</Label>
                <Select
                  value={newAppointment.status}
                  onValueChange={val =>
                    setNewAppointment({
                      ...newAppointment,
                      status: val as 'Pending' | 'Confirmed' | 'Completed',
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Confirmed">Confirmed</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddAppointment}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{summary.total}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-yellow-600">{summary.pending}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Confirmed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-blue-600">{summary.confirmed}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-600">{summary.completed}</p>
          </CardContent>
        </Card>
      </div>

      {/* FILTERS & EXPORT */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Filter & Search</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 w-full sm:w-1/2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by student or doctor name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-1/4">
            <Select onValueChange={value => setStatusFilter(value)} defaultValue="All">
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Confirmed">Confirmed</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            {/* Export CSV Button */}
            <Button
              variant="outline"
              onClick={handleExportCSV}
              className="flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-100"
            >
              <Download className="w-4 h-4" /> Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* TABLE */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Appointments List</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={filteredAppointments} />
        </CardContent>
      </Card>
    </div>
  )
}
