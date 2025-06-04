import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we collect, use, and protect your personal information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    We collect personal information that you provide to us,
                    including but not limited to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>
                      Full name and contact information (phone number, email
                      address)
                    </li>
                    <li>Vehicle registration numbers and vehicle details</li>
                    <li>Property information and values</li>
                    <li>Travel destinations and duration</li>
                    <li>Coverage amounts and insurance preferences</li>
                    <li>Payment information and banking details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Automatically Collected Information
                  </h4>
                  <p className="text-muted-foreground">
                    We may automatically collect certain information when you
                    visit our website, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Provide insurance quotes and policy recommendations</li>
                  <li>Process insurance applications and claims</li>
                  <li>Communicate with you about your insurance needs</li>
                  <li>Send you policy documents and important updates</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Insurance companies to obtain quotes and process policies
                  </li>
                  <li>Regulatory authorities as required by law</li>
                  <li>
                    Service providers who assist us in operating our business
                  </li>
                  <li>
                    Legal authorities when required by law or to protect our
                    rights
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Unauthorized access, use, or disclosure</li>
                  <li>Accidental loss or destruction</li>
                  <li>Malicious attacks and data breaches</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>
                    Request correction of inaccurate or incomplete information
                  </li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to the processing of your personal information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at
                  privacy@wingra.co.ke
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your
                  experience on our website. You can control cookie settings
                  through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on our website and updating the "Last Updated" date.
                </p>
                <p className="text-muted-foreground">
                  <strong>Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our
                  data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> info@wingra.co.ke
                  </p>
                  <p>
                    <strong>Phone:</strong> +254 797299134
                  </p>
                  <p>
                    <strong>Address:</strong> Bruce House, Nairobi, Kenya
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
