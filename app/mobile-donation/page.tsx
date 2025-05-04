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
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, Home, Truck, Users } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function MobileDonationPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [date, setDate] = useState<Date>()
  const [locationType, setLocationType] = useState("home")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Mobile donation request submitted",
        description: "We'll contact you soon to confirm your appointment",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Truck className="h-6 w-6 text-red-600" />
          <h1 className="text-3xl font-bold">Mobile Blood Donation</h1>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">We Come to You!</h2>
          <p className="text-lg text-muted-foreground">
            Can't make it to our donation center? Our mobile blood collection team can come to your location to collect
            your donation. This service is perfect for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-red-50">
              <CardHeader className="pb-2">
                <Home className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-base">Home Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Individual donors who prefer to donate from the comfort of their home.</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50">
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-base">Group Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Small groups of friends, family, or colleagues who want to donate together.</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50">
              <CardHeader className="pb-2">
                <Truck className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-base">Corporate Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Businesses organizing blood drives for their employees.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Request Mobile Blood Collection</CardTitle>
            <CardDescription>
              Fill out this form to request our mobile blood collection team to visit your location
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Donor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blood-type">Blood type (if known)</Label>
                  <Select>
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
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Location Type</h3>
                <RadioGroup value={locationType} onValueChange={setLocationType} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="home" id="home" />
                    <Label htmlFor="home">Home</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="office" id="office" />
                    <Label htmlFor="office">Office/Workplace</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="group" id="group" />
                    <Label htmlFor="group">Group Event</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>

                {locationType === "group" && (
                  <div className="space-y-2 pl-6">
                    <Label htmlFor="group-size">Expected number of donors</Label>
                    <Input id="group-size" type="number" min="2" placeholder="e.g., 5" required />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Location Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP code</Label>
                    <Input id="zip" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location-notes">Special instructions for finding your location</Label>
                  <Textarea id="location-notes" placeholder="E.g., Parking instructions, building access codes, etc." />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferred Date and Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred time</Label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 7:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alt-date">Alternative date (optional)</Label>
                  <Input id="alt-date" type="date" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="medical-conditions">Do you have any medical conditions we should be aware of?</Label>
                  <Textarea id="medical-conditions" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="special-requirements">Any special requirements or requests?</Label>
                  <Textarea id="special-requirements" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms">
                    I confirm that I am at least 18 years old, weigh at least 110 pounds, and am in good health.
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent">
                    I understand that a representative will contact me to confirm the appointment details.
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Request Mobile Donation"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
