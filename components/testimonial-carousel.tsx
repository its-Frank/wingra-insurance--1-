"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    content:
      "Wingra exceeded my expectations when I needed urgent motor insurance. Their team responded instantly, guided me through the process, and issued my cover within minutes. Their efficiency and professionalism make them my go-to insurance partner!",
    author: "James K.",
  },
  {
    id: 2,
    content: "Services at Wingra are top notch i enjoyed the overall whole experience. Thanks",
    author: "Sarah M.",
  },
  {
    id: 3,
    content:
      "I appreciate all you have done and how well you have highlighted to the insurers where I think they were unfair. I am also grateful for offering further assistance. My opinion of Wingra and you personally has escalated and at the very least I understand the importance of having an intermediary if one decides to have insurance, so thank you for your exceptional service.",
    author: "David N.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-3xl bg-background shadow-md">
            <CardContent className="p-6 md:p-8">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-lg md:text-xl mb-6 italic">{testimonials[currentIndex].content}</p>
              <div className="font-semibold">- {testimonials[currentIndex].author}</div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md md:flex hidden"
        onClick={() => {
          prevSlide()
          setAutoplay(false)
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md md:flex hidden"
        onClick={() => {
          nextSlide()
          setAutoplay(false)
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

