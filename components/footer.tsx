import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative h-10 w-40">
              <Image
                src="/logo.jpg?height=40&width=160"
                alt="Wingra Insurance Agency"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted insurance partner offering comprehensive risk
              solutions for individuals and businesses.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61563674306834"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/wingrainsuranceservices?igsh=YzljYTk1ODg3Zg=="
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/individual-solutions"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Individual Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-solutions"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/individual-solutions/home-insurance"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/individual-solutions/life-insurance"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/individual-solutions/motor-insurance"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Motor Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/individual-solutions/travel-insurance"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/individual-solutions/personal-accident"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Personal Accident
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-solutions/employee-benefits"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Employee Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-solutions/fire-theft"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Fire & Theft Insurance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Bruce House, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +254 797299134
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@wingra.co.ke
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Wingra Insurance Agency. All
              rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
