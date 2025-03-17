"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useBrands } from "@/hooks/use-brands"
import { Button } from "@/components/ui/button"
import { Skeleton } from "./ui/skeleton"

export default function BrandSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { brands, isLoading, isError } = useBrands()
  const animationRef = useRef<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Hàm cuộn mượt mà
  const smoothScroll = (direction: "left" | "right", distance = 300, duration = 800) => {
    if (!scrollContainerRef.current) return

    let start = scrollContainerRef.current.scrollLeft
    let target = direction === "right" ? start + distance : start - distance
    let startTime: number | null = null

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1) // Từ 0 -> 1
      const easeInOut = progress < 0.5 ? 2 * progress ** 2 : 1 - Math.pow(-2 * progress + 2, 2) / 2
      scrollContainerRef.current!.scrollLeft = start + (target - start) * easeInOut

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateScroll)
      }
    }

    animationRef.current = requestAnimationFrame(animateScroll)
  }

  // Hiệu ứng tự động cuộn mượt mà liên tục
  useEffect(() => {
    if (isHovered) return // Dừng auto-scroll khi hover vào slider

    const autoScroll = () => {
      if (!scrollContainerRef.current) return
      let container = scrollContainerRef.current

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0 // Reset về đầu khi cuộn hết danh sách
      }

      smoothScroll("right", 1, 50) // Cuộn từng chút một để có hiệu ứng "nước chảy"
    }

    const interval = setInterval(autoScroll, 20) // Chạy mỗi 20ms

    return () => {
      clearInterval(interval)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isHovered])

  return (
    <>
      {isLoading && (
        <div className="flex space-x-8 py-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              <Skeleton className="h-24 w-24 rounded-full" />
              <Skeleton className="h-4 w-20 mt-2" />
            </div>
          ))}
        </div>)}   {/* ✅ Hiển thị skeleton thay vì return sớm */}
      {isError && <p className="text-red-500">Failed to load brands</p>}
      {!isLoading && !isError && (
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Nút Scroll Trái */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button variant="outline" size="icon" onClick={() => smoothScroll("left")} className="h-10 w-10 rounded-full">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          {/* Danh sách thương hiệu */}
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

          {/* Nút Scroll Phải */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button variant="outline" size="icon" onClick={() => smoothScroll("right")} className="h-10 w-10 rounded-full">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
      )}
    </>

  )
}
