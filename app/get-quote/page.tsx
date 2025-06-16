"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  User,
  Phone,
  Mail,
  Car,
  Hash,
  Users,
  Weight,
  Download,
  Home,
  Heart,
  Plane,
  Shield,
  Building,
} from "lucide-react";
import Image from "next/image";
import jsPDF from "jspdf";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Comprehensive insurance data
const insuranceData = {
  // Motor Insurance
  "Motor Private": {
    Monarch: { monthly: 900, twoInstallments: 2050, annual: 3980 },
    Trident: { monthly: 900, twoInstallments: 2050, annual: 3980 },
    Definite: { annual: 3938 },
    APA: { annual: 7574 },
    Amaco: { annual: 12094 },
    Gemini: { annual: 7574 },
    Pioneer: { annual: 7574 },
    Takaful: { annual: 12094 },
    "Old Mutual": { annual: 15108 },
    CIC: { annual: 7574 },
  },
  "Motor Commercial Own Goods": {
    Monarch: {
      "0-3 tons": { annual: 4560 },
      "3.5-8 tons": { annual: 6500 },
      "8.5-10 tons": { annual: 7500 },
    },
    APA: {
      "0-3 tons": { annual: 7574 },
      "3-8 tons": { annual: 9081 },
      "9-15 tons": { annual: 12094 },
      "Above 15 tons": { annual: 15108 },
    },
  },
  "Motor Commercial General Cartage": {},
  "PSV Uber": {
    Monarch: { annual: 6000, pll: 500 },
    APA: {
      "up to 7 pax": { annual: 7500, pll: 500 },
      "8-18 pax": { annual: 8500, pll: 500 },
      "19-24 pax": { annual: 12500, pll: 500 },
      "25-41 pax": { annual: 15000, pll: 500 },
    },
  },
  "PSV Non Matatu/Taxi/Hire": {
    Monarch: { annual: 6000, pll: 500 },
    APA: {
      "up to 7 pax": { annual: 7500, pll: 500 },
      "8-18 pax": { annual: 8500, pll: 500 },
      "19-24 pax": { annual: 12500, pll: 500 },
      "25-41 pax": { annual: 15000, pll: 500 },
    },
  },
  "Institutional Buses": {
    Monarch: { annual: 5500, pll: 250 },
    APA: {
      "up to 15 pax": { annual: 8000, pll: 500 },
      "15-25 pax": { annual: 10000, pll: 500 },
      "above 25 pax": { annual: 15000, pll: 500 },
    },
  },
  "Tour Service Vehicles": {
    Monarch: { annual: 6000, pll: 500 },
    APA: {
      "up to 7 pax": { annual: 7500, pll: 500 },
      "8-18 pax": { annual: 8500, pll: 500 },
      "19-24 pax": { annual: 12500, pll: 500 },
      "25-41 pax": { annual: 15000, pll: 500 },
    },
  },
  "TUK TUK PSV": {
    Monarch: { annual: 3500, pll: 500 },
    APA: { annual: 7500, pll: 500 },
  },
  "TUK TUK Commercial": {
    Monarch: { annual: 3500, pll: 500 },
    APA: { annual: 5000 },
  },
  "Motorcycle Private": {
    Monarch: { annual: 3154 },
  },
  "Motorcycle PSV": {
    Monarch: { annual: 3400, pll: 500 },
  },
  // Life Insurance
  "Life Insurance": {
    "Old Mutual": {
      "Whole Life": { annual: 12000, monthly: 1200 },
      "Term Life": { annual: 8000, monthly: 800 },
      Endowment: { annual: 15000, monthly: 1500 },
    },
    "CIC Life": {
      "Whole Life": { annual: 11000, monthly: 1100 },
      "Term Life": { annual: 7500, monthly: 750 },
      "Last Expense": { annual: 5000, monthly: 500 },
    },
    Jubilee: {
      "Whole Life": { annual: 13000, monthly: 1300 },
      "Term Life": { annual: 8500, monthly: 850 },
      "Education Plan": { annual: 18000, monthly: 1800 },
    },
  },
  // Home Insurance
  "Home Insurance": {
    "CIC General": {
      "Building Cover": { annual: 15000 },
      "Household Contents": { annual: 8000 },
      "All Risks": { annual: 12000 },
    },
    APA: {
      "Building Cover": { annual: 16000 },
      "Household Contents": { annual: 9000 },
      Comprehensive: { annual: 20000 },
    },
    Jubilee: {
      "Building Cover": { annual: 14000 },
      "Household Contents": { annual: 7500 },
      "All Risks": { annual: 11000 },
    },
  },
  // Travel Insurance
  "Travel Insurance": {
    APA: {
      "East Africa": { single: 2500, annual: 15000 },
      Worldwide: { single: 8000, annual: 45000 },
      "Europe/USA": { single: 12000, annual: 65000 },
    },
    "CIC General": {
      "East Africa": { single: 2200, annual: 13000 },
      Worldwide: { single: 7500, annual: 42000 },
      "Europe/USA": { single: 11000, annual: 60000 },
    },
    Jubilee: {
      "East Africa": { single: 2800, annual: 16000 },
      Worldwide: { single: 8500, annual: 48000 },
      "Europe/USA": { single: 12500, annual: 68000 },
    },
  },
  // Personal Accident
  "Personal Accident": {
    APA: {
      "Basic Cover": { annual: 5000 },
      "Enhanced Cover": { annual: 8000 },
      "Premium Cover": { annual: 12000 },
    },
    "CIC General": {
      "Basic Cover": { annual: 4500 },
      "Enhanced Cover": { annual: 7500 },
      "Premium Cover": { annual: 11000 },
    },
    "Old Mutual": {
      "Basic Cover": { annual: 5500 },
      "Enhanced Cover": { annual: 8500 },
      "Premium Cover": { annual: 13000 },
    },
  },
  // Business Insurance
  "Business Insurance": {
    APA: {
      "Fire & Theft": { annual: 25000 },
      "Public Liability": { annual: 18000 },
      "Professional Indemnity": { annual: 35000 },
    },
    "CIC General": {
      "Fire & Theft": { annual: 22000 },
      "Public Liability": { annual: 16000 },
      "Professional Indemnity": { annual: 32000 },
    },
    Jubilee: {
      "Fire & Theft": { annual: 28000 },
      "Public Liability": { annual: 20000 },
      "Professional Indemnity": { annual: 38000 },
    },
  },
  // Employee Benefits
  "Employee Benefits": {
    "Old Mutual": {
      "Group Life": { annual: 15000 },
      "Medical Cover": { annual: 45000 },
      "Pension Scheme": { annual: 25000 },
    },
    "CIC Life": {
      "Group Life": { annual: 14000 },
      "Medical Cover": { annual: 42000 },
      "Pension Scheme": { annual: 23000 },
    },
    Jubilee: {
      "Group Life": { annual: 16000 },
      "Medical Cover": { annual: 48000 },
      "Pension Scheme": { annual: 27000 },
    },
  },
};

