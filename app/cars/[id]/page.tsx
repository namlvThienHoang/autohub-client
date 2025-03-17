"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCarDetails } from "@/hooks/use-car-detail";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarDetailsPage() {
  const { id } = useParams();
  const { car, isLoading, isError } = useCarDetails('2');

  return (
    <>
      {isLoading && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Skeleton className="h-[400px] w-full rounded-lg" />
              <Skeleton className="h-10 w-1/3 mt-4" />
              <Skeleton className="h-6 w-full mt-2" />
            </div>
            <div className="p-6 border rounded-lg">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-10 w-full mt-4" />
            </div>
          </div>
        </div>)}   {/* ✅ Hiển thị skeleton thay vì return sớm */}
      {isError && <p className="text-red-500">Car not found</p>}
      {!isLoading && !isError && (
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Link href="/cars" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cars
            </Link>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="relative h-[400px]">
                    <Image src={car.images[0]} alt={car.name} fill className="object-cover" />
                  </div>
                  <Button className="absolute left-4 top-1/2 -translate-y-1/2"> <ChevronLeft /> </Button>
                  <Button className="absolute right-4 top-1/2 -translate-y-1/2"> <ChevronRight /> </Button>
                </div>

                <Tabs defaultValue="overview" className="mt-6">
                  <TabsList className="w-full">
                    <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                    <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <h2 className="text-2xl font-bold">{car.name}</h2>
                    <p>{car.description}</p>
                  </TabsContent>

                  <TabsContent value="specifications" className="mt-6">
                    <p>Range: {car.range}</p>
                    <p>Acceleration: {car.acceleration}</p>
                    <p>Top Speed: {car.topSpeed}</p>
                    <p>Power: {car.power}</p>
                  </TabsContent>
                </Tabs>
              </div>



              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-2xl font-bold">${car.price}</h2>
                <Button className="w-full mt-4"> <ShoppingCart className="mr-2" /> Add to Cart</Button>
                <Button variant="outline" className="w-full mt-2"> <Heart className="mr-2" /> Add to Wishlist</Button>
                <Button variant="outline" className="w-full mt-2"> <Share2 className="mr-2" /> Share</Button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>

  );
}
