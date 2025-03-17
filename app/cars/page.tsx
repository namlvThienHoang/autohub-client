import { Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CarGrid from "@/components/car-grid"

export default function CarsPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Browse Cars</h1>
            <p className="text-muted-foreground">Find your perfect car from our extensive collection</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex">
              <Input placeholder="Search cars..." className="w-[200px] lg:w-[300px]" />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down your car search with filters</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <MobileFilters />
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Grid3X3 className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="hidden md:block">
            <DesktopFilters />
          </div>
          <div className="md:col-span-3">
            <div className="md:hidden">
              <Input placeholder="Search cars..." className="mb-4" />
            </div>
            <CarGrid />
          </div>
        </div>
      </div>
    </main>
  )
}

function DesktopFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[20000, 80000]} min={0} max={150000} step={1000} />
          <div className="flex items-center justify-between">
            <Input type="number" placeholder="Min" className="w-[45%]" />
            <span className="text-muted-foreground">to</span>
            <Input type="number" placeholder="Max" className="w-[45%]" />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Car Type</h3>
        <div className="space-y-2">
          {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`type-${type.toLowerCase()}`} />
              <Label htmlFor={`type-${type.toLowerCase()}`}>{type}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Brand</h3>
        <div className="space-y-2">
          {["BMW", "Mercedes-Benz", "Audi", "Tesla", "Toyota", "Honda", "Ford", "Porsche"].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={`brand-${brand.toLowerCase().replace(" ", "-")}`} />
              <Label htmlFor={`brand-${brand.toLowerCase().replace(" ", "-")}`}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Fuel Type</h3>
        <div className="space-y-2">
          {["Petrol", "Diesel", "Electric", "Hybrid"].map((fuel) => (
            <div key={fuel} className="flex items-center space-x-2">
              <Checkbox id={`fuel-${fuel.toLowerCase()}`} />
              <Label htmlFor={`fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Transmission</h3>
        <div className="space-y-2">
          {["Automatic", "Manual"].map((transmission) => (
            <div key={transmission} className="flex items-center space-x-2">
              <Checkbox id={`transmission-${transmission.toLowerCase()}`} />
              <Label htmlFor={`transmission-${transmission.toLowerCase()}`}>{transmission}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Year</h3>
        <div className="space-y-2">
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Select year from" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              {[2023, 2022, 2021, 2020, 2019].map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-full">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  )
}

function MobileFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[20000, 80000]} min={0} max={150000} step={1000} />
          <div className="flex items-center justify-between">
            <Input type="number" placeholder="Min" className="w-[45%]" />
            <span className="text-muted-foreground">to</span>
            <Input type="number" placeholder="Max" className="w-[45%]" />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Car Type</h3>
        <div className="space-y-2">
          {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`mobile-type-${type.toLowerCase()}`} />
              <Label htmlFor={`mobile-type-${type.toLowerCase()}`}>{type}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Brand</h3>
        <div className="space-y-2">
          {["BMW", "Mercedes-Benz", "Audi", "Tesla", "Toyota", "Honda", "Ford", "Porsche"].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={`mobile-brand-${brand.toLowerCase().replace(" ", "-")}`} />
              <Label htmlFor={`mobile-brand-${brand.toLowerCase().replace(" ", "-")}`}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-4">Fuel Type</h3>
        <div className="space-y-2">
          {["Petrol", "Diesel", "Electric", "Hybrid"].map((fuel) => (
            <div key={fuel} className="flex items-center space-x-2">
              <Checkbox id={`mobile-fuel-${fuel.toLowerCase()}`} />
              <Label htmlFor={`mobile-fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <Button className="flex-1">Apply Filters</Button>
        <Button variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  )
}

