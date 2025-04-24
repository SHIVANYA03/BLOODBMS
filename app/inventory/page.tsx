import { BloodInventoryTable } from "@/components/blood-inventory-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BloodTypeDistribution } from "@/components/blood-type-distribution"
import { InventoryStats } from "@/components/inventory-stats"

export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blood Inventory</h1>
          <p className="text-gray-600">Current blood inventory status and availability across all blood types.</p>
        </div>

        <InventoryStats />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-4">
            <TabsTrigger value="all">All Types</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Complete Inventory</CardTitle>
                <CardDescription>View and manage all blood units currently in storage.</CardDescription>
              </CardHeader>
              <CardContent>
                <BloodInventoryTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="critical" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Critical Inventory Levels</CardTitle>
                <CardDescription>Blood types that are below minimum required levels.</CardDescription>
              </CardHeader>
              <CardContent>
                <BloodInventoryTable filter="critical" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expiring" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Expiring Soon</CardTitle>
                <CardDescription>Blood units that will expire within the next 7 days.</CardDescription>
              </CardHeader>
              <CardContent>
                <BloodInventoryTable filter="expiring" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Analytics</CardTitle>
                <CardDescription>Visual representation of current blood inventory distribution.</CardDescription>
              </CardHeader>
              <CardContent>
                <BloodTypeDistribution />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
