"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, MoreVertical, ArrowUpDown } from "lucide-react"

// Mock data for blood inventory
const mockInventory = [
  {
    id: "INV001",
    bloodType: "A+",
    units: 45,
    collectionDate: "2023-04-15",
    expiryDate: "2023-05-15",
    status: "Available",
    location: "Main Storage",
  },
  {
    id: "INV002",
    bloodType: "O-",
    units: 12,
    collectionDate: "2023-04-18",
    expiryDate: "2023-05-18",
    status: "Critical",
    location: "Emergency Reserve",
  },
  {
    id: "INV003",
    bloodType: "B+",
    units: 28,
    collectionDate: "2023-04-10",
    expiryDate: "2023-05-10",
    status: "Available",
    location: "Main Storage",
  },
  {
    id: "INV004",
    bloodType: "AB+",
    units: 8,
    collectionDate: "2023-04-20",
    expiryDate: "2023-05-20",
    status: "Available",
    location: "Specialized Storage",
  },
  {
    id: "INV005",
    bloodType: "O+",
    units: 56,
    collectionDate: "2023-04-12",
    expiryDate: "2023-05-12",
    status: "Available",
    location: "Main Storage",
  },
  {
    id: "INV006",
    bloodType: "A-",
    units: 15,
    collectionDate: "2023-04-05",
    expiryDate: "2023-05-05",
    status: "Expiring Soon",
    location: "Main Storage",
  },
  {
    id: "INV007",
    bloodType: "B-",
    units: 9,
    collectionDate: "2023-04-22",
    expiryDate: "2023-05-22",
    status: "Critical",
    location: "Emergency Reserve",
  },
  {
    id: "INV008",
    bloodType: "AB-",
    units: 4,
    collectionDate: "2023-04-25",
    expiryDate: "2023-05-25",
    status: "Critical",
    location: "Specialized Storage",
  },
]

interface BloodInventoryTableProps {
  filter?: "all" | "critical" | "expiring"
}

export function BloodInventoryTable({ filter = "all" }: BloodInventoryTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  // Filter data based on filter prop and search term
  const filteredData = mockInventory.filter((item) => {
    // Apply filter
    if (filter === "critical" && item.status !== "Critical") return false
    if (filter === "expiring" && item.status !== "Expiring Soon") return false

    // Apply search
    if (searchTerm === "") return true

    return (
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0

    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return 0
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-green-500">Available</Badge>
      case "Critical":
        return <Badge className="bg-red-500">Critical</Badge>
      case "Expiring Soon":
        return <Badge className="bg-yellow-500">Expiring Soon</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search inventory..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("id")}
                  className="flex items-center gap-1 p-0 font-medium"
                >
                  ID
                  {sortColumn === "id" && <ArrowUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("bloodType")}
                  className="flex items-center gap-1 p-0 font-medium"
                >
                  Blood Type
                  {sortColumn === "bloodType" && <ArrowUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("units")}
                  className="flex items-center gap-1 p-0 font-medium"
                >
                  Units
                  {sortColumn === "units" && <ArrowUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead>Collection Date</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.bloodType}</TableCell>
                  <TableCell>{item.units}</TableCell>
                  <TableCell>{item.collectionDate}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                        <DropdownMenuItem>Transfer Units</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Mark as Used</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
