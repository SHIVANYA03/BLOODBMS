import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Clock, Heart, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About LifeFlow</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated to saving lives through efficient blood donation and distribution management.
          </p>
        </div>

        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="mission" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At LifeFlow, our mission is to ensure that every patient in need has access to safe, quality-assured
                  blood products in a timely manner.
                </p>
                <p className="text-gray-600 mb-4">
                  We strive to maintain an adequate supply of all blood types by encouraging regular blood donations and
                  implementing efficient inventory management practices.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Heart className="h-8 w-8 text-red-600" />
                      <div>
                        <h3 className="font-medium">Save Lives</h3>
                        <p className="text-sm text-gray-500">Through donations</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Shield className="h-8 w-8 text-red-600" />
                      <div>
                        <h3 className="font-medium">Safety First</h3>
                        <p className="text-sm text-gray-500">Rigorous testing</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Clock className="h-8 w-8 text-red-600" />
                      <div>
                        <h3 className="font-medium">Quick Response</h3>
                        <p className="text-sm text-gray-500">Emergency ready</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Users className="h-8 w-8 text-red-600" />
                      <div>
                        <h3 className="font-medium">Community</h3>
                        <p className="text-sm text-gray-500">Building donors</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blood donation center"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Medical Director",
                  image: "/placeholder.svg?height=200&width=200",
                  bio: "With over 15 years of experience in hematology, Dr. Johnson ensures all medical protocols meet the highest standards.",
                },
                {
                  name: "Michael Chen",
                  role: "Operations Manager",
                  image: "/placeholder.svg?height=200&width=200",
                  bio: "Michael oversees the day-to-day operations of our blood bank, ensuring efficient processes and timely delivery.",
                },
                {
                  name: "Dr. James Wilson",
                  role: "Laboratory Head",
                  image: "/placeholder.svg?height=200&width=200",
                  bio: "Dr. Wilson leads our state-of-the-art testing laboratory, ensuring all blood products are safe for transfusion.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Donor Relations",
                  image: "/placeholder.svg?height=200&width=200",
                  bio: "Emily works directly with our donor community, organizing drives and maintaining our donor database.",
                },
                {
                  name: "Robert Kim",
                  role: "IT Systems Manager",
                  image: "/placeholder.svg?height=200&width=200",
                  bio: "Robert ensures our blood management system runs smoothly, implementing the latest technology for tracking and inventory.",
                },
                {
                  name: "Lisa Patel",
                  role: "Community Outreach",
                  image: "/placeholder.svg?height=200&width=200",
                  bio: "Lisa develops partnerships with local organizations and educates the community about the importance of blood donation.",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-red-600 mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-4">Our History</h2>

              <div className="relative border-l-2 border-red-200 pl-8 pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600"></div>
                <h3 className="text-xl font-bold mb-2">2008 - Foundation</h3>
                <p className="text-gray-600">
                  LifeFlow was founded by a group of medical professionals who recognized the need for a more efficient
                  blood bank management system in the region.
                </p>
              </div>

              <div className="relative border-l-2 border-red-200 pl-8 pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600"></div>
                <h3 className="text-xl font-bold mb-2">2012 - Expansion</h3>
                <p className="text-gray-600">
                  After four successful years, we expanded our operations to three additional locations, increasing our
                  capacity to serve more hospitals and clinics.
                </p>
              </div>

              <div className="relative border-l-2 border-red-200 pl-8 pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600"></div>
                <h3 className="text-xl font-bold mb-2">2015 - Technology Integration</h3>
                <p className="text-gray-600">
                  We implemented a state-of-the-art digital management system, allowing for real-time inventory tracking
                  and improved donor management.
                </p>
              </div>

              <div className="relative border-l-2 border-red-200 pl-8 pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600"></div>
                <h3 className="text-xl font-bold mb-2">2018 - Community Programs</h3>
                <p className="text-gray-600">
                  Launched several community outreach programs to educate the public about the importance of regular
                  blood donation and to build a stronger donor base.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600"></div>
                <h3 className="text-xl font-bold mb-2">2023 - Present Day</h3>
                <p className="text-gray-600">
                  Today, LifeFlow operates in multiple locations with a dedicated team of professionals, serving
                  hundreds of healthcare facilities and saving thousands of lives each year.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Who can donate blood?",
                  answer:
                    "Generally, anyone who is in good health, at least 18 years old, and weighs at least 110 pounds can donate blood. However, there are some medical conditions and medications that may disqualify someone from donating.",
                },
                {
                  question: "How often can I donate blood?",
                  answer:
                    "Whole blood donors can donate every 56 days (8 weeks). Platelet donors can donate more frequently, up to 24 times per year, as the body replaces platelets more quickly.",
                },
                {
                  question: "How long does the donation process take?",
                  answer:
                    "The entire process takes about one hour, which includes registration, a brief medical history review, the donation itself (which takes about 10 minutes), and a short rest period with refreshments afterward.",
                },
                {
                  question: "Is donating blood safe?",
                  answer:
                    "Yes, donating blood is very safe. All equipment used is sterile and disposed of after a single use. The average adult has about 10 pints of blood, and only about 1 pint is taken during a donation.",
                },
                {
                  question: "How is my blood used after donation?",
                  answer:
                    "After donation, your blood is tested for infectious diseases and blood type. It may be separated into components (red cells, platelets, plasma) that can help multiple patients with different needs.",
                },
                {
                  question: "How long does donated blood last?",
                  answer:
                    "Red blood cells can be stored for up to 42 days, platelets for up to 5 days, and plasma can be frozen and stored for up to one year.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
