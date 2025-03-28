import PartnerLogos from "@/components/partner-logos"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Partners</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We collaborate with leading insurance providers to offer you the best coverage options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted Insurance Providers</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We partner with reputable insurance companies to ensure you receive the best coverage at competitive rates
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <PartnerLogos />
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our strategic partnerships allow us to offer a wide range of insurance products and negotiate the best
              terms for our clients. We continuously evaluate our partners to ensure they meet our high standards for
              financial stability, customer service, and claims processing.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us For More Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

