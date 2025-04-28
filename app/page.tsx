import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropletsIcon as BloodDrop, Calendar, Droplets, HeartPulse, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Donate Blood, Save Lives</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your donation can make a difference. Join our community of donors and help save lives today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/request">Request Blood</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Users className="h-10 w-10 text-red-500" />} title="Donors" value="5,000+" />
            <StatCard icon={<Droplets className="h-10 w-10 text-red-500" />} title="Blood Units" value="10,000+" />
            <StatCard icon={<HeartPulse className="h-10 w-10 text-red-500" />} title="Lives Saved" value="15,000+" />
            <StatCard icon={<Calendar className="h-10 w-10 text-red-500" />} title="Blood Drives" value="500+" />
          </div>
        </div>
      </section>

      {/* Blood Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Blood Types & Compatibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BloodTypeCard type="A+" canDonateTo={["A+", "AB+"]} canReceiveFrom={["A+", "A-", "O+", "O-"]} />
            <BloodTypeCard type="A-" canDonateTo={["A+", "A-", "AB+", "AB-"]} canReceiveFrom={["A-", "O-"]} />
            <BloodTypeCard type="B+" canDonateTo={["B+", "AB+"]} canReceiveFrom={["B+", "B-", "O+", "O-"]} />
            <BloodTypeCard type="B-" canDonateTo={["B+", "B-", "AB+", "AB-"]} canReceiveFrom={["B-", "O-"]} />
            <BloodTypeCard
              type="AB+"
              canDonateTo={["AB+"]}
              canReceiveFrom={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
            />
            <BloodTypeCard type="AB-" canDonateTo={["AB+", "AB-"]} canReceiveFrom={["A-", "B-", "AB-", "O-"]} />
            <BloodTypeCard type="O+" canDonateTo={["A+", "B+", "AB+", "O+"]} canReceiveFrom={["O+", "O-"]} />
            <BloodTypeCard
              type="O-"
              canDonateTo={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
              canReceiveFrom={["O-"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a donor, a patient, or a medical professional, our blood bank management system is here to
            help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-gray-600">{title}</p>
      </CardContent>
    </Card>
  )
}

function BloodTypeCard({
  type,
  canDonateTo,
  canReceiveFrom,
}: {
  type: string
  canDonateTo: string[]
  canReceiveFrom: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-red-600 p-4 text-white text-center">
        <BloodDrop className="h-8 w-8 mx-auto mb-2" />
        <h3 className="text-2xl font-bold">{type}</h3>
      </div>
      <CardContent className="p-4">
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-1">Can Donate To:</h4>
          <div className="flex flex-wrap gap-1">
            {canDonateTo.map((bloodType) => (
              <span key={bloodType} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                {bloodType}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-1">Can Receive From:</h4>
          <div className="flex flex-wrap gap-1">
            {canReceiveFrom.map((bloodType) => (
              <span key={bloodType} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {bloodType}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
