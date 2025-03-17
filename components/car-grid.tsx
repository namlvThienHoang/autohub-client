import Link from "next/link"
import Image from "next/image"
import { Fuel, Heart, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: 89990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Electric",
    year: 2023,
    mileage: 0,
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 5,
    featured: true,
    link: "/cars/tesla-model-s",
  },
  {
    id: 2,
    name: "BMW 5 Series",
    price: 54990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Sedan",
    year: 2023,
    mileage: 0,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    featured: true,
    link: "/cars/bmw-5-series",
  },
  {
    id: 3,
    name: "Mercedes-Benz GLE",
    price: 64990,
    image: "/placeholder.svg?height=300&width=400",
    category: "SUV",
    year: 2023,
    mileage: 0,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 7,
    featured: true,
    link: "/cars/mercedes-benz-gle",
  },
  {
    id: 4,
    name: "Audi e-tron GT",
    price: 99990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Electric",
    year: 2023,
    mileage: 0,
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 4,
    featured: true,
    link: "/cars/audi-e-tron-gt",
  },
  {
    id: 5,
    name: "Porsche 911",
    price: 114990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Sports",
    year: 2023,
    mileage: 0,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 2,
    featured: true,
    link: "/cars/porsche-911",
  },
  {
    id: 6,
    name: "Range Rover Sport",
    price: 79990,
    image: "/placeholder.svg?height=300&width=400",
    category: "SUV",
    year: 2023,
    mileage: 0,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 5,
    featured: true,
    link: "/cars/range-rover-sport",
  },
  {
    id: 7,
    name: "Toyota Camry",
    price: 34990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Sedan",
    year: 2023,
    mileage: 0,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    featured: false,
    link: "/cars/toyota-camry",
  },
  {
    id: 8,
    name: "Honda Civic",
    price: 24990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Sedan",
    year: 2023,
    mileage: 0,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    featured: false,
    link: "/cars/honda-civic",
  },
  {
    id: 9,
    name: "Ford Mustang",
    price: 44990,
    image: "/placeholder.svg?height=300&width=400",
    category: "Sports",
    year: 2023,
    mileage: 0,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 4,
    featured: false,
    link: "/cars/ford-mustang",
  },
]

export default function CarGrid() {
  return (
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
                <p className="font-bold text-lg">${car.price.toLocaleString()}</p>
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
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

