"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

const requests = [
  {
    id: 1,
    requestedBy: "City Hospital",
    bloodType: "O-",
    units: 2,
    requestDate: "2023-04-27",
    status: "Fulfilled",
    priority: "High",
    contact: "Dr. James Wilson",
    phone: "(123) 456-7890",
  },
  {
    id: 2,
    requestedBy: "Memorial Hospital",
    bloodType: "AB+",
    units: 3,
    requestDate: "2023-04-25",
    status: "Pending",
    priority: "Medium",
    contact: "Dr. Emily Johnson",
    phone: "(123) 456-7891",
  },
  {
    id: 3,
    requestedBy: "St. Mary's Medical Center",
    bloodType: "A+",
    units: 5,
    requestDate: "2023-04-23",
    status: "Pending",
    priority: "High",
    contact: "Dr. Robert Smith",
    phone: "(123) 456-7892",
  },
  {
    id: 4,
    requestedBy: "University Hospital",
    bloodType: "B+",
    units: 2,
    requestDate: "2023-04-22",
    status: "Fulfilled",
    priority: "Medium",
    contact: "Dr. Sarah Davis",
    phone: "(123) 456-7893",
  },
  {
    id: 5,
    requestedBy: "Children's Hospital",
    bloodType: "O+",
    units: 4,
    requestDate: "2023-04-21",
    status: "Pending",
    priority: "Critical",
    contact: "Dr. Michael Brown",
    phone: "(123) 456-7894",
  },
  {
    id: 6,
    requestedBy: "Veterans Medical Center",
    bloodType: "A-",
    units: 1,
    requestDate: "2023-04-20",
    status: "Fulfilled",
    priority: "Low",
    contact: "Dr. Jennifer Taylor",
    phone: "(123) 456-7895",
  },
  {
    id: 7,
    requestedBy: "Community Hospital",
    bloodType: "B-",
    units: 2,
    requestDate: "2023-04-19",
    status: "Cancelled",
    priority: "Medium",
    contact: "Dr. David Wilson",
    phone: "(123) 456-7896",
  },
]

export function RequestList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.contact.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || request.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Requests</CardTitle>
        <CardDescription>Manage blood requests from hospitals and medical centers</CardDescription>
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
                <SelectItem value="fulfilled">Fulfilled</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>New Request</Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requested By</TableHead>
                <TableHead>Blood Type</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Request Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{request.requestedBy}</div>
                      <div className="text-sm text-muted-foreground">{request.contact}</div>
                    </div>
                  </TableCell>
                  <TableCell>{request.bloodType}</TableCell>
                  <TableCell>{request.units}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.priority === "Critical"
                          ? "destructive"
                          : request.priority === "High"
                            ? "warning"
                            : request.priority === "Medium"
                              ? "secondary"
                              : "outline"
                      }
                    >
                      {request.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.status === "Fulfilled"
                          ? "success"
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
                      disabled={request.status === "Fulfilled" || request.status === "Cancelled"}
                    >
                      Process
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
