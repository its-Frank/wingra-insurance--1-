"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/t30.jpg?height=600&width=1200",
    title: "Your Trusted Insurance Partner",
    description:
      "At Wingra Insurance Agency, we put our clients first and we're committed to building long-term relationships based on trust, transparency, and exceptional service.",
    cta: {
      primary: {
        text: "Individual Solutions",
        link: "/individual-solutions",
      },
      secondary: {
        text: "Corporate Solutions",
        link: "/corporate-solutions",
      },
    },
  },
  {
    id: 2,
    image: "/family.jpg?height=600&width=1200",
    title: "Comprehensive Insurance Solutions",
    description:
      "We offer a wide range of insurance products to protect what matters most to you - your family, your home, your business, and your future.",
    cta: {
      primary: {
        text: "Get a Quote",
        link: "/get-quote",
      },
      secondary: {
        text: "Learn More",
        link: "/about",
      },
    },
  },
  {
    id: 3,
    image: "/team.jpg?height=600&width=1200",
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is always ready to assist you with any questions or concerns. We're just a call or click away.",
    cta: {
      primary: {
        text: "Contact Us",
        link: "/contact",
      },
      secondary: {
        text: "View FAQs",
        link: "/faq",
      },
    },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white mb-4 animate-fadeIn">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8 animate-fadeIn animation-delay-200">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link href={slide.cta.primary.link}>
                  {slide.cta.primary.text}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href={slide.cta.secondary.link}>
                  {slide.cta.secondary.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 text-white rounded-full hover:bg-black/50 hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 text-white rounded-full hover:bg-black/50 hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