const insuranceCategories = {
  "Motor Insurance": [
    "Motor Private",
    "Motor Commercial Own Goods",
    "Motor Commercial General Cartage",
    "PSV Uber",
    "PSV Non Matatu/Taxi/Hire",
    "Institutional Buses",
    "Tour Service Vehicles",
    "TUK TUK PSV",
    "TUK TUK Commercial",
    "Motorcycle Private",
    "Motorcycle PSV",
  ],
  "Life Insurance": ["Life Insurance"],
  "Property Insurance": ["Home Insurance"],
  "Travel Insurance": ["Travel Insurance"],
  "Personal Insurance": ["Personal Accident"],
  "Business Insurance": ["Business Insurance", "Employee Benefits"],
};

const insurerLogos = {
  Monarch: "/monarch.png?height=40&width=120&text=MONARCH",
  Trident: "/Trident.png?height=40&width=120&text=TRIDENT",
  Definite: "/Definite.png?height=40&width=120&text=DEFINITE",
  APA: "/APA.png?height=40&width=120&text=APA",
  Amaco: "/Amaco.png?height=40&width=120&text=AMACO",
  Gemini: "/Gemini.png?height=40&width=120&text=GEMINI",
  Pioneer: "/Pioneer.png?height=40&width=120&text=PIONEER",
  Takaful: "/Takaful.png?height=40&width=120&text=TAKAFUL",
  "Old Mutual": "/OldMutual.svg?height=40&width=120&text=OLD+MUTUAL",
  CIC: "/CIC.png?height=40&width=120&text=CIC",
  "CIC General": "/CIC.png?height=40&width=120&text=CIC+GENERAL",
  "CIC Life": "/CIC.png?height=40&width=120&text=CIC+LIFE",
  Jubilee: "/Jubilee.png?height=40&width=120&text=JUBILEE",
};

const categoryIcons = {
  "Motor Insurance": Car,
  "Life Insurance": Heart,
  "Property Insurance": Home,
  "Travel Insurance": Plane,
  "Personal Insurance": Shield,
  "Business Insurance": Building,
};

interface QuoteData {
  name: string;
  phone: string;
  email: string;
  insuranceCategory: string;
  insuranceType: string;
  vehicleRegistration: string;
  vehicleType: string;
  tonnage: string;
  passengers: string;
  propertyValue: string;
  propertyType: string;
  travelDestination: string;
  travelDuration: string;
  coverageAmount: string;
  additionalInfo: string;
  selectedQuote?: any;
}

type Step =
  | "welcome"
  | "name"
  | "contact"
  | "insurance-category"
  | "insurance-type"
  | "vehicle-details"
  | "property-details"
  | "travel-details"
  | "coverage-amount"
  | "additional-info"
  | "quotes"
  | "proforma";

