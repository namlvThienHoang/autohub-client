"use client"

import Link from "next/link";
import Image from "next/image";
import { Fuel, Heart, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCars } from "@/hooks/use-cars";
import { Skeleton } from "./ui/skeleton";

export default function CarGrid() {
  const { cars, isLoading, isError } = useCars();

  return (
    <>
      {isLoading && (
        <div className="flex space-x-8 py-8">
          {[...Array(3)].map((_, index) => (
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
          ))}
        </div>)}   {/* ✅ Hiển thị skeleton thay vì return sớm */}
      {isError && <p className="text-red-500">Failed to load cars</p>}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  width={400}
                  height={300}
                  className="h-[200px] w-full object-cover"
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
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {car.category} • {car.year}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">${car.price ? car.price.toLocaleString() : 0}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Fuel className="mr-1 h-4 w-4" />
                    {car.fuelType}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Settings className="mr-1 h-4 w-4" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    {car.mileage === 0 ? "New" : `${car.mileage.toLocaleString()} miles`}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={car.link} className="w-full">
                  <Button variant="default" className="w-full">
                    Xem chi tiết
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>

  );
}
