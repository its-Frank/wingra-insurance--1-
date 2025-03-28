"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export default function GetQuotePage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    insuranceType: "",
    specificCoverage: "",
    additionalDetails: "",
    contactPreference: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Quote Request Submitted",
      description: "We've received your request and will get back to you shortly with a personalized quote.",
    })

    // Reset form and go back to step 1
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      insuranceType: "",
      specificCoverage: "",
      additionalDetails: "",
      contactPreference: "email",
    })
    setStep(1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get a Personalized Quote</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to receive a customized insurance quote tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>
                Step {step} of 3:{" "}
                {step === 1 ? "Personal Information" : step === 2 ? "Insurance Details" : "Additional Information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup
                        value={formData.contactPreference}
                        onValueChange={(value) => handleSelectChange("contactPreference", value)}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                          <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex justify-end">
                      <Button type="button" onClick={handleNext}>
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="insuranceType">Insurance Type</Label>
                      <Select
                        value={formData.insuranceType}
                        onValueChange={(value) => handleSelectChange("insuranceType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="motor">Motor Insurance</SelectItem>
                          <SelectItem value="travel">Travel Insurance</SelectItem>
                          <SelectItem value="personal-accident">Personal Accident</SelectItem>
                          <SelectItem value="business">Business Insurance</SelectItem>
                          <SelectItem value="employee-benefits">Employee Benefits</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.insuranceType === "motor" && (
                      <div className="space-y-2">
                        <Label htmlFor="specificCoverage">Coverage Type</Label>
                        <Select
                          value={formData.specificCoverage}
                          onValueChange={(value) => handleSelectChange("specificCoverage", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select coverage type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="third-party">Third-Party Only</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive Cover</SelectItem>
                            <SelectItem value="commercial">Commercial Motor Insurance</SelectItem>
                            <SelectItem value="psv">PSV Insurance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.insuranceType === "home" && (
                      <div className="space-y-2">
                        <Label htmlFor="specificCoverage">Coverage Type</Label>
                        <Select
                          value={formData.specificCoverage}
                          onValueChange={(value) => handleSelectChange("specificCoverage", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select coverage type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="building">Building Cover</SelectItem>
                            <SelectItem value="household">Household Insurance</SelectItem>
                            <SelectItem value="all-risks">All Risks Cover</SelectItem>
                            <SelectItem value="wiba">WIBA Cover (For Domestic Staff)</SelectItem>
                            <SelectItem value="liability">Owners'/Occupiers' Liability Cover</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.insuranceType === "life" && (
                      <div className="space-y-2">
                        <Label htmlFor="specificCoverage">Coverage Type</Label>
                        <Select
                          value={formData.specificCoverage}
                          onValueChange={(value) => handleSelectChange("specificCoverage", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select coverage type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="whole-life">Whole Life Insurance</SelectItem>
                            <SelectItem value="term-life">Term Life Insurance</SelectItem>
                            <SelectItem value="endowment">Endowment Plans</SelectItem>
                            <SelectItem value="last-expense">Last Expense</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="button" onClick={handleNext}>
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="additionalDetails">Additional Details</Label>
                      <Textarea
                        id="additionalDetails"
                        name="additionalDetails"
                        placeholder="Please provide any additional information that might help us prepare your quote (e.g., value of property, vehicle details, coverage amount needed, etc.)"
                        rows={5}
                        value={formData.additionalDetails}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="submit">Submit Quote Request</Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

