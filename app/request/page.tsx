"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Droplets } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function RequestPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Request submitted",
        description: "Your blood request has been submitted successfully",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Droplets className="h-6 w-6 text-red-600" />
          <h1 className="text-3xl font-bold">Request Blood</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blood Request Form</CardTitle>
            <CardDescription>Fill out this form to request blood from our blood bank</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Requester Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="requester-type">Requester Type</Label>
                  <RadioGroup defaultValue="hospital" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hospital" id="hospital" />
                      <Label htmlFor="hospital">Hospital/Medical Center</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual Patient</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other Organization</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization/Hospital Name</Label>
                  <Input id="organization" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Person</Label>
                    <Input id="contact-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-title">Title/Position</Label>
                    <Input id="contact-title" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone number</Label>
                    <Input id="contact-phone" type="tel" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Request Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="blood-type">Blood Type Needed</Label>
                    <Select required>
                      <SelectTrigger id="blood-type">
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a-positive">A+</SelectItem>
                        <SelectItem value="a-negative">A-</SelectItem>
                        <SelectItem value="b-positive">B+</SelectItem>
                        <SelectItem value="b-negative">B-</SelectItem>
                        <SelectItem value="ab-positive">AB+</SelectItem>
                        <SelectItem value="ab-negative">AB-</SelectItem>
                        <SelectItem value="o-positive">O+</SelectItem>
                        <SelectItem value="o-negative">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="units">Number of Units</Label>
                    <Input id="units" type="number" min="1" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select required>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Select priority level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical (Immediate)</SelectItem>
                      <SelectItem value="high">High (Within 24 hours)</SelectItem>
                      <SelectItem value="medium">Medium (Within 48 hours)</SelectItem>
                      <SelectItem value="low">Low (Within a week)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="needed-by">Needed By Date</Label>
                  <Input id="needed-by" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Request</Label>
                  <Textarea id="purpose" placeholder="Please provide details about why this blood is needed" required />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Patient Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name">Patient Name</Label>
                    <Input id="patient-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patient-id">Patient ID/Medical Record Number</Label>
                    <Input id="patient-id" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diagnosis">Diagnosis/Condition</Label>
                  <Input id="diagnosis" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additional-info">Additional Information</Label>
                  <Textarea
                    id="additional-info"
                    placeholder="Any additional information that might be relevant to this request"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="agree" required />
                  <Label htmlFor="agree">
                    I certify that the information provided is accurate and that this request is for legitimate medical
                    purposes.
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Request"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
