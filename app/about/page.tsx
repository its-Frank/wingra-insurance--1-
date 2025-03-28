import Image from "next/image"
import { Shield, Target, Heart, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PartnerLogos from "@/components/partner-logos"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="About Wingra Insurance Agency"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                About Wingra Insurance Agency
              </h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your trusted insurance partner offering comprehensive risk solutions for individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                At Wingra Insurance Agency, we put our clients first and we're committed to building long-term
                relationships based on trust, transparency, and exceptional service. We understand that insurance isn't
                just about policies; it's about protecting your future, your family, and your business.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                That's why we take the time to get to know you and your unique needs. We offer a comprehensive range of
                insurance solutions, including health, life, property & casualty, motor, business, and liability
                coverage, ensuring we can find the perfect fit for you.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our team of experienced professionals is committed to providing personalized advice, clear explanations,
                and outstanding support. We're here to be your trusted advisor, helping you navigate the complexities of
                insurance and secure the protection you deserve. Contact us today to experience the Wingra difference.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wingra Insurance Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* Mission, Vision, Values Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Mission Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make insurance inclusive, convenient and valuable through innovation, strategic partnerships and
                  exceptional service focused on client needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Vision Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating a future where insurance is a trusted, valued, and integral part of financial security for
                  individuals and businesses alike.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Trust</span> – We build lasting relationships with our clients based
                      on honesty, integrity, and transparency in all our dealings.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Excellence</span> – We strive for excellence in everything we do,
                      from customer service to finding the best insurance solutions for our clients.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Client-Focused</span> – We put our clients' needs first, taking the
                      time to understand their unique situations and providing tailored solutions.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Collaboration</span> – We foster strong partnerships to provide
                      innovative and comprehensive insurance solutions.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Promise</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Wingra Insurance Agents goes beyond simply providing insurance. We are your dedicated partners, ensuring
              you receive the best possible protection and support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Insurance Advisory & Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We analyze quotes from the market to find the best solutions for your needs, saving you time and
                  ensuring you get the most comprehensive coverage at the best price.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Cover Placement & Negotiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We negotiate with insurers on your behalf and assist in securing and placing the right coverage.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Support & Issue Resolution</CardTitle>
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

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied clients about their experience with Wingra Insurance Agency
              </p>
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Partners</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We work with leading insurance providers to offer you the best coverage options
              </p>
            </div>
          </div>
          <PartnerLogos />
        </div>
      </section>
    </div>
  )
}

