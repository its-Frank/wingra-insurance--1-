"use server";

import { z } from "zod";
const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "your_email@example.com",
    pass: process.env.EMAIL_PASSWORD || "your_password",
  },
});

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type" }),
});

export type ContactFormData = z.infer<typeof formSchema>;

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData);

    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: '"Wingra Website" <noreply@wingra.co.ke>',
      to: "info@wingra.co.ke",
      subject: `New Contact Form: ${validatedData.subject}`,
      text: `
        New Contact Form Submission
        --------------------------
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Inquiry Type: ${validatedData.inquiryType}
        Subject: ${validatedData.subject}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Inquiry Type:</strong> ${validatedData.inquiryType}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email sent successfully:", info.messageId);

    // Return success response
    return {
      success: true,
      message:
        "Your message has been sent successfully. We'll get back to you soon!",
    };
  } catch (error) {
    console.error("Error submitting form:", error);

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your information and try again.",
        errors: error.errors,
      };
    }

    // Return generic error
    return {
      success: false,
      message:
        "There was an error sending your message. Please try again later.",
    };
  }
}
