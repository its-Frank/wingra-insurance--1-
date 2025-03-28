import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomeInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutus.jpg?height=800&width=1600"
            alt="Home Insurance"
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
                Home Insurance
              </h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Protect your home and everything within it with our
                comprehensive home insurance solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* Main Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Your Home Deserves the Best Protection
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Your home is more than just a building; it's a repository of
                memories, a place of comfort, and a valuable asset. Wingra
                Insurance Agents understands the importance of protecting your
                home and everything within it. We offer comprehensive home
                insurance solutions designed to provide you with peace of mind
                and financial security against a wide range of risks.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  We help you to secure coverage for accidental loss or damage
                  to your property caused by various events, including:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Fire and lightning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Explosion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Earthquake</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Storm and tempest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Riot and strike</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Malicious damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Theft</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Bursting and overflowing of water tanks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Impact by road vehicles and animals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Objects falling from aircraft</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/home4.jpg?height=400&width=600"
                alt="Home Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Home Insurance */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Types of Home Insurance Policies
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              There are different types of home insurance policies depending on
              your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Building Cover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protects the physical structure of your home, including
                  outbuildings, walls, gates, and fences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Household Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers your furniture, household goods, personal belongings,
                  and fixtures & fittings.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>All Risks Cover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provides coverage for your valuable portable items, such as
                  jewelry, laptops, and mobile phones, even when you take them
                  outside your home.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>WIBA Cover (For Domestic Staff)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensures you meet your legal obligations under the Work Injury
                  Benefits Act 2007, covering your domestic servants against
                  work-related injuries, death, or disease.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Owners'/Occupiers' Liability Cover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protects you against liabilities if someone is injured or
                  their property is damaged while on your property.
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
              <h2 className="text-3xl font-bold tracking-tighter">
                Protect Your Home Today
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Get in touch with our team to discuss your home insurance needs
                and receive a personalized quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
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
  );
}
