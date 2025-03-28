import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Plane,
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TravelInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Travel Insurance
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Peace of mind while traveling locally or internationally
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
                Travel with Confidence
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Whether you're going for business, leisure, studies, or medical
                treatment, travel insurance is important to provide financial
                protection against unexpected events while traveling locally or
                internationally.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Why Get Travel Insurance?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>
                      Required for visa applications (Schengen, USA, UK, etc.)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Avoid unexpected medical expenses abroad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>
                      Compensation for lost baggage and delayed flights
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Peace of mind while traveling</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/t30.jpg?height=400&width=600"
                alt="Travel Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Travel Insurance */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Types of Travel Insurance
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We offer various travel insurance options to suit your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Single-Trip Travel Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers one trip for a specific period. Ideal for occasional
                  travelers or those taking a one-time vacation or business
                  trip.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Annual Multi-Trip Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ideal for frequent travelers, covering multiple trips within a
                  year. Cost-effective for those who travel regularly for
                  business or leisure.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Student Travel Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For students studying abroad, covering medical emergencies,
                  lost documents, and more. Tailored to the specific needs and
                  budget constraints of students.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Travel Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers business-related trips, including medical,
                  cancellations, and liability. Designed for professionals
                  traveling for work purposes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Schengen Travel Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mandatory for Schengen visa applications, covering medical
                  emergencies and travel risks. Meets the specific requirements
                  set by Schengen countries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Does Travel Insurance Cover?
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our travel insurance policies provide comprehensive coverage for
              various situations
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Medical Emergencies & Evacuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hospitalization, treatment, and emergency evacuation. Covers
                  unexpected medical expenses that can be substantial in foreign
                  countries.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Trip Cancellations & Delays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reimbursement for canceled or delayed flights due to
                  unforeseen events. Protects your financial investment in your
                  trip.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Lost or Stolen Luggage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compensation for lost, stolen, or damaged baggage and
                  documents. Helps you replace essential items when your luggage
                  is lost.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Personal Accident & Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers accidental injuries, death, or legal liabilities.
                  Provides financial protection in case of accidents or if
                  you're held legally responsible for damages.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>COVID-19 Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Some policies cover quarantine costs and medical expenses due
                  to COVID-19. Important coverage in the current global health
                  situation.
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
                Ready for Your Next Trip?
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your travel insurance needs and get a
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
