"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"

const donors = [
  {
    id: 1,
    name: "John Smith",
    bloodType: "A+",
    lastDonation: "2023-04-28",
    totalDonations: 8,
    status: "Active",
    email: "john.smith@example.com",
    phone: "(123) 456-7890",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    bloodType: "B+",
    lastDonation: "2023-04-26",
    totalDonations: 12,
    status: "Active",
    email: "sarah.johnson@example.com",
    phone: "(123) 456-7891",
  },
  {
    id: 3,
    name: "Michael Brown",
    bloodType: "O+",
    lastDonation: "2023-04-24",
    totalDonations: 5,
    status: "Active",
    email: "michael.brown@example.com",
    phone: "(123) 456-7892",
  },
  {
    id: 4,
    name: "Emily Davis",
    bloodType: "AB-",
    lastDonation: "2023-03-15",
    totalDonations: 3,
    status: "Inactive",
    email: "emily.davis@example.com",
    phone: "(123) 456-7893",
  },
  {
    id: 5,
    name: "David Wilson",
    bloodType: "O-",
    lastDonation: "2023-04-10",
    totalDonations: 15,
    status: "Active",
    email: "david.wilson@example.com",
    phone: "(123) 456-7894",
  },
  {
    id: 6,
    name: "Jennifer Taylor",
    bloodType: "A-",
    lastDonation: "2023-02-20",
    totalDonations: 7,
    status: "Inactive",
    email: "jennifer.taylor@example.com",
    phone: "(123) 456-7895",
  },
  {
    id: 7,
    name: "Robert Martinez",
    bloodType: "B-",
    lastDonation: "2023-04-05",
    totalDonations: 10,
    status: "Active",
    email: "robert.martinez@example.com",
    phone: "(123) 456-7896",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    bloodType: "AB+",
    lastDonation: "2023-03-28",
    totalDonations: 4,
    status: "Active",
    email: "lisa.anderson@example.com",
    phone: "(123) 456-7897",
  },
]

export function DonorList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donors</CardTitle>
        <CardDescription>Manage your blood donors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search donors..."
              className="pl-8 w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button>Add Donor</Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Blood Type</TableHead>
                <TableHead>Last Donation</TableHead>
                <TableHead>Total Donations</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonors.map((donor) => (
                <TableRow key={donor.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={donor.name} />
                        <AvatarFallback>
                          {donor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{donor.name}</div>
                        <div className="text-sm text-muted-foreground">{donor.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{donor.bloodType}</TableCell>
                  <TableCell>{donor.lastDonation}</TableCell>
                  <TableCell>{donor.totalDonations}</TableCell>
                  <TableCell>
                    <Badge variant={donor.status === "Active" ? "success" : "secondary"}>{donor.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
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
