"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-red-600" />
                <span>Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Main: (123) 456-7890</p>
              <p>Donor Support: (123) 456-7891</p>
              <p>Emergency: (123) 456-7892</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-red-600" />
                <span>Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>General: info@bloodbank.org</p>
              <p>Donations: donate@bloodbank.org</p>
              <p>Support: support@bloodbank.org</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>123 Blood Bank Street</p>
              <p>City, State 12345</p>
              <p>United States</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
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
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="donation">Blood Donation</SelectItem>
                      <SelectItem value="request">Blood Request</SelectItem>
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">How often can I donate blood?</h3>
                  <p className="text-sm text-muted-foreground">
                    Most people can donate whole blood every 56 days (8 weeks).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">What are the requirements to donate blood?</h3>
                  <p className="text-sm text-muted-foreground">
                    Generally, you must be at least 17 years old, weigh at least 110 pounds, and be in good health.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">How long does the donation process take?</h3>
                  <p className="text-sm text-muted-foreground">
                    The entire process takes about an hour, with the actual blood donation taking only about 8-10
                    minutes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
