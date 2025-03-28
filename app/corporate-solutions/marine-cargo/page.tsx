import Link from "next/link"
import Image from "next/image"
import { Ship, Globe, Package, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarineCargoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Marine Cargo Insurance</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Protect your goods during transportation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Secure Your Cargo Across Global Waters</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                In today's interconnected world, transporting goods across oceans and continents is both vital and
                inherently risky. Wingra Insurance Agents provides robust Marine Cargo insurance, ensuring your valuable
                cargo is protected every step of its journey, whether by sea, inland waterways, rail, or air.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Marine Cargo Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Marine Cargo Insurance */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Marine Cargo Insurance is Essential in Kenya
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our marine cargo insurance offers several advantages for businesses
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Global Reach, Local Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our policies are designed to navigate the complexities of international trade while seamlessly
                  complying with Kenyan regulations, ensuring smooth operations for your business.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mandatory for Customs Clearance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As mandated by Kenyan law (effective 14/02/2025), a local Marine insurance certificate is required for
                  customs clearance. Wingra Insurance Agents simplifies this process, ensuring smooth import/export
                  operations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wingra Insurance Agents is already issuing compliant certificates digitally, which are reflected
                  within the IRA and ICMS portals, as is now required by law, making the process seamless for your
                  business.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tailored Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're a first-time importer or a seasoned exporter, we offer customized coverage options to
                  meet your specific needs, ensuring optimal protection for your cargo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Marine Insurance Covers */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Marine Insurance Covers</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our Marine Cargo insurance protects a wide range of goods
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Furniture and Consumer Goods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protection for household items, electronics, and other consumer products during transit, safeguarding
                  against damage, theft, or loss.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Ship className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Oil and Petroleum Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized coverage for the transportation of oil, gas, and other petroleum products, addressing the
                  unique risks associated with these commodities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Agricultural Inputs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coverage for seeds, fertilizers, and other agricultural supplies, ensuring they reach their
                  destination in optimal condition.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Building Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protection for construction materials during transportation, safeguarding against damage, theft, or
                  loss that could impact project timelines and budgets.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Machinery and Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive coverage for industrial equipment, vehicles, and machinery during transit, protecting
                  these high-value assets from potential risks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Livestock</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized protection for the transportation of livestock, addressing the unique challenges and risks
                  associated with transporting live animals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Protect Your Cargo Today</h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your marine cargo insurance needs and get a personalized quote.
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

