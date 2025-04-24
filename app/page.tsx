import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Droplet, Calendar, Search } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Droplet className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Blood Donation</CardTitle>
                <CardDescription>Safe and efficient blood donation process with minimal waiting time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our streamlined donation process ensures donor comfort and safety while maximizing the quality of
                  collected blood.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/donor-registration" passHref>
                  <Button variant="outline" className="w-full">
                    Register as Donor <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Blood Availability</CardTitle>
                <CardDescription>Real-time inventory tracking of all blood types and components</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Check availability of specific blood types and components before making a request to ensure timely
                  access.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/inventory" passHref>
                  <Button variant="outline" className="w-full">
                    Check Inventory <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Blood Requests</CardTitle>
                <CardDescription>Emergency and scheduled blood requests for hospitals and clinics</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Submit blood requests for patients with priority handling for emergency situations requiring immediate
                  attention.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/request-blood" passHref>
                  <Button variant="outline" className="w-full">
                    Request Blood <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-red-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your donation can save up to three lives. Join our community of donors and make a difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donor-registration" passHref>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Become a Donor
              </Button>
            </Link>
            <Link href="/request-blood" passHref>
              <Button size="lg" variant="outline">
                Request Blood
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
