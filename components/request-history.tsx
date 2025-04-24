"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

// Mock data for request history
const mockRequests = [
  {
    id: "REQ001",
    date: "2023-04-20",
    bloodType: "O+",
    units: 2,
    status: "Approved",
    hospital: "City General Hospital",
  },
  {
    id: "REQ002",
    date: "2023-04-18",
    bloodType: "AB-",
    units: 1,
    status: "Processing",
    hospital: "St. Mary's Medical Center",
  },
  {
    id: "REQ003",
    date: "2023-04-15",
    bloodType: "B+",
    units: 3,
    status: "Completed",
    hospital: "City General Hospital",
  },
  {
    id: "REQ004",
    date: "2023-04-10",
    bloodType: "A+",
    units: 2,
    status: "Rejected",
    hospital: "County Hospital",
  },
  {
    id: "REQ005",
    date: "2023-04-05",
    bloodType: "O-",
    units: 1,
    status: "Completed",
    hospital: "St. Mary's Medical Center",
  },
]

export function RequestHistory() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-blue-500">Approved</Badge>
      case "Processing":
        return <Badge className="bg-yellow-500">Processing</Badge>
      case "Completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "Rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Request ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Blood Type</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Hospital</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="font-medium">{request.id}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>{request.bloodType}</TableCell>
              <TableCell>{request.units}</TableCell>
              <TableCell>{request.hospital}</TableCell>
              <TableCell>{getStatusBadge(request.status)}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
