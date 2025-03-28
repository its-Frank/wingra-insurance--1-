import { Shield, Target, Heart, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mission & Vision</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our guiding principles and aspirations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
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
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
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
    </div>
  )
}

