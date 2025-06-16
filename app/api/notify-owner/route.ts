import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter for sending emails
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "your_email@example.com",
    pass: process.env.EMAIL_PASSWORD || "your_password",
  },
});

export async function POST(request: NextRequest) {
  try {
    const { clientData, selectedQuote, timestamp } = await request.json();

    // Format the notification email
    const emailContent = `
      NEW INSURANCE QUOTE REQUEST
      ==========================
      
      Client Information:
      ------------------
      Name: ${clientData.name}
      Phone: ${clientData.phone}
      Email: ${clientData.email}
      
      Insurance Details:
      -----------------
      Category: ${clientData.insuranceCategory}
      Type: ${clientData.insuranceType}
      ${
        clientData.vehicleRegistration
          ? `Vehicle Registration: ${clientData.vehicleRegistration}`
          : ""
      }
      ${
        clientData.propertyType
          ? `Property Type: ${clientData.propertyType}`
          : ""
      }
      ${
        clientData.propertyValue
          ? `Property Value: KSh ${clientData.propertyValue}`
          : ""
      }
      ${
        clientData.travelDestination
          ? `Travel Destination: ${clientData.travelDestination}`
          : ""
      }
      ${
        clientData.travelDuration
          ? `Travel Duration: ${clientData.travelDuration}`
          : ""
      }
      ${
        clientData.coverageAmount
          ? `Coverage Amount: KSh ${clientData.coverageAmount}`
          : ""
      }
      ${clientData.tonnage ? `Vehicle Tonnage: ${clientData.tonnage}` : ""}
      ${clientData.passengers ? `Passengers: ${clientData.passengers}` : ""}
      
      Selected Quote:
      --------------
      Insurer: ${selectedQuote.insurer}
      Product: ${selectedQuote.type}
      Base Premium: KSh ${selectedQuote.basePremium.toLocaleString()}
      Total Premium: KSh ${selectedQuote.total.toLocaleString()}
      
      Quote Generated: ${new Date(timestamp).toLocaleString()}
      
      Action Required:
      ---------------
      Please follow up with the client to complete the insurance process.
      
      Client Contact: ${clientData.phone} | ${clientData.email}
    `;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h2 style="color: #0066cc; margin-bottom: 20px;">🔔 New Insurance Quote Request</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">👤 Client Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${
                clientData.name
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${
                clientData.phone
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${
                clientData.email
              }</td></tr>
            </table>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">🛡️ Insurance Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Category:</td><td style="padding: 8px 0;">${
                clientData.insuranceCategory
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Type:</td><td style="padding: 8px 0;">${
                clientData.insuranceType
              }</td></tr>
              ${
                clientData.vehicleRegistration
                  ? `<tr><td style="padding: 8px 0; font-weight: bold;">Vehicle Reg:</td><td style="padding: 8px 0;">${clientData.vehicleRegistration}</td></tr>`
                  : ""
              }
              ${
                clientData.propertyType
                  ? `<tr><td style="padding: 8px 0; font-weight: bold;">Property Type:</td><td style="padding: 8px 0;">${clientData.propertyType}</td></tr>`
                  : ""
              }
              ${
                clientData.propertyValue
                  ? `<tr><td style="padding: 8px 0; font-weight: bold;">Property Value:</td><td style="padding: 8px 0;">KSh ${clientData.propertyValue}</td></tr>`
                  : ""
              }
              ${
                clientData.travelDestination
                  ? `<tr><td style="padding: 8px 0; font-weight: bold;">Travel Destination:</td><td style="padding: 8px 0;">${clientData.travelDestination}</td></tr>`
                  : ""
              }
              ${
                clientData.coverageAmount
                  ? `<tr><td style="padding: 8px 0; font-weight: bold;">Coverage Amount:</td><td style="padding: 8px 0;">KSh ${clientData.coverageAmount}</td></tr>`
                  : ""
              }
            </table>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">💰 Selected Quote</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Insurer:</td><td style="padding: 8px 0;">${
                selectedQuote.insurer
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Product:</td><td style="padding: 8px 0;">${
                selectedQuote.type
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Base Premium:</td><td style="padding: 8px 0;">KSh ${selectedQuote.basePremium.toLocaleString()}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #0066cc;">Total Premium:</td><td style="padding: 8px 0; font-weight: bold; color: #0066cc;">KSh ${selectedQuote.total.toLocaleString()}</td></tr>
            </table>
          </div>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 6px; border-left: 4px solid #0066cc;">
            <h4 style="color: #0066cc; margin: 0 0 10px 0;">⚡ Action Required</h4>
            <p style="margin: 0; color: #333;">Please follow up with the client to complete the insurance process.</p>
            <p style="margin: 10px 0 0 0; font-weight: bold;">Contact: ${
              clientData.phone
            } | ${clientData.email}</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>Quote generated on ${new Date(timestamp).toLocaleString()}</p>
            <p>Wingra Insurance Agency | Automated Notification System</p>
          </div>
        </div>
      </div>
    `;

    // Send email to owner
    await transporter.sendMail({
      from: '"Wingra Quote System" <noreply@wingra.co.ke>',
      to: "info@wingra.co.ke", // Owner's email
      subject: `🔔 New Quote Request - ${clientData.name} (${selectedQuote.insurer})`,
      text: emailContent,
      html: htmlContent,
      replyTo: clientData.email,
    });

    return NextResponse.json({
      success: true,
      message: "Owner notification sent successfully",
    });
  } catch (error) {
    console.error("Error sending owner notification:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send notification" },
      { status: 500 }
    );
  }
}
