import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0" />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-red-600">Donate Blood,</span> <br />
              Save Lives
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Our blood bank management system ensures efficient collection, storage, and distribution of blood to those
              in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donor-registration" passHref>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Donate Now
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Blood donation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
