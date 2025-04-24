import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DonorRegistrationForm } from "@/components/donor-registration-form"

export default function DonorRegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Become a Blood Donor</h1>
          <p className="text-gray-600">Fill out the form below to register as a blood donor and help save lives.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Donor Registration Form</CardTitle>
            <CardDescription>
              Please provide accurate information for better service and donor matching.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DonorRegistrationForm />
          </CardContent>
        </Card>

        <div className="mt-8 bg-red-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Donor Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Must be at least 18 years old</li>
            <li>Weigh at least 110 pounds (50 kg)</li>
            <li>Be in good general health</li>
            <li>Have not donated blood in the last 56 days</li>
            <li>Have not had any recent surgeries or medical procedures</li>
            <li>Not taking certain medications that may disqualify you</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Note: Final eligibility will be determined during the pre-donation screening process.
          </p>
        </div>
      </div>
    </div>
  )
}
