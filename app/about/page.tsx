import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Clock, Heart, MapPin, ShieldCheck, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <Tabs defaultValue="mission" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="history">Our History</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
          </TabsList>

          <TabsContent value="mission" className="space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-lg">
                At BloodBank, our mission is to ensure a safe and adequate blood supply for our community while
                providing excellent service to our donors and healthcare partners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader className="pb-2">
                    <Heart className="h-6 w-6 text-red-600 mb-2" />
                    <CardTitle>Saving Lives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We are committed to collecting and distributing blood to save lives in our community.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <ShieldCheck className="h-6 w-6 text-red-600 mb-2" />
                    <CardTitle>Safety First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We maintain the highest standards of safety in blood collection, testing, and distribution.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-6 w-6 text-red-600 mb-2" />
                    <CardTitle>Community Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We build strong relationships with donors, volunteers, and healthcare providers.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <Award className="h-6 w-6 text-red-600 mb-2" />
                    <CardTitle>Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We strive for excellence in all aspects of our operations and service delivery.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold">Our History</h2>
              <p className="text-lg">
                Founded in 1985, BloodBank has been serving our community for over 35 years, growing from a small local
                operation to a comprehensive blood management system.
              </p>

              <div className="space-y-8 mt-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">1985</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Foundation</h3>
                    <p>
                      BloodBank was established as a small community blood collection center with just three employees.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">1995</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Expansion</h3>
                    <p>
                      We expanded our operations to include mobile blood drives and partnerships with local hospitals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">2005</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Modernization</h3>
                    <p>
                      We implemented a state-of-the-art blood management system and expanded our testing capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">2020</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Digital Transformation</h3>
                    <p>
                      We launched our online platform, allowing donors to schedule appointments and track their donation
                      history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="text-lg">
                Our dedicated team of professionals is committed to our mission of saving lives through blood donation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <CardTitle className="text-center">Dr. Sarah Johnson</CardTitle>
                    <CardDescription className="text-center">Medical Director</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Dr. Johnson has over 15 years of experience in transfusion medicine and oversees all medical
                      aspects of our operations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <CardTitle className="text-center">Michael Chen</CardTitle>
                    <CardDescription className="text-center">Operations Manager</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Michael ensures the smooth day-to-day operations of our blood bank and manages our team of
                      technicians and staff.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <CardTitle className="text-center">Emily Rodriguez</CardTitle>
                    <CardDescription className="text-center">Donor Relations Coordinator</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Emily works closely with our donors and organizes community blood drives and outreach programs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <CardTitle className="text-center">Dr. James Wilson</CardTitle>
                    <CardDescription className="text-center">Laboratory Director</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Dr. Wilson oversees our testing laboratory, ensuring all blood products meet the highest safety
                      standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Main Blood Bank Center</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                  <p>
                    123 Blood Bank Street
                    <br />
                    City, State 12345
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
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
