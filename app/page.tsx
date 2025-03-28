import Link from "next/link"
import { Shield, Home, Car, Briefcase, Plane, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PartnerLogos from "@/components/partner-logos"
import HeroSlider from "@/components/hero-slider"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* Our Promise Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Promise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beyond Insurance</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Wingra Insurance Agents goes beyond simply providing insurance. We are your dedicated partners, ensuring
              you receive the best possible protection and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Insurance Advisory & Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We analyze quotes from the market to find the best solutions for your needs, saving you time and
                  ensuring you get the most comprehensive coverage at the best price.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Cover Placement & Negotiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We negotiate with insurers on your behalf and assist in securing and placing the right coverage.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Support & Issue Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide 24/7 customer support to address service challenges guaranteeing seamless policy
                  management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Solutions Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Insurance Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Coverage Options
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Tailored insurance solutions for individuals and businesses to protect what matters most
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="flex flex-col h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Home Insurance</CardTitle>
                <CardDescription>Protect your home and everything within it</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Comprehensive coverage for your building, household items, and valuable possessions against fire,
                  theft, and natural disasters.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/individual-solutions/home-insurance" className="flex items-center justify-between">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Life Insurance</CardTitle>
                <CardDescription>Financial security for you and your loved ones</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Whole life, term life, endowment plans, and last expense coverage to ensure financial protection for
                  your family.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/individual-solutions/life-insurance" className="flex items-center justify-between">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Motor Insurance</CardTitle>
                <CardDescription>Comprehensive protection for your vehicles</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Third-party and comprehensive coverage options for private, commercial, and public service vehicles.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/individual-solutions/motor-insurance" className="flex items-center justify-between">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Travel Insurance</CardTitle>
                <CardDescription>Peace of mind while traveling</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Coverage for medical emergencies, trip cancellations, lost baggage, and more while traveling locally
                  or internationally.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/individual-solutions/travel-insurance" className="flex items-center justify-between">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personal Accident</CardTitle>
                <CardDescription>24/7 protection against accidents</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Financial protection in case of accidental injuries, disability, or death, ensuring you and your
                  family receive compensation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/individual-solutions/personal-accident" className="flex items-center justify-between">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Corporate Solutions</CardTitle>
                <CardDescription>Comprehensive business protection</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Fire & theft insurance, employee benefits, liability coverage, and more to protect your business
                  assets and operations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/corporate-solutions" className="flex items-center justify-between">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/get-quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Hear from our satisfied clients about their experience with Wingra Insurance Agency
            </p>
          </div>
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Partners
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted Insurance Providers</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We work with leading insurance providers to offer you the best coverage options
            </p>
          </div>
          <div className="mt-8 bg-white p-8 rounded-xl shadow-md">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Get Protected?
              </h2>
              <p className="text-white/90 md:text-xl/relaxed">
                Contact us today to discuss your insurance needs and get a personalized quote tailored to your specific
                requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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

