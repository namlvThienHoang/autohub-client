"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Fuel, Grid3X3, List, Settings, ShoppingCart, Trash2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Sidebar from "@/components/sidebar"
import EmptyWishlist from "@/components/empty-wishlist"
import { toast } from "sonner"
import MobileFilters from "@/components/mobile-filters"
import DesktopFilters from "@/components/desktop-filters"
import WishlistGridItem from "@/components/wishlist-grid-item"
import WishlistListItem from "@/components/wishlist-list-item"

// Sample wishlist data
const initialWishlistItems = [
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
        dateAdded: "2023-11-15T10:30:00Z",
        inStock: true,
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
        dateAdded: "2023-11-10T14:45:00Z",
        inStock: true,
        link: "/cars/bmw-5-series",
    },
    {
        id: 3,
        name: "Porsche 911",
        price: 114990,
        image: "/placeholder.svg?height=300&width=400",
        category: "Sports",
        year: 2023,
        mileage: 0,
        fuelType: "Petrol",
        transmission: "Automatic",
        seats: 2,
        dateAdded: "2023-11-05T09:15:00Z",
        inStock: true,
        link: "/cars/porsche-911",
    },
    {
        id: 4,
        name: "Mercedes-Benz GLE",
        price: 64990,
        image: "/placeholder.svg?height=300&width=400",
        category: "SUV",
        year: 2023,
        mileage: 0,
        fuelType: "Petrol",
        transmission: "Automatic",
        seats: 7,
        dateAdded: "2023-10-28T16:20:00Z",
        inStock: false,
        link: "/cars/mercedes-benz-gle",
    },
    {
        id: 5,
        name: "Audi e-tron GT",
        price: 99990,
        image: "/placeholder.svg?height=300&width=400",
        category: "Electric",
        year: 2023,
        mileage: 0,
        fuelType: "Electric",
        transmission: "Automatic",
        seats: 4,
        dateAdded: "2023-10-20T11:10:00Z",
        inStock: true,
        link: "/cars/audi-e-tron-gt",
    },
]

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [sortOption, setSortOption] = useState("date-desc")
    const [searchQuery, setSearchQuery] = useState("")
    const [filters, setFilters] = useState({
        categories: [] as string[],
        priceRange: [] as string[],
        fuelTypes: [] as string[],
        brands: [] as string[],
        transmissions: [] as string[],
    })

    // Filter and sort wishlist items
    const filteredItems = wishlistItems.filter((item) => {
        // Search filter
        if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false
        }

        // Category filter
        if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
            return false
        }

        // Fuel type filter
        if (filters.fuelTypes.length > 0 && !filters.fuelTypes.includes(item.fuelType)) {
            return false
        }

        // Price range filter
        if (filters.priceRange.length > 0) {
            const inPriceRange = filters.priceRange.some((range) => {
                if (range === "under-50000") return item.price < 50000
                if (range === "50000-80000") return item.price >= 50000 && item.price < 80000
                if (range === "80000-100000") return item.price >= 80000 && item.price < 100000
                if (range === "over-100000") return item.price >= 100000
                return false
            })
            if (!inPriceRange) return false
        }

        return true
    })

    // Sort filtered items
    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortOption) {
            case "price-asc":
                return a.price - b.price
            case "price-desc":
                return b.price - a.price
            case "name-asc":
                return a.name.localeCompare(b.name)
            case "name-desc":
                return b.name.localeCompare(a.name)
            case "date-asc":
                return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
            case "date-desc":
            default:
                return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        }
    })

    // Handle item selection
    const toggleItemSelection = (id: number) => {
        setSelectedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
    }

    // Select all items
    const toggleSelectAll = () => {
        if (selectedItems.length === sortedItems.length) {
            setSelectedItems([])
        } else {
            setSelectedItems(sortedItems.map((item) => item.id))
        }
    }

    // Remove item from wishlist
    const removeFromWishlist = (id: number) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id))
        setSelectedItems((prev) => prev.filter((itemId) => itemId !== id))
        toast("Item removed", {
            description: "The item has been removed from your wishlist.",
        })
    }

    // Remove selected items
    const removeSelectedItems = () => {
        setWishlistItems((prev) => prev.filter((item) => !selectedItems.includes(item.id)))
        toast("Items removed", {
            description: `${selectedItems.length} item(s) have been removed from your wishlist.`,
        })
        setSelectedItems([])
    }

    // Add item to cart
    const addToCart = (id: number) => {
        // In a real app, this would add the item to the cart
        toast("Added to cart", {
            description: "The item has been added to your cart.",
        })
    }

    // Add selected items to cart
    const addSelectedToCart = () => {
        // In a real app, this would add the selected items to the cart
        toast("Items added to cart", {
            description: `${selectedItems.length} item(s) have been added to your cart.`,
        })
        setSelectedItems([])
    }

    // Toggle filter
    const toggleFilter = (filterType: keyof typeof filters, value: string) => {
        setFilters((prev) => {
            const currentFilters = prev[filterType]
            return {
                ...prev,
                [filterType]: currentFilters.includes(value)
                    ? currentFilters.filter((v) => v !== value)
                    : [...currentFilters, value],
            }
        })
    }

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            categories: [],
            priceRange: [],
            fuelTypes: [],
            brands: [],
            transmissions: [],
        })
        setSearchQuery("")
    }

    return (
        <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">My Wishlist</h1>
                        <p className="text-muted-foreground">
                            {wishlistItems.length} {wishlistItems.length === 1 ? "car" : "cars"} saved to your wishlist
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="hidden md:flex">
                            <Input
                                placeholder="Search wishlist..."
                                className="w-[200px] lg:w-[300px]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                                    <SheetDescription>Filter your wishlist items</SheetDescription>
                                </SheetHeader>
                                <div className="py-4">
                                    <MobileFilters filters={filters} toggleFilter={toggleFilter} clearFilters={clearFilters} />
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setViewMode("grid")}
                                className={viewMode === "grid" ? "bg-muted" : ""}
                            >
                                <Grid3X3 className="h-4 w-4" />
                                <span className="sr-only">Grid view</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setViewMode("list")}
                                className={viewMode === "list" ? "bg-muted" : ""}
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
                                <SelectItem value="date-desc">Date Added (Newest)</SelectItem>
                                <SelectItem value="date-asc">Date Added (Oldest)</SelectItem>
                                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                                <SelectItem value="name-desc">Name: Z to A</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {wishlistItems.length === 0 ? (
                    <EmptyWishlist />
                ) : (
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="hidden md:block">
                            <DesktopFilters filters={filters} toggleFilter={toggleFilter} clearFilters={clearFilters} />
                        </div>
                        <div className="md:col-span-3">
                            <div className="md:hidden">
                                <Input
                                    placeholder="Search wishlist..."
                                    className="mb-4"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Bulk Actions */}
                            {selectedItems.length > 0 && (
                                <div className="mb-4 flex items-center justify-between rounded-lg border bg-background p-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="select-all"
                                            checked={selectedItems.length === sortedItems.length}
                                            onCheckedChange={toggleSelectAll}
                                        />
                                        <Label htmlFor="select-all" className="text-sm">
                                            {selectedItems.length} {selectedItems.length === 1 ? "item" : "items"} selected
                                        </Label>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={removeSelectedItems}
                                            className="text-destructive hover:bg-destructive/10"
                                        >
                                            <Trash2 className="mr-1 h-4 w-4" />
                                            Remove
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={addSelectedToCart}>
                                            <ShoppingCart className="mr-1 h-4 w-4" />
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {sortedItems.length === 0 ? (
                                <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
                                    <p className="text-muted-foreground">No items match your filters</p>
                                    <Button variant="link" onClick={clearFilters} className="mt-2">
                                        Clear all filters
                                    </Button>
                                </div>
                            ) : viewMode === "grid" ? (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {sortedItems.map((item) => (
                                        <WishlistGridItem
                                            key={item.id}
                                            item={item}
                                            isSelected={selectedItems.includes(item.id)}
                                            onSelect={() => toggleItemSelection(item.id)}
                                            onRemove={() => removeFromWishlist(item.id)}
                                            onAddToCart={() => addToCart(item.id)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {sortedItems.map((item) => (
                                        <WishlistListItem
                                            key={item.id}
                                            item={item}
                                            isSelected={selectedItems.includes(item.id)}
                                            onSelect={() => toggleItemSelection(item.id)}
                                            onRemove={() => removeFromWishlist(item.id)}
                                            onAddToCart={() => addToCart(item.id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

