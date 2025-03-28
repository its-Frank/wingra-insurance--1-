import Link from "next/link";
import Image from "next/image";
import { Flame, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FireTheftPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Fire, Theft & All Risks Insurance
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive protection for your business assets
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
                Safeguard Your Business Assets
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Fire, Theft & All Risks Insurance is a comprehensive cover
                designed to protect the insured from financial losses caused by
                fire, theft, natural disasters, and accidental damage. This
                insurance ensures that you can recover quickly from unexpected
                risks, safeguarding your assets, stock, and operations.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/fire.jpg?height=400&width=600"
                alt="Fire and Theft Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Coverage Options
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We offer various types of coverage to protect your business
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Burglary/Theft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Burglary policy compensates for the insured's property
                  stolen from their business premises. There must be a forcible
                  entry into or exit from the premises for this policy to offer
                  compensation.
                </p>
                <p className="text-muted-foreground">
                  Policy will also cover the costs of repairing damages to the
                  premises in the course of the theft. Cover may also be
                  extended to include riot & strike and any theft following a
                  hold up.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fire Consequential Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our Fire Consequential Loss insurance goes beyond traditional
                  fire coverage, safeguarding the financial well-being of both
                  individuals and businesses after a disaster. This policy acts
                  as a financial shield, ensuring a smooth recovery and
                  continuity.
                </p>
                <p className="font-medium">
                  The policy covers losses incurred due to business interruption
                  following the occurrence of:
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Fire</li>
                  <li>• Lightning</li>
                  <li>• Standard Explosion / Implosion</li>
                  <li>• Malicious Damage</li>
                  <li>• Riot and Strikes</li>
                  <li>• Impact Damage</li>
                  <li>• Bush Fire</li>
                  <li>• Earthquake</li>
                  <li>
                    • Storm, Cyclone, Typhoon, Tempest, Hurricane, Tornado,
                    Flood and Inundation
                  </li>
                  <li>
                    • Bursting and/or over owing of Water Tanks, Apparatus and
                    Pipes
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>All Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This comprehensive insurance policy safeguards against losses
                  caused by:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Fire and Theft</li>
                  <li>• Accidental Damages</li>
                  <li>• Natural calamities</li>
                  <li>• Riots and strikes</li>
                  <li>• Malicious damage</li>
                  <li>
                    • Any other cause not specifically excluded from the policy
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Once taken, there will be no need of taking out Fire and Fire
                  Consequential Loss Policies as well as Burglary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Application Process
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Follow these simple steps to get your business protected
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <CardTitle>Fill in proposal form</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Complete our comprehensive proposal form with your business
                details
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <CardTitle>Get a quotation</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Receive a personalized quote based on your business needs
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <CardTitle>Submit schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Provide a detailed list of covered items and assets
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">4</span>
                </div>
                <CardTitle>Provide KYC documents</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Submit necessary identification and business documents
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">5</span>
                </div>
                <CardTitle>Make premium payments</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Complete the payment process to activate your coverage
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
                Protect Your Business Today
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your business insurance needs and get a
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
