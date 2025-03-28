import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The journey of Wingra Insurance Agency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Who We Are</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                At Wingra Insurance Agency, we put our clients first and we're committed to building long-term
                relationships based on trust, transparency, and exceptional service. We understand that insurance isn't
                just about policies; it's about protecting your future, your family, and your business.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                That's why we take the time to get to know you and your unique needs. We offer a comprehensive range of
                insurance solutions, including health, life, property & casualty, motor, business, and liability
                coverage, ensuring we can find the perfect fit for you.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our team of experienced professionals is committed to providing personalized advice, clear explanations,
                and outstanding support. We're here to be your trusted advisor, helping you navigate the complexities of
                insurance and secure the protection you deserve. Contact us today to experience the Wingra difference.
              </p>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wingra Insurance Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

