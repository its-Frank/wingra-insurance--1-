import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LifeInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Life Insurance
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Financial security for you and your loved ones
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
                Secure Your Family's Future
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                A life insurance policy is an agreement insurance company
                undertakes to pay a certain sum of money, on the specified
                happening of a stated event such death, disability etc or on the
                expiry of a fixed period of time which is dependent on the
                duration of human life. The benefits can be a lumpsum amount or
                a series of payments made to the assured or a named beneficiary
                like family member.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/family.jpg?height=400&width=600"
                alt="Life Insurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life Insurance Products */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Life Insurance Products
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We offer a variety of life insurance products to meet your
              specific needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Whole Life Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Lifetime protection with guaranteed benefits and cash value
                  accumulation over time which policyholders can borrow against.
                  Some policies also offers survival benefits should you live to
                  a certain age.
                </p>
                <p className="font-medium">Ideal for:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Long-term financial security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Estate planning and wealth transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Building savings with a guaranteed payout</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Term Life Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Affordable coverage for a specific period (e.g., 10, 20, or 30
                  years), providing a payout to beneficiaries in case of the
                  policyholder's passing or permanent disability within the term
                  of the contract.
                </p>
                <p className="font-medium">Ideal for:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Young families securing financial stability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Individuals looking for low-cost protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Endowment Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A life insurance policy that combines protection and savings,
                  paying a lump sum either at the end of the policy term or upon
                  the policyholder's passing.
                </p>
                <p className="font-medium">Ideal for:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Education planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Retirement savings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Financial milestones like homeownership</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Last Expense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Last Expense Cover provides financial support to cover funeral
                  and burial costs incase of death of the insured. Wingra offers
                  you the most reliable and affordable plans for individuals and
                  registered groups.
                </p>
                <p className="font-medium">Key Benefits:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>
                      Immediate Payout – Funds are released within 48 hours
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Affordable Premiums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Covers Family Members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>No Medical Tests Required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Benefits Beyond the Death Benefit
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Some life insurance policies offer additional benefits
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Cash Value Accumulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Permanent policies can build cash value over time, which can
                  be accessed through loans or withdrawals for various needs,
                  like supplementing retirement income.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Critical Illness and Disability Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certain policies allow access to a portion of the death
                  benefit if diagnosed with a chronic disability, or terminal
                  illness, providing financial support during challenging times.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Survival Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Offers survival benefits should you live to a certain age,
                  providing financial support during your lifetime.
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
                Secure Your Family's Future Today
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your life insurance needs and get a
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
