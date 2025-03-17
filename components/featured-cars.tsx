"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Fuel, Heart, Info, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"
import { useFeaturedCars } from "@/hooks/use-featured-cars"

export default function FeaturedCars() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { cars, isLoading } = useFeaturedCars()

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <div className="relative mt-8">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button variant="outline" size="icon" onClick={scrollLeft} className="h-10 w-10 rounded-full">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>
      <div ref={scrollContainerRef} className="flex space-x-6 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="min-w-[300px] max-w-[300px] snap-start">
              <Card className="h-full">
                <Skeleton className="h-[200px] w-full rounded-t-lg" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            </div>
          ))
          : cars?.map((car) => (
            <div key={car.id} className="min-w-[300px] max-w-[300px] snap-start">
              <Card className="h-full">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="h-[200px] w-full object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-muted-foreground hover:text-primary"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                  {car.featured && <Badge className="absolute left-2 top-2">Featured</Badge>}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{car.name}</h3>
                  <p className="text-sm text-muted-foreground">{car.category} • {car.year}</p>
                  <p className="font-bold text-lg">${car.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href={car.link} className="w-full">
                    <Button variant="default" className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
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
