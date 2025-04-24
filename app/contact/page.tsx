import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        123 Blood Bank Street, Medical District
                        <br />
                        City, State 12345
                        <br />
                        Country
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">
                        Main: +1 (555) 123-4567
                        <br />
                        Emergency: +1 (555) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">
                        General Inquiries: info@lifeflow.com
                        <br />
                        Donor Support: donors@lifeflow.com
                        <br />
                        Medical Requests: medical@lifeflow.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Hours of Operation</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 8:00 PM
                        <br />
                        Saturday: 9:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed (Emergency services available)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Emergency Blood Requests</h2>
                <p className="text-gray-600 mb-4">
                  For urgent blood requests, please call our emergency hotline or visit our facility in person.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-600">Emergency Hotline</p>
                  <p className="text-lg font-bold">+1 (555) 987-6543</p>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
