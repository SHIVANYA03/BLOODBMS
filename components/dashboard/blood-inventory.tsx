"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

const bloodInventory = [
  {
    id: 1,
    bloodType: "A+",
    units: 450,
    status: "Adequate",
    lastUpdated: "2023-04-28",
    expiryDate: "2023-05-28",
  },
  {
    id: 2,
    bloodType: "A-",
    units: 180,
    status: "Adequate",
    lastUpdated: "2023-04-27",
    expiryDate: "2023-05-27",
  },
  {
    id: 3,
    bloodType: "B+",
    units: 320,
    status: "Adequate",
    lastUpdated: "2023-04-26",
    expiryDate: "2023-05-26",
  },
  {
    id: 4,
    bloodType: "B-",
    units: 120,
    status: "Adequate",
    lastUpdated: "2023-04-25",
    expiryDate: "2023-05-25",
  },
  {
    id: 5,
    bloodType: "AB+",
    units: 150,
    status: "Adequate",
    lastUpdated: "2023-04-24",
    expiryDate: "2023-05-24",
  },
  {
    id: 6,
    bloodType: "AB-",
    units: 80,
    status: "Low",
    lastUpdated: "2023-04-23",
    expiryDate: "2023-05-23",
  },
  {
    id: 7,
    bloodType: "O+",
    units: 650,
    status: "Adequate",
    lastUpdated: "2023-04-22",
    expiryDate: "2023-05-22",
  },
  {
    id: 8,
    bloodType: "O-",
    units: 400,
    status: "Adequate",
    lastUpdated: "2023-04-21",
    expiryDate: "2023-05-21",
  },
]

export function BloodInventory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredInventory = bloodInventory.filter((item) => {
    const matchesSearch = item.bloodType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Inventory</CardTitle>
        <CardDescription>Manage your blood inventory levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search blood type..."
                className="pl-8 w-[200px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="adequate">Adequate</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Update Inventory</Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Blood Type</TableHead>
                <TableHead>Units Available</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.bloodType}</TableCell>
                  <TableCell>{item.units}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Adequate" ? "success" : item.status === "Low" ? "warning" : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                  <TableCell className="text-right">
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
