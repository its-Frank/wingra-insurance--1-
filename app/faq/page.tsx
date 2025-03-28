"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general")

  const faqCategories = [
    { id: "general", name: "General Questions" },
    { id: "individual", name: "Individual Insurance" },
    { id: "corporate", name: "Corporate Insurance" },
    { id: "claims", name: "Claims & Support" },
    { id: "policy", name: "Policy Management" },
  ]

  const faqs = {
    general: [
      {
        question: "Who is Wingra Insurance Agency?",
        answer:
          "Wingra Insurance Agency is a trusted insurance partner offering comprehensive risk solutions for individuals and businesses in Kenya. We specialize in motor, home, life, medical, personal accident, and corporate insurance solutions.",
      },
      {
        question: "Why should I choose Wingra Insurance Agency?",
        answer:
          "We provide client-centric services, competitive market analysis, expert advisory, and 24/7 customer support. Our partnerships with leading insurers ensure you receive the best coverage at the best rates.",
      },
      {
        question: "Do I need to visit your office to get insured?",
        answer:
          "No, you don't! Wingra Insurance Agency operates seamlessly online, allowing you to get quotes, purchase policies, and receive support without visiting a physical office. Our digital systems ensure quick and efficient service from anywhere.",
      },
      {
        question: "How can I get an insurance quote?",
        answer: "You can request a quote by contacting us via phone, email, or our online platforms.",
      },
      {
        question: "Can I consult with an expert before choosing a policy?",
        answer:
          "Yes! We offer free online consultations via phone, email, or video call to help you understand your insurance needs and select the best policy.",
      },
    ],
    individual: [
      {
        question: "What types of individual insurance policies do you offer?",
        answer:
          "We offer: Motor Insurance (Private & Commercial), Home Insurance (Building, Household, All Risks, WIBA for Domestic Staff), Life Insurance (Whole Life, Term Life, Endowment, Last Expense), Travel Insurance (Single Trip, Annual Multi-Trip, Student, Schengen), and Personal Accident Insurance (Medical expenses, disability cover, income protection).",
      },
      {
        question: "Is motor insurance mandatory in Kenya?",
        answer: "Yes, the law requires every motor vehicle to have at least a Third-Party Motor Insurance policy.",
      },
      {
        question: "What does travel insurance cover?",
        answer:
          "It covers medical emergencies, trip cancellations, lost baggage, and personal liability during your travels. Some policies also include COVID-19 coverage.",
      },
      {
        question: "How does life insurance benefit me?",
        answer:
          "Life insurance provides financial security for your loved ones in case of death or disability. Some policies also offer savings and survival benefits.",
      },
    ],
    corporate: [
      {
        question: "What types of corporate insurance do you offer?",
        answer:
          "We provide: Employee Benefits (Group Life, Group Medical, Group Personal Accident), Business Protection (Fire, Theft & All Risks, Marine Cargo, Goods in Transit), Liability Insurance (Public Liability, Employers' Liability, Professional Indemnity), and Fidelity Guarantee (Protection against employee fraud).",
      },
      {
        question: "Can small businesses access medical cover?",
        answer: "Yes! We offer SME Medical Plans for businesses with three or more employees.",
      },
      {
        question: "What is a Credit Life Insurance policy?",
        answer:
          "It protects lenders and borrowers by covering outstanding loans in case of death, disability, or job loss.",
      },
    ],
    claims: [
      {
        question: "How do I file a claim?",
        answer:
          "You can file a claim through our online claim submission portal, by email, or by contacting our 24/7 support team.",
      },
      {
        question: "How long does it take to process a claim?",
        answer:
          "Claim processing times vary by policy type, but we ensure swift resolution. Funeral expenses under Last Expense Cover are paid within 48 hours upon submission of a burial permit.",
      },
      {
        question: "What should I do after a car accident?",
        answer:
          "Ensure safety and seek medical attention if needed. Report the incident to the police. Notify Wingra Insurance Agency immediately for claim processing.",
      },
    ],
    policy: [
      {
        question: "Can I modify my insurance coverage after purchase?",
        answer:
          "Yes, you can request changes based on your needs, such as increasing coverage or adding additional beneficiaries.",
      },
      {
        question: "How can I renew my insurance policy?",
        answer:
          "You will receive a renewal reminder before your policy expires. You can renew through our website, mobile platforms or visiting our offices.",
      },
      {
        question: "How do I cancel my policy?",
        answer: "You can cancel your policy by submitting a written request or email to info@wingra.co.ke.",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our insurance services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            {/* Category Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <div className="flex flex-col space-y-2">
                {faqCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{faqCategories.find((c) => c.id === activeCategory)?.name}</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is here to help you with any questions you may have about our insurance services
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

