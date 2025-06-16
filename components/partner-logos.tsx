"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const partners = [
  { name: "Britam", logo: "/britam.png" },
  { name: "Monarch", logo: "/monarch.png" },
  { name: "APA", logo: "/APA.png" },
  { name: "AMACO", logo: "/Amaco.png" },
  { name: "TRIDENT", logo: "/Trident.jpg" },
  { name: "OLD MUTUAL", logo: "/Oldmutual.png" },
  { name: "CIC", logo: "/CIC.png" },
  { name: "AAR", logo: "/AAR.png" },
  { name: "MBank", logo: "/mbank.png" },
  { name: "Incourage", logo: "/Incourage.png" },
];

export default function PartnerLogosWithControls() {
  const [autoplay, setAutoplay] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Temporarily pause autoplay when manually scrolling
      setAutoplay(false);
      setTimeout(() => setAutoplay(true), 5000);
    }
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });

        // Reset to beginning when reaching the end
        const container = scrollContainerRef.current;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 100
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="relative w-full py-8">
      {/* Left Control */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 shadow-md"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-4 px-12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="flex-none mx-6"
            style={{ minWidth: "150px" }}
          >
            <div className="relative h-20 w-40 transition-transform duration-300 hover:scale-110">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}

        {/* Duplicate the first few items to create a seamless loop effect */}
        {partners.slice(0, 4).map((partner, index) => (
          <div
            key={`${partner.name}-dup`}
            className="flex-none mx-6"
            style={{ minWidth: "150px" }}
          >
            <div className="relative h-20 w-40 transition-transform duration-300 hover:scale-110">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Control */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 shadow-md"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-10 h-full w-12 bg-gradient-to-r from-white to-transparent z-[5]"></div>
      <div className="absolute top-0 right-10 h-full w-12 bg-gradient-to-l from-white to-transparent z-[5]"></div>
    </div>
  );
}
