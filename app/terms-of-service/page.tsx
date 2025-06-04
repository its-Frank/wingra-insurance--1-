import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Users,
  Gavel,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Terms of Service
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Terms and conditions governing the use of our services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="space-y-8">
            {/* Last Updated */}
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Welcome to Wingra Insurance Agency ("we," "our," or "us").
                  These Terms of Service ("Terms") govern your use of our
                  website, services, and any related applications or platforms
                  (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by
                  these Terms. If you do not agree to these Terms, please do not
                  use our Services.
                </p>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>By using our Services, you represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>You are at least 18 years of age</li>
                  <li>You have the legal capacity to enter into these Terms</li>
                  <li>
                    You will comply with all applicable laws and regulations
                  </li>
                  <li>All information you provide is accurate and complete</li>
                  <li>
                    You will not use our Services for any unlawful purpose
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Wingra Insurance Agency provides insurance brokerage services,
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Insurance quote comparison and analysis</li>
                  <li>Policy placement and negotiation with insurers</li>
                  <li>Claims assistance and support</li>
                  <li>Risk assessment and advisory services</li>
                  <li>Policy management and renewal services</li>
                  <li>Customer support and consultation</li>
                </ul>
                <p className="text-sm">
                  We act as an intermediary between you and insurance companies.
                  We are not an insurance company and do not underwrite
                  insurance policies.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>When using our Services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate, complete, and current information</li>
                  <li>
                    Maintain the confidentiality of your account credentials
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees and premiums when due</li>
                  <li>Cooperate with claims investigations and procedures</li>
                  <li>
                    Report material changes that may affect your insurance
                    coverage
                  </li>
                </ul>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Prohibited Uses</h3>
                  <p className="mb-2">You may not use our Services to:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Engage in fraudulent or deceptive practices</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Interfere with or disrupt our Services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Harass, abuse, or harm other users</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Fees and Payments */}
            <Card>
              <CardHeader>
                <CardTitle>Fees and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Brokerage Fees</h3>
                  <p className="text-muted-foreground">
                    Our services may be subject to brokerage fees, which will be
                    clearly disclosed before you commit to any insurance policy.
                    These fees may be included in your premium or charged
                    separately.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Premium Payments</h3>
                  <p className="text-muted-foreground">
                    Insurance premiums are due according to the terms of your
                    policy. Failure to pay premiums when due may result in
                    policy cancellation or lapse of coverage.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Refunds</h3>
                  <p className="text-muted-foreground">
                    Refund policies vary by insurer and policy type. We will
                    assist you in understanding and processing any eligible
                    refunds according to the terms of your specific policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Disclaimers and Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Availability</h3>
                  <p className="text-muted-foreground">
                    We strive to maintain continuous availability of our
                    Services, but we do not guarantee uninterrupted access. We
                    may suspend or modify our Services for maintenance, updates,
                    or other operational reasons.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Insurance Coverage</h3>
                  <p className="text-muted-foreground">
                    We provide information and assistance in obtaining insurance
                    coverage, but we do not guarantee that coverage will be
                    available or that claims will be paid. Coverage is subject
                    to the terms and conditions of the insurance policy issued
                    by the insurer.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Third-Party Services</h3>
                  <p className="text-muted-foreground">
                    Our Services may include links to or integration with
                    third-party websites or services. We are not responsible for
                    the content, privacy practices, or terms of service of
                    third-party providers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  To the maximum extent permitted by law, Wingra Insurance
                  Agency shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Any indirect, incidental, special, or consequential damages
                  </li>
                  <li>
                    Loss of profits, revenue, data, or business opportunities
                  </li>
                  <li>
                    Damages resulting from third-party actions or omissions
                  </li>
                  <li>
                    Damages exceeding the fees paid to us in the 12 months
                    preceding the claim
                  </li>
                  <li>
                    Damages resulting from your failure to maintain adequate
                    insurance coverage
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  This limitation applies regardless of the theory of liability,
                  whether based on warranty, contract, statute, tort, or
                  otherwise.
                </p>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card>
              <CardHeader>
                <CardTitle>Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  You agree to indemnify, defend, and hold harmless Wingra
                  Insurance Agency, its officers, directors, employees, and
                  agents from and against any claims, liabilities, damages,
                  losses, costs, or expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                  <li>Your use of our Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Any false or misleading information you provide</li>
                  <li>Your infringement of any third-party rights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  All content, features, and functionality of our Services,
                  including but not limited to text, graphics, logos, images,
                  software, and design, are owned by Wingra Insurance Agency or
                  our licensors and are protected by copyright, trademark, and
                  other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create
                  derivative works of our content without our express written
                  permission.
                </p>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your privacy is important to us. Our collection, use, and
                  disclosure of your personal information is governed by our
                  Privacy Policy, which is incorporated into these Terms by
                  reference. Please review our Privacy Policy to understand our
                  practices.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We may terminate or suspend your access to our Services at any
                  time, with or without cause, and with or without notice. You
                  may also terminate your use of our Services at any time.
                </p>
                <p>
                  Upon termination, your right to use our Services will cease
                  immediately. However, any insurance policies obtained through
                  our Services will remain in effect according to their terms.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-primary" />
                  Governing Law and Dispute Resolution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of Kenya. Any disputes arising from or relating to
                  these Terms or our Services shall be resolved through the
                  courts of Kenya.
                </p>
                <p>
                  Before pursuing legal action, we encourage you to contact us
                  to resolve any disputes informally.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to These Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update these Terms from time to time to reflect changes
                  in our practices, services, or applicable laws. We will notify
                  you of any material changes by posting the updated Terms on
                  our website and updating the "Last Updated" date.
                </p>
                <p className="text-sm text-muted-foreground">
                  Your continued use of our Services after such changes
                  constitutes acceptance of the updated Terms.
                </p>
              </CardContent>
            </Card>

            {/* Severability */}
            <Card>
              <CardHeader>
                <CardTitle>Severability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If any provision of these Terms is found to be unenforceable
                  or invalid, that provision will be limited or eliminated to
                  the minimum extent necessary so that these Terms will
                  otherwise remain in full force and effect and enforceable.
                </p>
              </CardContent>
            </Card>

            {/* Entire Agreement */}
            <Card>
              <CardHeader>
                <CardTitle>Entire Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  These Terms, together with our Privacy Policy and any other
                  legal notices published by us on our Services, constitute the
                  entire agreement between you and Wingra Insurance Agency
                  concerning our Services and supersede all prior or
                  contemporaneous communications and proposals.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Wingra Insurance Agency</strong>
                  </p>
                  <p>Bruce House, Nairobi, Kenya</p>
                  <p>Email: info@wingra.co.ke</p>
                  <p>Phone: +254 797299134</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  We will respond to your inquiry within 1 business days.
                </p>
              </CardContent>
            </Card>

            {/* Regulatory Information */}
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Wingra Insurance Agency is regulated by the Insurance
                  Regulatory Authority (IRA) of Kenya. Our operations comply
                  with all applicable insurance laws and regulations in Kenya.
                </p>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="text-sm">
                    <p>
                      <strong>Regulatory Authority:</strong> Insurance
                      Regulatory Authority (IRA)
                    </p>
                    <p>
                      <strong>Website:</strong> wwww.wingra.co.ke
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
