"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const brands = [
  { id: 1, name: "BMW", logo: "/placeholder.svg?height=100&width=100", link: "/brands/bmw" },
  { id: 2, name: "Mercedes-Benz", logo: "/placeholder.svg?height=100&width=100", link: "/brands/mercedes-benz" },
  { id: 3, name: "Audi", logo: "/placeholder.svg?height=100&width=100", link: "/brands/audi" },
  { id: 4, name: "Tesla", logo: "/placeholder.svg?height=100&width=100", link: "/brands/tesla" },
  { id: 5, name: "Porsche", logo: "/placeholder.svg?height=100&width=100", link: "/brands/porsche" },
  { id: 6, name: "Toyota", logo: "/placeholder.svg?height=100&width=100", link: "/brands/toyota" },
  { id: 7, name: "Honda", logo: "/placeholder.svg?height=100&width=100", link: "/brands/honda" },
  { id: 8, name: "Ford", logo: "/placeholder.svg?height=100&width=100", link: "/brands/ford" },
]

export default function BrandSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button variant="outline" size="icon" onClick={scrollLeft} className="h-10 w-10 rounded-full">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>
      <div ref={scrollContainerRef} className="flex space-x-8 overflow-x-auto py-8 scrollbar-hide">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.link}
            className="flex flex-col items-center min-w-[120px] transition-transform hover:scale-105"
          >
            <div className="relative h-24 w-24 mb-2">
              <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
            </div>
            <span className="text-sm font-medium">{brand.name}</span>
          </Link>
        ))}
      </div>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button variant="outline" size="icon" onClick={scrollRight} className="h-10 w-10 rounded-full">
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}