export default function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [quoteData, setQuoteData] = useState<QuoteData>({
    name: "",
    phone: "",
    email: "",
    insuranceCategory: "",
    insuranceType: "",
    vehicleRegistration: "",
    vehicleType: "",
    tonnage: "",
    passengers: "",
    propertyValue: "",
    propertyType: "",
    travelDestination: "",
    travelDuration: "",
    coverageAmount: "",
    additionalInfo: "",
  });
  const [quotes, setQuotes] = useState<any[]>([]);
  const [chatHistory, setChatHistory] = useState<
    Array<{ type: "bot" | "user" | "quote"; message: string; data?: any }>
  >([
    {
      type: "bot",
      message:
        "Hello! 👋 Welcome to Wingra Insurance. I'm here to help you get the best insurance quotes. What's your name?",
    },
  ]);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedQuoteDetails, setSelectedQuoteDetails] = useState<any>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const addToChatHistory = (
    type: "bot" | "user" | "quote",
    message: string,
    data?: any
  ) => {
    setChatHistory((prev) => [...prev, { type, message, data }]);
  };

  // Auto-scroll chat history
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const calculatePremiumWithLevies = (basePremium: number) => {
    const levies = basePremium * 0.0045; // 0.45%
    const stampDuty = 40;
    return {
      basePremium,
      levies: Math.round(levies),
      stampDuty,
      total: Math.round(basePremium + levies + stampDuty),
    };
  };

  const getQuoteDetails = (insurer: string, insuranceType: string) => {
    const typeData = insuranceData[insuranceType as keyof typeof insuranceData];
    if (!typeData || !typeData[insurer as keyof typeof typeData]) return null;

    const insurerData = typeData[insurer as keyof typeof typeData];
    const details: { monthly?: any; twoInstallments?: any; annual?: any } = {};

    // Handle sub-categories (e.g., travel destinations, life insurance products)
    if (
      insuranceType === "Travel Insurance" ||
      insuranceType === "Life Insurance"
    ) {
      const subType =
        quoteData.travelDestination || quoteData.insuranceType.split(" - ")[0];
      const subData = insurerData[subType as keyof typeof insurerData];
      if (subData) {
        if ("monthly" in subData) {
          details.monthly = calculatePremiumWithLevies(subData.monthly);
        }
        if ("twoInstallments" in subData) {
          details.twoInstallments = calculatePremiumWithLevies(
            subData.twoInstallments
          );
        }
        if ("annual" in subData) {
          details.annual = calculatePremiumWithLevies(subData.annual);
        }
        if ("single" in subData) {
          details.monthly = calculatePremiumWithLevies(subData.single);
        }
      }
    } else {
      // Handle regular insurance types
      if ("monthly" in insurerData) {
        details.monthly = calculatePremiumWithLevies(insurerData.monthly);
      }
      if ("twoInstallments" in insurerData) {
        details.twoInstallments = calculatePremiumWithLevies(
          insurerData.twoInstallments
        );
      }
      if ("annual" in insurerData) {
        details.annual = calculatePremiumWithLevies(insurerData.annual);
      }
    }

    return details;
  };

  const generateQuotes = () => {
    const typeData =
      insuranceData[quoteData.insuranceType as keyof typeof insuranceData];
    if (!typeData) return [];

    const generatedQuotes: any[] = [];

    Object.entries(typeData).forEach(([insurer, data]) => {
      if (typeof data === "object" && data !== null) {
        // Handle different data structures
        if ("annual" in data && typeof data.annual === "number") {
          const premiumCalc = calculatePremiumWithLevies(data.annual);
          generatedQuotes.push({
            insurer,
            type: "Annual",
            basePremium: data.annual,
            ...premiumCalc,
            pll: data.pll || 0,
          });
        }

        if ("monthly" in data && typeof data.monthly === "number") {
          const premiumCalc = calculatePremiumWithLevies(data.monthly);
          generatedQuotes.push({
            insurer,
            type: "Monthly",
            basePremium: data.monthly,
            ...premiumCalc,
            pll: data.pll || 0,
          });
        }

        if (
          "twoInstallments" in data &&
          typeof data.twoInstallments === "number"
        ) {
          const premiumCalc = calculatePremiumWithLevies(data.twoInstallments);
          generatedQuotes.push({
            insurer,
            type: "Two Installments",
            basePremium: data.twoInstallments,
            ...premiumCalc,
            pll: data.pll || 0,
          });
        }

        // Handle sub-categories (like life insurance products, travel destinations, etc.)
        Object.entries(data).forEach(([subType, subData]) => {
          if (typeof subData === "object" && subData !== null) {
            if ("annual" in subData && typeof subData.annual === "number") {
              const premiumCalc = calculatePremiumWithLevies(subData.annual);
              generatedQuotes.push({
                insurer,
                type: `${subType} - Annual`,
                basePremium: subData.annual,
                ...premiumCalc,
                pll: subData.pll || 0,
              });
            }
            if ("monthly" in subData && typeof subData.monthly === "number") {
              const premiumCalc = calculatePremiumWithLevies(subData.monthly);
              generatedQuotes.push({
                insurer,
                type: `${subType} - Monthly`,
                basePremium: subData.monthly,
                ...premiumCalc,
                pll: subData.pll || 0,
              });
            }
            if ("single" in subData && typeof subData.single === "number") {
              const premiumCalc = calculatePremiumWithLevies(subData.single);
              generatedQuotes.push({
                insurer,
                type: `${subType} - Single Trip`,
                basePremium: subData.single,
                ...premiumCalc,
                pll: subData.pll || 0,
              });
            }
          }
        });
      }
    });

    return generatedQuotes.sort((a, b) => a.total - b.total);
  };

  const handleNext = () => {
    switch (currentStep) {
      case "welcome":
        setCurrentStep("name");
        break;
      case "name":
        if (quoteData.name.trim()) {
          addToChatHistory("user", quoteData.name);
          addToChatHistory(
            "bot",
            `Nice to meet you, ${quoteData.name}! 😊 Now I need your contact information. Please provide your phone number and email address.`
          );
          setCurrentStep("contact");
        }
        break;
      case "contact":
        if (quoteData.phone.trim() && quoteData.email.trim()) {
          addToChatHistory(
            "user",
            `📞 ${quoteData.phone} | 📧 ${quoteData.email}`
          );
          addToChatHistory(
            "bot",
            "Perfect! Now, what type of insurance are you looking for? Please select a category:"
          );
          setCurrentStep("insurance-category");
        }
        break;
      case "insurance-category":
        if (quoteData.insuranceCategory) {
          addToChatHistory("user", quoteData.insuranceCategory);
          addToChatHistory(
            "bot",
            `Great choice! Now please select the specific type of ${quoteData.insuranceCategory.toLowerCase()} you need:`
          );
          setCurrentStep("insurance-type");
        }
        break;
      case "insurance-type":
        if (quoteData.insuranceType) {
          addToChatHistory("user", quoteData.insuranceType);

          // Determine next step based on insurance type
          if (quoteData.insuranceCategory === "Motor Insurance") {
            if (quoteData.insuranceType === "Motor Private") {
              addToChatHistory(
                "bot",
                "Please provide your vehicle registration number:"
              );
              setCurrentStep("vehicle-details");
            } else {
              addToChatHistory(
                "bot",
                "I need some additional details about your vehicle. Please provide your vehicle registration number:"
              );
              setCurrentStep("vehicle-details");
            }
          } else if (quoteData.insuranceCategory === "Property Insurance") {
            addToChatHistory(
              "bot",
              "Please provide details about your property:"
            );
            setCurrentStep("property-details");
          } else if (quoteData.insuranceCategory === "Travel Insurance") {
            addToChatHistory("bot", "Please provide your travel details:");
            setCurrentStep("travel-details");
          } else {
            addToChatHistory(
              "bot",
              "What coverage amount are you looking for?"
            );
            setCurrentStep("coverage-amount");
          }
        }
        break;
      case "vehicle-details":
        if (quoteData.vehicleRegistration) {
          addToChatHistory("user", `🚗 ${quoteData.vehicleRegistration}`);

          const needsAdditionalInfo =
            [
              "Motor Commercial Own Goods",
              "Motor Commercial General Cartage",
            ].includes(quoteData.insuranceType) ||
            quoteData.insuranceType.includes("PSV") ||
            quoteData.insuranceType.includes("Institutional");

          if (needsAdditionalInfo) {
            const message = quoteData.insuranceType.includes("Commercial")
              ? "What's the tonnage of your commercial vehicle?"
              : "How many passengers does your vehicle carry?";
            addToChatHistory("bot", message);
            setCurrentStep("additional-info");
          } else {
            addToChatHistory(
              "bot",
              "Excellent! Let me find the best quotes for you... 🔍"
            );
            const generatedQuotes = generateQuotes();
            setQuotes(generatedQuotes);
            displayQuotesInChat(generatedQuotes);
            setCurrentStep("quotes");
          }
        }
        break;
      case "property-details":
        if (quoteData.propertyValue && quoteData.propertyType) {
          addToChatHistory(
            "user",
            `🏠 ${quoteData.propertyType} - KSh ${quoteData.propertyValue}`
          );
          addToChatHistory(
            "bot",
            "Perfect! Let me find the best home insurance quotes for you... 🔍"
          );
          const generatedQuotes = generateQuotes();
          setQuotes(generatedQuotes);
          displayQuotesInChat(generatedQuotes);
          setCurrentStep("quotes");
        }
        break;
      case "travel-details":
        if (quoteData.travelDestination && quoteData.travelDuration) {
          addToChatHistory(
            "user",
            `✈️ ${quoteData.travelDestination} for ${quoteData.travelDuration}`
          );
          addToChatHistory(
            "bot",
            "Great! Let me find the best travel insurance quotes for you... 🔍"
          );
          const generatedQuotes = generateQuotes();
          setQuotes(generatedQuotes);
          displayQuotesInChat(generatedQuotes);
          setCurrentStep("quotes");
        }
        break;
      case "coverage-amount":
        if (quoteData.coverageAmount) {
          addToChatHistory("user", `💰 KSh ${quoteData.coverageAmount}`);
          addToChatHistory(
            "bot",
            "Perfect! Let me find the best quotes for you... 🔍"
          );
          const generatedQuotes = generateQuotes();
          setQuotes(generatedQuotes);
          displayQuotesInChat(generatedQuotes);
          setCurrentStep("quotes");
        }
        break;
      case "additional-info":
        const info = quoteData.tonnage || quoteData.passengers;
        if (info) {
          addToChatHistory("user", info);
          addToChatHistory(
            "bot",
            "Excellent! Let me find the best quotes for you... 🔍"
          );
          const generatedQuotes = generateQuotes();
          setQuotes(generatedQuotes);
          displayQuotesInChat(generatedQuotes);
          setCurrentStep("quotes");
        }
        break;
    }
  };

  const displayQuotesInChat = (quotesArray: any[]) => {
    addToChatHistory(
      "bot",
      `I found ${quotesArray.length} quotes for you! Here are your options:`
    );

    quotesArray.forEach((quote, index) => {
      const quoteMessage = `${quote.insurer} - ${
        quote.type
      }\n💰 KSh ${quote.total.toLocaleString()} (Total)\n📋 Base: KSh ${quote.basePremium.toLocaleString()} | Levies: KSh ${
        quote.levies
      } | Stamp: KSh ${quote.stampDuty}${
        quote.pll > 0 ? ` | PLL: KSh ${quote.pll}` : ""
      }`;

      addToChatHistory("quote", quoteMessage, quote);
    });

    addToChatHistory(
      "bot",
      "Click on any quote above to see detailed pricing options or select it to proceed."
    );
  };

  const sendQuoteToEmail = () => {
    addToChatHistory(
      "bot",
      `📧 Perfect! I've sent all ${quotes.length} quotes to ${quoteData.email}. You can review them at your convenience and get back to us when you're ready to proceed.`
    );
  };

  const downloadProformaPDF = () => {
    const quote = quoteData.selectedQuote;
    const today = new Date();
    const coverFrom = today.toLocaleDateString();
    const coverTo = new Date(
      today.getFullYear() + 1,
      today.getMonth(),
      today.getDate()
    ).toLocaleDateString();
    const quoteNumber = `WI-${Date.now().toString().slice(-6)}`;

    // Create new PDF document
    const pdf = new jsPDF();

    // Set font
    pdf.setFont("helvetica");

    // Header
    pdf.setFontSize(20);
    pdf.setTextColor(0, 100, 200);
    pdf.text("WINGRA INSURANCE AGENCY", 20, 30);

    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text("123 Insurance Plaza", 20, 40);
    pdf.text("Nairobi, Kenya", 20, 47);
    pdf.text("Email: info@wingra.co.ke", 20, 54);
    pdf.text("Phone: +254 700 123 456", 20, 61);

    // Quote details (right side)
    pdf.text(`Date: ${today.toLocaleDateString()}`, 140, 40);
    pdf.text(`Quote #: ${quoteNumber}`, 140, 47);
    pdf.text(`Insurer: ${quote.insurer}`, 140, 54);

    // Title
    pdf.setFontSize(16);
    pdf.setTextColor(0, 100, 200);
    pdf.text("PROFORMA DEBIT NOTE", 20, 80);

    // Client Details
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text("CLIENT DETAILS:", 20, 95);
    pdf.text(`Name: ${quoteData.name}`, 20, 105);
    pdf.text(`Phone: ${quoteData.phone}`, 20, 112);
    pdf.text(`Email: ${quoteData.email}`, 20, 119);
    if (quoteData.vehicleRegistration) {
      pdf.text(
        `Vehicle Registration: ${quoteData.vehicleRegistration}`,
        20,
        126
      );
    }

    // Insurance Details
    pdf.text("INSURANCE DETAILS:", 20, 140);
    pdf.text(`Insurance Type: ${quoteData.insuranceType}`, 20, 150);
    pdf.text(`Product: ${quote.type}`, 20, 157);
    pdf.text(`Cover Period: ${coverFrom} to ${coverTo}`, 20, 164);

    // Premium Breakdown
    pdf.text("PREMIUM BREAKDOWN:", 20, 180);

    let yPos = 190;
    pdf.text(`Base Premium:`, 20, yPos);
    pdf.text(`KSh ${quote.basePremium.toLocaleString()}`, 140, yPos);

    yPos += 7;
    pdf.text(`Levies (0.45%):`, 20, yPos);
    pdf.text(`KSh ${quote.levies.toLocaleString()}`, 140, yPos);

    yPos += 7;
    pdf.text(`Stamp Duty:`, 20, yPos);
    pdf.text(`KSh ${quote.stampDuty}`, 140, yPos);

    if (quote.pll > 0) {
      yPos += 7;
      pdf.text(`PLL:`, 20, yPos);
      pdf.text(`KSh ${quote.pll}`, 140, yPos);
    }

    // Total
    yPos += 15;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text(`TOTAL AMOUNT:`, 20, yPos);
    pdf.text(`KSh ${quote.total.toLocaleString()}`, 140, yPos);

    // Payment Instructions
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    yPos += 20;
    pdf.text("PAYMENT INSTRUCTIONS:", 20, yPos);
    yPos += 10;
    pdf.text("Bank: KCB Bank", 20, yPos);
    yPos += 7;
    pdf.text("Account Name: Wingra Insurance Agency", 20, yPos);
    yPos += 7;
    pdf.text("Account Number: 1234567890", 20, yPos);
    yPos += 7;
    pdf.text(
      `Reference: ${quoteData.vehicleRegistration || quoteData.name}`,
      20,
      yPos
    );
    // Footer
    yPos += 20;
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Regulated by Insurance Regulatory Authority (IRA)", 20, yPos);
    // Save the PDF
    pdf.save(`Wingra_Insurance_Quote_${quoteNumber}.pdf`);
  };

  const sendClientDataToOwner = async (
    clientData: QuoteData,
    selectedQuote: any
  ) => {
    try {
      const response = await fetch("/api/notify-owner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientData,
          selectedQuote,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log("Owner notification sent successfully");
      }
    } catch (error) {
      console.error("Failed to send owner notification:", error);
    }
  };

  const handleQuoteClick = (quote: any) => {
    const details = getQuoteDetails(quote.insurer, quoteData.insuranceType);
    setSelectedQuoteDetails({ ...quote, details });
    setShowQuoteModal(true);
  };

  const handleQuoteSelection = (quote: any) => {
    setQuoteData((prev) => ({ ...prev, selectedQuote: quote }));
    addToChatHistory("user", `Selected: ${quote.insurer} - ${quote.type}`);
    addToChatHistory(
      "bot",
      `Excellent choice! 🎉 You've selected ${quote.insurer} - ${
        quote.type
      } for KSh ${quote.total.toLocaleString()}. Let me prepare your proforma invoice...`
    );

    // Send notification to owner
    sendClientDataToOwner(quoteData, quote);

    setShowQuoteModal(false);
    setCurrentStep("proforma");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "welcome":
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">
                Welcome to Wingra Insurance! 🎉
              </h3>
              <p className="text-muted-foreground">
                Get instant quotes from multiple insurers
              </p>
            </div>
            <Button onClick={handleNext} className="w-full">
              Start Getting Quotes
            </Button>
          </div>
        );

      case "name":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <Label htmlFor="name">What's your full name?</Label>
            </div>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={quoteData.name}
              onChange={(e) =>
                setQuoteData((prev) => ({ ...prev, name: e.target.value }))
              }
              onKeyPress={(e) => e.key === "Enter" && handleNext()}
            />
            <Button onClick={handleNext} disabled={!quoteData.name.trim()}>
              Continue
            </Button>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5 text-primary" />
              <Label>Contact Information</Label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="e.g., +254 700 123 456"
                  value={quoteData.phone}
                  onChange={(e) =>
                    setQuoteData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={quoteData.email}
                  onChange={(e) =>
                    setQuoteData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>
            <Button
              onClick={handleNext}
              disabled={!quoteData.phone.trim() || !quoteData.email.trim()}
            >
              Continue
            </Button>
          </div>
        );

      case "insurance-category":
        return (
          <div className="space-y-4">
            <Label>Select Insurance Category</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(categoryIcons).map(([category, Icon]) => (
                <Button
                  key={category}
                  variant={
                    quoteData.insuranceCategory === category
                      ? "default"
                      : "outline"
                  }
                  className="h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => {
                    setQuoteData((prev) => ({
                      ...prev,
                      insuranceCategory: category,
                      insuranceType: "",
                    }));
                    setTimeout(handleNext, 100);
                  }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm">{category}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case "insurance-type":
        const availableTypes =
          insuranceCategories[
            quoteData.insuranceCategory as keyof typeof insuranceCategories
          ] || [];

        return (
          <div className="space-y-4">
            <Label>Select Specific Insurance Type</Label>
            <div className="grid grid-cols-1 gap-2">
              {availableTypes.map((type) => (
                <Button
                  key={type}
                  variant={
                    quoteData.insuranceType === type ? "default" : "outline"
                  }
                  className="justify-start"
                  onClick={() => {
                    setQuoteData((prev) => ({ ...prev, insuranceType: type }));
                    setTimeout(handleNext, 100);
                  }}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        );

      case "vehicle-details":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Hash className="h-5 w-5 text-primary" />
              <Label htmlFor="registration">Vehicle Registration Number</Label>
            </div>
            <Input
              id="registration"
              placeholder="e.g., KCA 123A"
              value={quoteData.vehicleRegistration}
              onChange={(e) =>
                setQuoteData((prev) => ({
                  ...prev,
                  vehicleRegistration: e.target.value.toUpperCase(),
                }))
              }
              onKeyPress={(e) => e.key === "Enter" && handleNext()}
            />
            <Button
              onClick={handleNext}
              disabled={!quoteData.vehicleRegistration?.trim()}
            >
              Continue
            </Button>
          </div>
        );

      case "property-details":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-primary" />
              <Label>Property Details</Label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={quoteData.propertyType}
                  onValueChange={(value) =>
                    setQuoteData((prev) => ({ ...prev, propertyType: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Mansion">Mansion</SelectItem>
                    <SelectItem value="Commercial Building">
                      Commercial Building
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="propertyValue">Property Value (KSh)</Label>
                <Input
                  id="propertyValue"
                  placeholder="e.g., 5000000"
                  value={quoteData.propertyValue}
                  onChange={(e) =>
                    setQuoteData((prev) => ({
                      ...prev,
                      propertyValue: e.target.value,
                    }))
                  }
                  type="number"
                />
              </div>
            </div>
            <Button
              onClick={handleNext}
              disabled={!quoteData.propertyType || !quoteData.propertyValue}
            >
              Continue
            </Button>
          </div>
        );

      case "travel-details":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-primary" />
              <Label>Travel Details</Label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="travelDestination">Destination</Label>
                <Select
                  value={quoteData.travelDestination}
                  onValueChange={(value) =>
                    setQuoteData((prev) => ({
                      ...prev,
                      travelDestination: value,
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="East Africa">East Africa</SelectItem>
                    <SelectItem value="Europe/USA">Europe/USA</SelectItem>
                    <SelectItem value="Worldwide">Worldwide</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="travelDuration">Duration</Label>
                <Select
                  value={quoteData.travelDuration}
                  onValueChange={(value) =>
                    setQuoteData((prev) => ({ ...prev, travelDuration: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single Trip">Single Trip</SelectItem>
                    <SelectItem value="Annual Multi-Trip">
                      Annual Multi-Trip
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              onClick={handleNext}
              disabled={
                !quoteData.travelDestination || !quoteData.travelDuration
              }
            >
              Continue
            </Button>
          </div>
        );

      case "coverage-amount":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <Label htmlFor="coverageAmount">Coverage Amount (KSh)</Label>
            </div>
            <Input
              id="coverageAmount"
              placeholder="e.g., 1000000"
              value={quoteData.coverageAmount}
              onChange={(e) =>
                setQuoteData((prev) => ({
                  ...prev,
                  coverageAmount: e.target.value,
                }))
              }
              type="number"
            />
            <Button onClick={handleNext} disabled={!quoteData.coverageAmount}>
              Continue
            </Button>
          </div>
        );

      case "additional-info":
        const needsTonnage = quoteData.insuranceType?.includes("Commercial");

        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {needsTonnage ? (
                <Weight className="h-5 w-5 text-primary" />
              ) : (
                <Users className="h-5 w-5 text-primary" />
              )}
              <Label>
                {needsTonnage ? "Vehicle Tonnage" : "Number of Passengers"}
              </Label>
            </div>
            {needsTonnage ? (
              <Select
                value={quoteData.tonnage}
                onValueChange={(value) =>
                  setQuoteData((prev) => ({ ...prev, tonnage: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select tonnage range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-3 tons">0-3 tons</SelectItem>
                  <SelectItem value="4-8 tons">4-8 tons</SelectItem>
                  <SelectItem value="9-12 tons">9-12 tons</SelectItem>
                  <SelectItem value="13-15 tons">13-15 tons</SelectItem>
                  <SelectItem value="16-20 tons">16-20 tons</SelectItem>
                  <SelectItem value="Above 20 tons">Above 20 tons</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <Input
                placeholder="Enter number of passengers"
                value={quoteData.passengers}
                onChange={(e) =>
                  setQuoteData((prev) => ({
                    ...prev,
                    passengers: e.target.value,
                  }))
                }
                type="number"
                min="1"
              />
            )}
            <Button
              onClick={handleNext}
              disabled={!quoteData.tonnage && !quoteData.passengers}
            >
              Generate Quotes
            </Button>
          </div>
        );

      case "quotes":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Quote Actions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => window.print()}>
                <Download className="h-4 w-4 mr-2" />
                Print Quotes
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Click on any quote in the chat above to see detailed pricing or
              select it to proceed.
            </div>
          </div>
        );

      case "proforma":
        const quote = quoteData.selectedQuote;
        const today = new Date();
        const coverFrom = today.toLocaleDateString();
        const coverTo = new Date(
          today.getFullYear() + 1,
          today.getMonth(),
          today.getDate()
        ).toLocaleDateString();

        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Proforma Invoice Ready! 🎉
              </h3>
              <Button onClick={downloadProformaPDF}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <Image
                      src="/logo.jpg?height=60&width=200&text=WINGRA+INSURANCE"
                      alt="Wingra Insurance"
                      width={200}
                      height={60}
                      className="mb-4"
                    />
                    <div className="text-sm">
                      <p>Bruce House </p>
                      <p>Nairobi, Kenya</p>
                      <p>Email: info@wingra.co.ke</p>
                      <p>Phone: +254 797299134</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Image
                      src={
                        insurerLogos[
                          quote.insurer as keyof typeof insurerLogos
                        ] || "/placeholder.svg"
                      }
                      alt={quote.insurer}
                      width={120}
                      height={40}
                      className="mb-4"
                    />
                    <div className="text-sm">
                      <p>Date: {today.toLocaleDateString()}</p>
                      <p>Quote #: WI-{Date.now().toString().slice(-6)}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-b py-4 mb-6">
                  <h4 className="font-semibold mb-2">Client Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Name:</strong> {quoteData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {quoteData.email}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Phone:</strong> {quoteData.phone}
                      </p>
                      {quoteData.vehicleRegistration && (
                        <p>
                          <strong>Vehicle Reg:</strong>{" "}
                          {quoteData.vehicleRegistration}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Insurance Details</h4>
                  <div className="text-sm">
                    <p>
                      <strong>Insurer:</strong> {quote.insurer}
                    </p>
                    <p>
                      <strong>Product:</strong> {quote.type}
                    </p>
                    <p>
                      <strong>Insurance Type:</strong> {quoteData.insuranceType}
                    </p>
                    <p>
                      <strong>Cover Period:</strong> {coverFrom} to {coverTo}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Base Premium:</span>
                    <span>KSh {quote.basePremium.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Levies (0.45%):</span>
                    <span>KSh {quote.levies.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Stamp Duty:</span>
                    <span>KSh {quote.stampDuty}</span>
                  </div>
                  {quote.pll > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span>PLL:</span>
                      <span>KSh {quote.pll}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                    <span>Total Amount:</span>
                    <span>KSh {quote.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Instructions</h4>
                  <div className="text-sm">
                    <p>
                      <strong>Bank:</strong> I&M Bank
                    </p>
                    <p>
                      <strong>Account Name:</strong> Wingra Insurance Agency Ltd
                    </p>
                    <p>
                      <strong>Account Number:</strong> 02006107316350
                    </p>
                    <p>
                      <strong>Reference:</strong>{" "}
                      {quoteData.vehicleRegistration || quoteData.name}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <Image
                    src="/placeholder.svg?height=30&width=60&text=IRA"
                    alt="IRA"
                    width={60}
                    height={30}
                  />
                  <span>Regulated by Insurance Regulatory Authority (IRA)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Quote Details Modal */}
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Quote Details - {selectedQuoteDetails?.insurer}
            </DialogTitle>
            <DialogDescription>
              Below are the available pricing options for this insurance quote.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedQuoteDetails?.details?.monthly && (
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Premium:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.monthly.basePremium.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Levies (0.45%):</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.monthly.levies.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stamp Duty:</span>
                      <span>
                        KSh {selectedQuoteDetails.details.monthly.stampDuty}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.monthly.total.toLocaleString()}
                      </span>
                    </div>
                    {selectedQuoteDetails.pll > 0 && (
                      <div className="flex justify-between">
                        <span>PLL:</span>
                        <span>KSh {selectedQuoteDetails.pll}</span>
                      </div>
                    )}
                    <Button
                      className="w-full mt-4"
                      onClick={() =>
                        handleQuoteSelection({
                          ...selectedQuoteDetails,
                          type: "Monthly",
                          basePremium:
                            selectedQuoteDetails.details.monthly.basePremium,
                          levies: selectedQuoteDetails.details.monthly.levies,
                          stampDuty:
                            selectedQuoteDetails.details.monthly.stampDuty,
                          total: selectedQuoteDetails.details.monthly.total,
                        })
                      }
                    >
                      Select Monthly Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            {selectedQuoteDetails?.details?.twoInstallments && (
              <Card>
                <CardHeader>
                  <CardTitle>Two Installments Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Premium:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.twoInstallments.basePremium.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Levies (0.45%):</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.twoInstallments.levies.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stamp Duty:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.twoInstallments.stampDuty}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.twoInstallments.total.toLocaleString()}
                      </span>
                    </div>
                    {selectedQuoteDetails.pll > 0 && (
                      <div className="flex justify-between">
                        <span>PLL:</span>
                        <span>KSh {selectedQuoteDetails.pll}</span>
                      </div>
                    )}
                    <Button
                      className="w-full mt-4"
                      onClick={() =>
                        handleQuoteSelection({
                          ...selectedQuoteDetails,
                          type: "Two Installments",
                          basePremium:
                            selectedQuoteDetails.details.twoInstallments
                              .basePremium,
                          levies:
                            selectedQuoteDetails.details.twoInstallments.levies,
                          stampDuty:
                            selectedQuoteDetails.details.twoInstallments
                              .stampDuty,
                          total:
                            selectedQuoteDetails.details.twoInstallments.total,
                        })
                      }
                    >
                      Select Two Installments Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            {selectedQuoteDetails?.details?.annual && (
              <Card>
                <CardHeader>
                  <CardTitle>Annual Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Premium:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.annual.basePremium.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Levies (0.45%):</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.annual.levies.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stamp Duty:</span>
                      <span>
                        KSh {selectedQuoteDetails.details.annual.stampDuty}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>
                        KSh{" "}
                        {selectedQuoteDetails.details.annual.total.toLocaleString()}
                      </span>
                    </div>
                    {selectedQuoteDetails.pll > 0 && (
                      <div className="flex justify-between">
                        <span>PLL:</span>
                        <span>KSh {selectedQuoteDetails.pll}</span>
                      </div>
                    )}
                    <Button
                      className="w-full mt-4"
                      onClick={() =>
                        handleQuoteSelection({
                          ...selectedQuoteDetails,
                          type: "Annual",
                          basePremium:
                            selectedQuoteDetails.details.annual.basePremium,
                          levies: selectedQuoteDetails.details.annual.levies,
                          stampDuty:
                            selectedQuoteDetails.details.annual.stampDuty,
                          total: selectedQuoteDetails.details.annual.total,
                        })
                      }
                    >
                      Select Annual Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get Your Insurance Quote
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get instant quotes from multiple insurers for all types of
                insurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Process Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat History */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Insurance Quote Assistant
                  </CardTitle>
                  <CardDescription>
                    {currentStep === "quotes" &&
                      `Found ${quotes.length} quotes for your ${quoteData.insuranceType}`}
                    {currentStep === "proforma" &&
                      "Your insurance quote is ready"}
                  </CardDescription>
                </CardHeader>
                <CardContent
                  className="max-h-96 overflow-y-auto space-y-3"
                  ref={chatContainerRef}
                >
                  {chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        chat.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          chat.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : chat.type === "quote"
                            ? "bg-green-100 border border-green-200 cursor-pointer hover:bg-green-200"
                            : "bg-muted"
                        }`}
                        onClick={
                          chat.type === "quote" && chat.data
                            ? () => handleQuoteClick(chat.data)
                            : undefined
                        }
                      >
                        <p className="text-sm whitespace-pre-line">
                          {chat.message}
                        </p>
                        {chat.type === "quote" && chat.data && (
                          <div className="mt-2 flex items-center gap-2">
                            <Image
                              src={
                                insurerLogos[
                                  chat.data.insurer as keyof typeof insurerLogos
                                ] || "/placeholder.svg"
                              }
                              alt={chat.data.insurer}
                              width={60}
                              height={20}
                              className="object-contain"
                            />
                            <Badge variant="secondary" className="text-xs">
                              Click to View Details
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Current Step */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {currentStep === "welcome" && "Welcome"}
                    {currentStep === "name" && "Personal Information"}
                    {currentStep === "contact" && "Contact Details"}
                    {currentStep === "insurance-category" &&
                      "Insurance Category"}
                    {currentStep === "insurance-type" && "Insurance Type"}
                    {currentStep === "vehicle-details" && "Vehicle Information"}
                    {currentStep === "property-details" && "Property Details"}
                    {currentStep === "travel-details" && "Travel Information"}
                    {currentStep === "coverage-amount" && "Coverage Amount"}
                    {currentStep === "additional-info" &&
                      "Additional Information"}
                    {currentStep === "quotes" && "Quote Actions"}
                    {currentStep === "proforma" && "Proforma Invoice"}
                  </CardTitle>
                </CardHeader>
                <CardContent>{renderCurrentStep()}</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
