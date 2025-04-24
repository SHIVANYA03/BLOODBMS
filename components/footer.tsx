import Link from "next/link"
import { Droplet, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold">LifeFlow</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to saving lives through efficient blood donation and distribution management.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/donor-registration" className="text-gray-400 hover:text-white">
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link href="/request-blood" className="text-gray-400 hover:text-white">
                  Request Blood
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donor-registration" className="text-gray-400 hover:text-white">
                  Blood Donation
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-gray-400 hover:text-white">
                  Blood Inventory
                </Link>
              </li>
              <li>
                <Link href="/request-blood" className="text-gray-400 hover:text-white">
                  Blood Requests
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blood Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Donor Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Blood Bank Street, Medical District, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-gray-400">contact@lifeflow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LifeFlow Blood Bank Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
