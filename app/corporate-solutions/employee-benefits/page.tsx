import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Heart, Shield, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmployeeBenefitsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Employee Benefits
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive protection for your employees
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
                Invest in Your Team's Well-being
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Show genuine care for your employees with Wingra's comprehensive
                employee benefits packages. These policies provide financial
                protection for employees and their families in various
                circumstances, offering peace of mind and security during
                difficult times.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our employee benefits solutions are designed to help you attract
                and retain top talent while demonstrating your commitment to
                your team's welfare.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/team.jpg?height=400&width=600"
                alt="Employee Benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Types */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Employee Benefits Solutions
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We offer a range of employee benefits to suit your business needs
            </p>
          </div>
          <div className="space-y-12">
            {/* Group Life Cover */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Group Life Cover</h3>
                  </div>
                  <p className="text-muted-foreground">
                    This policy provides financial protection for employees and
                    their families in case of death or disability, offering
                    peace of mind and security during difficult times.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-lg mb-4">
                    Key Benefits of Group Life Assurance
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Financial Protection for Families
                        </span>{" "}
                        – A lump sum payout is provided to the beneficiaries of
                        the deceased employee, helping them manage financial
                        obligations.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Employee Welfare & Retention
                        </span>{" "}
                        – A valuable employee benefit that enhances job
                        satisfaction, boosting morale and retention.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Customizable Cover</span>{" "}
                        – Employers can tailor the policy based on salary
                        multiples, flat amounts, or position-based benefits.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Additional Benefits</span>{" "}
                        – Coverage for accidental death, total and permanent
                        disability, and critical illness.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Personal Accident Cover */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Group Personal Accident Cover
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    As experienced insurance agents, we understand the
                    importance of comprehensive employee protection. We
                    facilitate the sourcing of GPA policies that cover temporary
                    disability, medical needs, and occupational risks, including
                    WIBA compliance.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">24/7 Protection</span> –
                        Covers employees both during and outside working hours.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Comprehensive Coverage
                        </span>{" "}
                        – Includes medical expenses, disability benefits, and
                        death benefits.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">WIBA Compliance</span> –
                        Ensures your business meets legal requirements for
                        employee protection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Medical Cover */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Group Medical Cover</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Protect your employees and their families with our extensive
                    Group Health Cover. We provide coverage for inpatient,
                    outpatient, maternity, dental, and optical expenses, along
                    with personal accident and hospital cash benefits.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-lg mb-4">Key Advantages</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Flexible Plans</span> –
                        Customizable to your business's needs and budget.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Quick Access</span> – No
                        waiting periods for private hospital treatment.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Affordable for Groups
                        </span>{" "}
                        – Volume discounts available for businesses.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Client Advocacy</span> –
                        Dedicated clinical team to assist with claims and
                        support.
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg mt-6 mb-4">
                    SME Medical Plans
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    SME Medical Plans come with comprehensive benefits designed
                    to cater for the unique needs of Small and Medium
                    Enterprises (SMEs). This plan enables groups with 3 or more
                    employees to provide valuable health benefits to their team.
                  </p>
                  <p className="text-muted-foreground">
                    The plan offers extensive coverage including pathology,
                    diagnostic tests, dental treatment, optical services,
                    maternity services, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Enhance Your Employee Benefits Today
              </h2>
              <p className="text-white/90 md:text-lg/relaxed">
                Contact us to discuss your employee benefits needs and get a
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
