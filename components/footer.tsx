import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600 fill-red-600" />
              <span className="text-xl font-bold">BloodBank</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting donors with those in need, saving lives one donation at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-foreground">
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-muted-foreground hover:text-foreground">
                  Request Blood
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/eligibility" className="text-muted-foreground hover:text-foreground">
                  Eligibility
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Blood Bank Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@bloodbank.org</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Blood Bank Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
