import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BloodRequestForm } from "@/components/blood-request-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RequestHistory } from "@/components/request-history"

export default function RequestBloodPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Request Blood</h1>
          <p className="text-gray-600">Submit a request for blood units for medical purposes.</p>
        </div>

        <Tabs defaultValue="new-request" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new-request">New Request</TabsTrigger>
            <TabsTrigger value="request-history">Request History</TabsTrigger>
          </TabsList>

          <TabsContent value="new-request" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Blood Request Form</CardTitle>
                <CardDescription>
                  Please provide all required information to process your blood request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BloodRequestForm />
              </CardContent>
            </Card>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Request Guidelines</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Emergency requests are processed with highest priority</li>
                <li>Provide accurate patient information for proper matching</li>
                <li>Include medical professional's contact information</li>
                <li>Specify exact quantity and blood components needed</li>
                <li>Allow sufficient time for processing non-emergency requests</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                For urgent requests, please call our emergency hotline at (555) 123-4567 after submitting this form.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="request-history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Request History</CardTitle>
                <CardDescription>View and track the status of your previous blood requests.</CardDescription>
              </CardHeader>
              <CardContent>
                <RequestHistory />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
