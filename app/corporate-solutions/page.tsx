import Link from "next/link"
import { ChevronRight, Shield, Briefcase, Users, Building, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CorporateSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Corporate Insurance Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive insurance solutions tailored to protect your business assets and operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Solutions Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fire, Theft & All Risks</CardTitle>
                <CardDescription>Protect your business assets against various risks</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Fire, Theft & All Risks Insurance is a comprehensive cover designed to protect the insured from
                  financial losses caused by fire, theft, natural disasters, and accidental damage.
                </p>
                <p className="font-medium">Coverage includes:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Fire and standard explosion</li>
                  <li>Burglary and theft</li>
                  <li>Malicious damage</li>
                  <li>Natural disasters</li>
                  <li>Accidental damage</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/corporate-solutions/fire-theft">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Credit Life Policy</CardTitle>
                <CardDescription>Protect financial institutions from loan defaults</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Wingra's Credit Life Insurance is designed to protect financial institutions, SACCOs, microfinance
                  lenders, and hire purchase companies from loan defaults due to unforeseen circumstances affecting
                  borrowers.
                </p>
                <p className="font-medium">Key benefits:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Loan repayment security</li>
                  <li>Financial protection for families</li>
                  <li>Risk mitigation for lenders</li>
                  <li>Flexible & customizable policies</li>
                  <li>Seamless claims processing</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/corporate-solutions/credit-life">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Employee Benefits</CardTitle>
                <CardDescription>Comprehensive protection for your employees</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Show genuine care for your employees with Wingra's comprehensive employee benefits packages. These
                  policies provide financial protection for employees and their families in various circumstances.
                </p>
                <p className="font-medium">Our employee benefits include:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Group life cover</li>
                  <li>Group personal accident cover</li>
                  <li>Group medical cover</li>
                  <li>SME medical plans</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/corporate-solutions/employee-benefits">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Liability</CardTitle>
                <CardDescription>Protect your business from legal risks</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Liability cover protects your business from legal risks. We secure your business against potential
                  legal liabilities with comprehensive liability insurance solutions.
                </p>
                <p className="font-medium">Our liability products:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Public liability</li>
                  <li>Products liability</li>
                  <li>Directors & officers liability</li>
                  <li>Employers liability</li>
                  <li>Professional indemnity</li>
                  <li>Medical malpractice liability</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/corporate-solutions/liability">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fidelity Guarantee</CardTitle>
                <CardDescription>Protection against employee dishonesty</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  In today's business environment, trust is paramount. However, even the most diligent employers can be
                  vulnerable to financial losses due to employee dishonesty. Wingra offers comprehensive Fidelity
                  Guarantee Insurance.
                </p>
                <p className="font-medium">Key features & benefits:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Protection against financial loss</li>
                  <li>Coverage for various roles</li>
                  <li>Loss of property coverage</li>
                  <li>Defense cost coverage</li>
                  <li>Proactive risk management</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/corporate-solutions/fidelity-guarantee">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Marine Cargo Insurance</CardTitle>
                <CardDescription>Protect your goods during transportation</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  In today's interconnected world, transporting goods across oceans and continents is both vital and
                  inherently risky. Wingra provides robust Marine Cargo insurance, ensuring your valuable cargo is
                  protected.
                </p>
                <p className="font-medium">What marine insurance covers:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                  <li>Furniture and consumer goods</li>
                  <li>Oil and petroleum products</li>
                  <li>Agricultural inputs</li>
                  <li>Building materials</li>
                  <li>Machinery and vehicles</li>
                  <li>Livestock</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/corporate-solutions/marine-cargo">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Protect Your Business Today</h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us to discuss your business insurance needs and get a customized solution
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
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

