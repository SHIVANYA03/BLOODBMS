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
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { CalendarIcon, Heart } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function DonatePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [date, setDate] = useState<Date>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Donation scheduled",
        description: "Your donation has been scheduled successfully",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="h-6 w-6 text-red-600 fill-red-600" />
          <h1 className="text-3xl font-bold">Donate Blood</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Schedule a Blood Donation</CardTitle>
            <CardDescription>Fill out this form to schedule your blood donation appointment</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
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
                  <Label htmlFor="blood-type">Blood type</Label>
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
                <h3 className="text-lg font-medium">Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
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
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Donation center</Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">Main Blood Bank Center</SelectItem>
                      <SelectItem value="north">North Community Center</SelectItem>
                      <SelectItem value="east">East Medical Plaza</SelectItem>
                      <SelectItem value="south">South County Hospital</SelectItem>
                      <SelectItem value="west">West Side Clinic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Health Information</h3>
                <div className="space-y-2">
                  <Label>Have you donated blood before?</Label>
                  <RadioGroup defaultValue="yes" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Do you have any of the following conditions?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="diabetes" />
                      <Label htmlFor="diabetes">Diabetes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hypertension" />
                      <Label htmlFor="hypertension">Hypertension</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="heart-disease" />
                      <Label htmlFor="heart-disease">Heart Disease</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anemia" />
                      <Label htmlFor="anemia">Anemia</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medications">Are you currently taking any medications?</Label>
                  <Textarea id="medications" placeholder="List any medications you are currently taking" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms">
                    I confirm that I am at least 18 years old, weigh at least 110 pounds, and am in good health.
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent">
                    I consent to the collection and testing of my blood for transfusion purposes.
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Scheduling..." : "Schedule Donation"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
