"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-40">
              <Image
                src="/logo.jpg?height=40&width=160"
                alt="Wingra Insurance Agency"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium hover:text-primary flex items-center gap-1 h-auto p-0"
              >
                About Us <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/about/our-story">Our Story</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/mission-vision">Mission & Vision</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/our-partners">Our Partners</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium hover:text-primary flex items-center gap-1 h-auto p-0"
              >
                Individual Solutions <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/individual-solutions/home-insurance">
                  Home Insurance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/individual-solutions/life-insurance">
                  Life Insurance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/individual-solutions/motor-insurance">
                  Motor Insurance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/individual-solutions/travel-insurance">
                  Travel Insurance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/individual-solutions/personal-accident">
                  Personal Accident
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium hover:text-primary flex items-center gap-1 h-auto p-0"
              >
                Corporate Solutions <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/corporate-solutions/fire-theft">
                  Fire, Theft & All Risks
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/corporate-solutions/credit-life">
                  Credit Life Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/corporate-solutions/employee-benefits">
                  Employee Benefits
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/corporate-solutions/liability">Liability</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/get-quote">Get a Quote</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="grid gap-2 pl-4">
              <div className="font-medium">About Us</div>
              <Link
                href="/about/our-story"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/about/mission-vision"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Mission & Vision
              </Link>
              <Link
                href="/about/our-partners"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Partners
              </Link>
            </div>
            <div className="grid gap-2 pl-4">
              <div className="font-medium">Individual Solutions</div>
              <Link
                href="/individual-solutions/home-insurance"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home Insurance
              </Link>
              <Link
                href="/individual-solutions/life-insurance"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Life Insurance
              </Link>
              <Link
                href="/individual-solutions/motor-insurance"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Motor Insurance
              </Link>
              <Link
                href="/individual-solutions/travel-insurance"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Travel Insurance
              </Link>
              <Link
                href="/individual-solutions/personal-accident"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Personal Accident
              </Link>
            </div>
            <div className="grid gap-2 pl-4">
              <div className="font-medium">Corporate Solutions</div>
              <Link
                href="/corporate-solutions/fire-theft"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Fire, Theft & All Risks
              </Link>
              <Link
                href="/corporate-solutions/credit-life"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Credit Life Policy
              </Link>
              <Link
                href="/corporate-solutions/employee-benefits"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Employee Benefits
              </Link>
              <Link
                href="/corporate-solutions/liability"
                className="text-sm hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Liability
              </Link>
            </div>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/get-quote" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
