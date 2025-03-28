import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MotorInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Motor Insurance
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive protection for your vehicles
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
              <h2 className="text-3xl font-bold tracking-tighter">
                Drive with Confidence
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Motor insurance is mandatory in Kenya under the Traffic Act and
                provides financial protection against accidents, theft, and
                third-party liabilities.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                A right cover should help you meet the below objectives:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Legal compliance with NTSA requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>
                    Financial protection against major risks and liabilities
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Peace of mind for motor owners and operators</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/car11.jpg?height=400&width=600"
                alt="Motor Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Motor Insurance */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Types of Motor Insurance
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We offer various motor insurance options to suit your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Private Motor Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For personal vehicles, we offer:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Third-Party Only</strong> – Covers injury, death,
                      or property damage to third parties but does not cover
                      your vehicle.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive Cover</strong> – Covers third-party
                      liabilities and damage to your own vehicle due to
                      accidents, fire, theft, or vandalism.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Commercial Motor Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For business use, we cover:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Vans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Trucks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Pickups</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Options include third-party and comprehensive cover.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Public Service Vehicle Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For Motorcycles, Matatus, Taxis & Buses, we offer:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Third-Party Liability Cover</strong> – Mandatory
                      by law, covers injury, death, or property damage to third
                      parties.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive PSV Insurance</strong> – Covers
                      third-party claims + damage to the vehicle.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Passenger Liability Cover</strong> – Covers injury
                      claims by passengers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Political Violence & Terrorism Cover</strong> –
                      Protection against riots and unrest.
                    </span>
                  </li>
                </ul>
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
                Protect Your Vehicle Today
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your motor insurance needs and get a
                personalized quote.
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
