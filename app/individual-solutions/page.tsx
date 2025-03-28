import Link from "next/link"
import { ChevronRight, Shield, Home, Car, Plane, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndividualSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Individual Insurance Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive insurance solutions tailored to protect you and your loved ones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Solutions Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Home Insurance</CardTitle>
                <CardDescription>Protect your home and everything within it</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Your home is more than just a building; it's a repository of memories, a place of comfort, and a
                  valuable asset. We offer comprehensive home insurance solutions designed to provide you with peace of
                  mind and financial security.
                </p>
                <p className="font-medium">Coverage includes:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Fire and lightning</li>
                  <li>Explosion and earthquake</li>
                  <li>Storm and tempest</li>
                  <li>Theft and burglary</li>
                  <li>Water damage</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/individual-solutions/home-insurance">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Life Insurance</CardTitle>
                <CardDescription>Financial security for you and your loved ones</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  A life insurance policy provides financial protection to your loved ones in case of your passing,
                  disability, or after a fixed period of time. We offer various life insurance products to meet your
                  specific needs.
                </p>
                <p className="font-medium">Our life insurance products:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Whole life insurance</li>
                  <li>Term life insurance</li>
                  <li>Endowment plans</li>
                  <li>Last expense cover</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/individual-solutions/life-insurance">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Motor Insurance</CardTitle>
                <CardDescription>Comprehensive protection for your vehicles</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Motor insurance is mandatory in Kenya under the Traffic Act and provides financial protection against
                  accidents, theft, and third-party liabilities. We offer various motor insurance options to suit your
                  needs.
                </p>
                <p className="font-medium">Types of motor insurance:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Third-party only</li>
                  <li>Comprehensive cover</li>
                  <li>Commercial motor insurance</li>
                  <li>PSV insurance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/individual-solutions/motor-insurance">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Travel Insurance</CardTitle>
                <CardDescription>Peace of mind while traveling</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Whether you're going for business, leisure, studies, or medical treatment, travel insurance provides
                  financial protection against unexpected events while traveling locally or internationally.
                </p>
                <p className="font-medium">What travel insurance covers:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Medical emergencies & evacuation</li>
                  <li>Trip cancellations & delays</li>
                  <li>Lost or stolen luggage</li>
                  <li>Personal accident & liability</li>
                  <li>COVID-19 coverage (select policies)</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/individual-solutions/travel-insurance">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personal Accident</CardTitle>
                <CardDescription>24/7 protection against accidents</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  A Personal Accident Cover is a 24-hour insurance policy that provides financial protection in case of
                  accidental injuries, disability, or death. It ensures that you or your family receive compensation for
                  medical expenses, lost income, and other related costs.
                </p>
                <p className="font-medium">Benefits include:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Permanent disability cover</li>
                  <li>Hospital cash benefit</li>
                  <li>Temporary total disability cover</li>
                  <li>Medical expenses</li>
                  <li>Final expense benefit</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/individual-solutions/personal-accident">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Protected?</h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your insurance needs and get a personalized quote
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/get-quote">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

