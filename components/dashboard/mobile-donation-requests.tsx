"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Truck } from "lucide-react"

const mobileDonationRequests = [
  {
    id: 1,
    name: "John Smith",
    location: "123 Main St, Anytown",
    requestDate: "2023-05-10",
    appointmentDate: "2023-05-15",
    status: "Scheduled",
    bloodType: "A+",
    phone: "(123) 456-7890",
    locationType: "Home",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "456 Oak Ave, Somewhere",
    requestDate: "2023-05-09",
    appointmentDate: "2023-05-14",
    status: "Completed",
    bloodType: "O-",
    phone: "(123) 456-7891",
    locationType: "Home",
  },
  {
    id: 3,
    name: "Tech Solutions Inc.",
    location: "789 Business Park, Downtown",
    requestDate: "2023-05-08",
    appointmentDate: "2023-05-20",
    status: "Scheduled",
    bloodType: "Multiple",
    phone: "(123) 456-7892",
    locationType: "Corporate",
    donors: 12,
  },
  {
    id: 4,
    name: "Michael Brown",
    location: "321 Pine St, Elsewhere",
    requestDate: "2023-05-07",
    appointmentDate: "2023-05-12",
    status: "Cancelled",
    bloodType: "B+",
    phone: "(123) 456-7893",
    locationType: "Home",
  },
  {
    id: 5,
    name: "Community Center",
    location: "555 Community Ave, Cityville",
    requestDate: "2023-05-06",
    appointmentDate: "2023-05-25",
    status: "Pending",
    bloodType: "Multiple",
    phone: "(123) 456-7894",
    locationType: "Group",
    donors: 8,
  },
]

export function MobileDonationRequests() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredRequests = mobileDonationRequests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.bloodType.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || request.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-red-600" />
          <span>Mobile Donation Requests</span>
        </CardTitle>
        <CardDescription>Manage mobile blood collection appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search requests..."
                className="pl-8 w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>New Mobile Request</Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Appointment Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{request.name}</div>
                      <div className="text-sm text-muted-foreground">{request.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-[200px] truncate" title={request.location}>
                      {request.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {request.locationType}
                      {request.donors && ` (${request.donors} donors)`}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.appointmentDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.status === "Completed"
                          ? "success"
                          : request.status === "Scheduled"
                            ? "warning"
                            : request.status === "Pending"
                              ? "outline"
                              : "secondary"
                      }
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={request.status === "Completed" || request.status === "Cancelled"}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
