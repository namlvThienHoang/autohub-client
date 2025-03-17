"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Filter, Grid3X3, List, Fuel, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Sample car data
const carsData = [
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

export default function CategoriesPage() {
    const searchParams = useSearchParams()
    const initialType = searchParams.get("type") || ""

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>(initialType)
    const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000])
    const [sortOption, setSortOption] = useState("featured")
    const [filteredCars, setFilteredCars] = useState(carsData)

    // Apply filters and sorting
    useEffect(() => {
        let result = [...carsData]

        // Apply search filter
        if (searchTerm) {
            result = result.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        // Apply category filter
        if (selectedCategory) {
            result = result.filter((car) => car.category.toLowerCase() === selectedCategory.toLowerCase())
        }

        // Apply fuel type filter
        if (selectedFuelTypes.length > 0) {
            result = result.filter((car) => selectedFuelTypes.includes(car.fuelType))
        }

        // Apply price range filter
        result = result.filter((car) => car.price >= priceRange[0] && car.price <= priceRange[1])

        // Apply sorting
        switch (sortOption) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                result.sort((a, b) => b.price - a.price)
                break
            case "newest":
                result.sort((a, b) => b.year - a.year)
                break
            case "featured":
            default:
                result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                break
        }

        setFilteredCars(result)
    }, [searchTerm, selectedCategory, selectedFuelTypes, priceRange, sortOption])

    // Handle fuel type selection
    const handleFuelTypeChange = (fuelType: string) => {
        setSelectedFuelTypes((prev) =>
            prev.includes(fuelType) ? prev.filter((type) => type !== fuelType) : [...prev, fuelType],
        )
    }

    // Reset all filters
    const resetFilters = () => {
        setSearchTerm("")
        setSelectedCategory("")
        setSelectedFuelTypes([])
        setPriceRange([0, 150000])
        setSortOption("featured")
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Browse Cars</h1>
                    <p className="text-muted-foreground">Find your perfect car from our extensive collection</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="hidden md:flex">
                        <Input
                            placeholder="Search cars..."
                            className="w-[200px] lg:w-[300px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
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
                                <MobileFilters
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                    selectedFuelTypes={selectedFuelTypes}
                                    handleFuelTypeChange={handleFuelTypeChange}
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                    resetFilters={resetFilters}
                                />
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant={viewMode === "grid" ? "default" : "outline"}
                            size="icon"
                            onClick={() => setViewMode("grid")}
                        >
                            <Grid3X3 className="h-4 w-4" />
                            <span className="sr-only">Grid view</span>
                        </Button>
                        <Button
                            variant={viewMode === "list" ? "default" : "outline"}
                            size="icon"
                            onClick={() => setViewMode("list")}
                        >
                            <List className="h-4 w-4" />
                            <span className="sr-only">List view</span>
                        </Button>
                    </div>
                    <Select value={sortOption} onValueChange={setSortOption}>
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
                    <DesktopFilters
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedFuelTypes={selectedFuelTypes}
                        handleFuelTypeChange={handleFuelTypeChange}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        resetFilters={resetFilters}
                    />
                </div>
                <div className="md:col-span-3">
                    <div className="md:hidden">
                        <Input
                            placeholder="Search cars..."
                            className="mb-4"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {filteredCars.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <h3 className="text-xl font-semibold mb-2">No cars found</h3>
                            <p className="text-muted-foreground mb-6">Try adjusting your filters or search term</p>
                            <Button onClick={resetFilters}>Reset Filters</Button>
                        </div>
                    ) : viewMode === "grid" ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredCars.map((car) => (
                                <Card key={car.id} className="overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src={car.image || "/placeholder.svg"}
                                            alt={car.name}
                                            width={400}
                                            height={300}
                                            className="h-[200px] w-full object-cover"
                                        />
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
                    ) : (
                        <div className="space-y-6">
                            {filteredCars.map((car) => (
                                <div key={car.id} className="flex flex-col sm:flex-row border rounded-lg overflow-hidden">
                                    <div className="relative w-full sm:w-[200px] h-[200px]">
                                        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 p-4 flex flex-col">
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
                                        <div className="mt-auto pt-4">
                                            <Link href={car.link}>
                                                <Button variant="default">View Details</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

interface FiltersProps {
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    selectedFuelTypes: string[]
    handleFuelTypeChange: (fuelType: string) => void
    priceRange: [number, number]
    setPriceRange: (range: [number, number]) => void
    resetFilters: () => void
}

function DesktopFilters({
    selectedCategory,
    setSelectedCategory,
    selectedFuelTypes,
    handleFuelTypeChange,
    priceRange,
    setPriceRange,
    resetFilters,
}: FiltersProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                    <Slider
                        value={priceRange}
                        min={0}
                        max={150000}
                        step={1000}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex items-center justify-between">
                        <div className="text-sm">${priceRange[0].toLocaleString()}</div>
                        <div className="text-sm">${priceRange[1].toLocaleString()}</div>
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Car Type</h3>
                <div className="space-y-2">
                    {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id={`type-${type.toLowerCase()}`}
                                checked={selectedCategory === type.toLowerCase()}
                                onChange={() => setSelectedCategory(selectedCategory === type.toLowerCase() ? "" : type.toLowerCase())}
                                className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor={`type-${type.toLowerCase()}`}>{type}</Label>
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
                            <Checkbox
                                id={`fuel-${fuel.toLowerCase()}`}
                                checked={selectedFuelTypes.includes(fuel)}
                                onCheckedChange={() => handleFuelTypeChange(fuel)}
                            />
                            <Label htmlFor={`fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <Button className="w-full" onClick={resetFilters}>
                Reset Filters
            </Button>
        </div>
    )
}

function MobileFilters({
    selectedCategory,
    setSelectedCategory,
    selectedFuelTypes,
    handleFuelTypeChange,
    priceRange,
    setPriceRange,
    resetFilters,
}: FiltersProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                    <Slider
                        value={priceRange}
                        min={0}
                        max={150000}
                        step={1000}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex items-center justify-between">
                        <div className="text-sm">${priceRange[0].toLocaleString()}</div>
                        <div className="text-sm">${priceRange[1].toLocaleString()}</div>
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Car Type</h3>
                <div className="space-y-2">
                    {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id={`mobile-type-${type.toLowerCase()}`}
                                checked={selectedCategory === type.toLowerCase()}
                                onChange={() => setSelectedCategory(selectedCategory === type.toLowerCase() ? "" : type.toLowerCase())}
                                className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor={`mobile-type-${type.toLowerCase()}`}>{type}</Label>
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
                            <Checkbox
                                id={`mobile-fuel-${fuel.toLowerCase()}`}
                                checked={selectedFuelTypes.includes(fuel)}
                                onCheckedChange={() => handleFuelTypeChange(fuel)}
                            />
                            <Label htmlFor={`mobile-fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 mt-6">
                <Button className="flex-1" onClick={resetFilters}>
                    Reset Filters
                </Button>
            </div>
        </div>
    )
}

