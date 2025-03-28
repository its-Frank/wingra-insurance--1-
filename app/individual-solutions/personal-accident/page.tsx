import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Shield,
  Clock,
  Hospital,
  Banknote,
  ShipWheelIcon as Wheelchair,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PersonalAccidentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Personal Accident Insurance
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                24/7 protection against accidents
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
                Comprehensive Accident Protection
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                A Personal Accident Cover is a 24-hour insurance policy that
                provides financial protection in case of accidental injuries,
                disability, or death. It ensures that you or your family receive
                compensation for medical expenses, lost income, and other
                related costs.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/t8.jpg?height=400&width=600"
                alt="Personal Accident Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What's in it for You?
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our personal accident insurance offers comprehensive benefits
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wheelchair className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Permanent Disability Cover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compensation based on the extent of disability as determined
                  by a doctor. Provides financial security when you need it
                  most.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hospital className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hospital Cash Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A lump sum cash payment (up to the provided limit) upon
                  admission to a hospital. Helps cover additional expenses
                  during hospitalization.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Temporary Total Disability Cover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compensation for loss of income due to temporary disability.
                  Ensures financial stability during your recovery period.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Medical Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers hospital bills, surgeries, and treatments resulting
                  from an accident. Helps manage the financial burden of medical
                  care.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Artificial Appliances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers the cost of crutches, prosthetics, or other medical
                  aids. Supports your rehabilitation and recovery process.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Final Expense Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A lump sum payout to help with funeral costs. Provides
                  financial support for your family during a difficult time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Personal Accident Cover?
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our personal accident insurance offers several advantages
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      24/7 worldwide coverage against accidents
                    </h3>
                    <p className="text-muted-foreground">
                      Protection that follows you wherever you go, at any time
                      of day or night.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Financial security for you and your family
                    </h3>
                    <p className="text-muted-foreground">
                      Ensures your loved ones are taken care of in case of an
                      accident.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Covers both minor and major accident-related medical
                      expenses
                    </h3>
                    <p className="text-muted-foreground">
                      From small injuries to major surgeries, we've got you
                      covered.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Ensures income protection in case of disability
                    </h3>
                    <p className="text-muted-foreground">
                      Maintains your financial stability when you're unable to
                      work.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Would you like help selecting the best personal accident cover? At
              Wingra, we compare policies from leading insurers in Kenya to get
              you the best coverage at an affordable price.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Get Protected Today
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your personal accident insurance needs and
                get a personalized quote.
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
