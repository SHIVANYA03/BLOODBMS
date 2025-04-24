import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Users, Award, HeartPulse } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Droplet className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">10,000+</p>
                  <p className="text-sm text-gray-500">Blood Donations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">5,000+</p>
                  <p className="text-sm text-gray-500">Registered Donors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <HeartPulse className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">8,500+</p>
                  <p className="text-sm text-gray-500">Lives Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm text-gray-500">Years of Service</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
