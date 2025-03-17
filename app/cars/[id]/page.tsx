import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Heart,
  Settings,
  Share2,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CarDetailsPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/cars" className="flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cars
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Tesla Model S"
                  fill
                  className="object-cover"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-muted-foreground hover:bg-white"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-muted-foreground hover:bg-white"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
            <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Tesla Model S thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="mt-8">
              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview" className="flex-1">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="specifications" className="flex-1">
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">
                    Features
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Tesla Model S</h2>
                    <p>
                      The Tesla Model S is an all-electric five-door liftback sedan produced by Tesla, Inc. The Model
                      S features a dual-motor, all-wheel drive layout, and a sleek, aerodynamic design that helps
                      maximize efficiency and range.
                    </p>
                    <p>
                      With its cutting-edge technology, impressive performance, and zero emissions, the Model S
                      represents the future of automotive transportation. The vehicle offers exceptional acceleration,
                      handling, and a spacious, luxurious interior that comfortably accommodates five adults.
                    </p>
                    <p>
                      The Model S comes equipped with Tesla's advanced Autopilot system, which includes features like
                      traffic-aware cruise control, automatic lane changing, and self-parking capabilities. The
                      vehicle also receives regular over-the-air software updates, ensuring that it continues to
                      improve and gain new features over time.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="mt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Specification</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Range</TableCell>
                        <TableCell>Up to 405 miles (EPA est.)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Acceleration</TableCell>
                        <TableCell>0-60 mph in 1.99 seconds</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Top Speed</TableCell>
                        <TableCell>200 mph</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Peak Power</TableCell>
                        <TableCell>1,020 hp</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Wheels</TableCell>
                        <TableCell>19" or 21" wheels</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Weight</TableCell>
                        <TableCell>4,766 lbs</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cargo</TableCell>
                        <TableCell>28 cu ft</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Displays</TableCell>
                        <TableCell>17" center touchscreen, 12.3" driver display</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All-Glass Panoramic Roof</li>
                      <li>17" Touchscreen Display</li>
                      <li>Premium Audio System with 22 Speakers</li>
                      <li>Wireless Phone Charging</li>
                      <li>Enhanced Autopilot</li>
                      <li>Full Self-Driving Capability (optional)</li>
                      <li>Tri-Zone Climate Control</li>
                      <li>HEPA Air Filtration System</li>
                      <li>Heated Seats and Steering Wheel</li>
                      <li>Ambient Lighting</li>
                      <li>Over-the-Air Software Updates</li>
                      <li>Supercharger Access</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex justify-between">
                <h2 className="text-2xl font-bold">$89,990</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Electric</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Automatic</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>5 Seats</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold">Key Specifications</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Range</span>
                      <span>405 miles</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Acceleration</span>
                      <span>1.99s 0-60 mph</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Top Speed</span>
                      <span>200 mph</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Peak Power</span>
                      <span>1,020 hp</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div className="space-y-4">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request a Test Drive
                  </Button>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="financing">
                    <AccordionTrigger>Financing Options</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm">Finance from $1,299/mo with $8,999 down for 72 months at 4.99% APR.</p>
                        <Button variant="link" className="h-auto p-0 text-sm">
                          Calculate your payment
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="warranty">
                    <AccordionTrigger>Warranty Information</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1 text-sm">
                        <li>Basic Vehicle: 4 years or 50,000 miles</li>
                        <li>Battery & Drive Unit: 8 years or 150,000 miles</li>
                        <li>Corrosion Perforation: 12 years, unlimited miles</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="delivery">
                    <AccordionTrigger>Delivery Information</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Estimated delivery: 4-6 weeks. Free delivery to your nearest service center.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

