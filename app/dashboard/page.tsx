"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/dashboard/overview"
import { BloodInventory } from "@/components/dashboard/blood-inventory"
import { DonorList } from "@/components/dashboard/donor-list"
import { RequestList } from "@/components/dashboard/request-list"
import { MobileDonationRequests } from "@/components/dashboard/mobile-donation-requests"
import { Truck } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button asChild className="mr-2">
              <Link href="/donate">Donate Blood</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/mobile-donation">
                <Truck className="mr-2 h-4 w-4" />
                Mobile Donation
              </Link>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inventory">Blood Inventory</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Donations</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Overview />
          </TabsContent>
          <TabsContent value="inventory" className="space-y-4">
            <BloodInventory />
          </TabsContent>
          <TabsContent value="donors" className="space-y-4">
            <DonorList />
          </TabsContent>
          <TabsContent value="requests" className="space-y-4">
            <RequestList />
          </TabsContent>
          <TabsContent value="mobile" className="space-y-4">
            <MobileDonationRequests />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
