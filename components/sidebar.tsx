"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Car,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Filter,
  Fuel,
  Heart,
  Home,
  Menu,
  Moon,
  Search,
  Settings,
  ShoppingCart,
  Sun,
  User,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const [openCategories, setOpenCategories] = useState(true)
  const [openFilters, setOpenFilters] = useState(true)
  const [openDashboard, setOpenDashboard] = useState(true)

  return (
    <>
      {/* Mobile Sidebar Trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Car className="h-6 w-6" />
                <span className="text-xl font-bold">AutoHub</span>
              </Link>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <MobileSidebarContent pathname={pathname} setIsOpen={setIsOpen} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r bg-background">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">AutoHub</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-4 px-3">
            <div className="space-y-6">
              {/* Car Categories */}
              <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                  <div className="flex items-center">
                    <Car className="mr-2 h-4 w-4" />
                    <span>Car Categories</span>
                  </div>
                  {openCategories ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pt-1">
                  {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((category) => (
                    <Link
                      key={category}
                      href={`/categories/${category.toLowerCase()}`}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                        pathname === `/categories/${category.toLowerCase()}`
                          ? "bg-muted font-medium"
                          : "text-muted-foreground",
                      )}
                    >
                      <span className="ml-6">{category}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Quick Filters */}
              <Collapsible open={openFilters} onOpenChange={setOpenFilters}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>Quick Filters</span>
                  </div>
                  {openFilters ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pt-1">
                  <Link
                    href="/filters/price-range"
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                      pathname === "/filters/price-range" ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    <span>Price Range</span>
                  </Link>
                  <Link
                    href="/filters/brand"
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                      pathname === "/filters/brand" ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    <span className="ml-6">Brand</span>
                  </Link>
                  <Link
                    href="/filters/fuel-type"
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                      pathname === "/filters/fuel-type" ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    <Fuel className="mr-2 h-4 w-4" />
                    <span>Fuel Type</span>
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              {/* User Dashboard */}
              <Collapsible open={openDashboard} onOpenChange={setOpenDashboard}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>User Dashboard</span>
                  </div>
                  {openDashboard ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pt-1">
                  <Link
                    href="/wishlist"
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                      pathname === "/wishlist" ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Wishlist</span>
                  </Link>
                  <Link
                    href="/profile/orders"
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                      pathname === "/profile/orders" ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    <span>Orders</span>
                  </Link>
                  <Link
                    href="/profile/settings"
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                      pathname === "/profile/settings" ? "bg-muted font-medium" : "text-muted-foreground",
                    )}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Separator />

              {/* Main Navigation */}
              <div className="space-y-1">
                <Link
                  href="/"
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                    pathname === "/" ? "bg-muted font-medium" : "text-muted-foreground",
                  )}
                >
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/cars"
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                    pathname === "/cars" ? "bg-muted font-medium" : "text-muted-foreground",
                  )}
                >
                  <Car className="mr-2 h-4 w-4" />
                  <span>Browse Cars</span>
                </Link>
                <Link
                  href="/cart"
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                    pathname === "/cart" ? "bg-muted font-medium" : "text-muted-foreground",
                  )}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span>Cart</span>
                </Link>
              </div>

              <Separator />

              {/* Search */}
              <div className="px-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search cars..."
                    className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <Separator />

              {/* Theme Toggle */}
              <div className="px-3">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  <div className="flex items-center">
                    {theme === "dark" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                    <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                  </div>
                  <div className="h-4 w-8 rounded-full bg-muted p-1">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full bg-foreground transition-transform",
                        theme === "dark" ? "translate-x-3" : "translate-x-0",
                      )}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function MobileSidebarContent({ pathname, setIsOpen }) {
  const [openCategories, setOpenCategories] = useState(true)
  const [openFilters, setOpenFilters] = useState(true)
  const [openDashboard, setOpenDashboard] = useState(true)
  const { setTheme, theme } = useTheme()

  return (
    <div className="space-y-6 px-3">
      {/* Main Navigation */}
      <div className="space-y-1">
        <Link
          href="/"
          className={cn(
            "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
            pathname === "/" ? "bg-muted font-medium" : "text-muted-foreground",
          )}
          onClick={() => setIsOpen(false)}
        >
          <Home className="mr-2 h-4 w-4" />
          <span>Home</span>
        </Link>
        <Link
          href="/cars"
          className={cn(
            "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
            pathname === "/cars" ? "bg-muted font-medium" : "text-muted-foreground",
          )}
          onClick={() => setIsOpen(false)}
        >
          <Car className="mr-2 h-4 w-4" />
          <span>Browse Cars</span>
        </Link>
        <Link
          href="/cart"
          className={cn(
            "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
            pathname === "/cart" ? "bg-muted font-medium" : "text-muted-foreground",
          )}
          onClick={() => setIsOpen(false)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          <span>Cart</span>
        </Link>
      </div>

      <Separator />

      {/* Car Categories */}
      <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
          <div className="flex items-center">
            <Car className="mr-2 h-4 w-4" />
            <span>Car Categories</span>
          </div>
          {openCategories ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pt-1">
          {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
                pathname === `/categories/${category.toLowerCase()}` ? "bg-muted font-medium" : "text-muted-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="ml-6">{category}</span>
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Quick Filters */}
      <Collapsible open={openFilters} onOpenChange={setOpenFilters}>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
          <div className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            <span>Quick Filters</span>
          </div>
          {openFilters ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pt-1">
          <Link
            href="/filters/price-range"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
              pathname === "/filters/price-range" ? "bg-muted font-medium" : "text-muted-foreground",
            )}
            onClick={() => setIsOpen(false)}
          >
            <DollarSign className="mr-2 h-4 w-4" />
            <span>Price Range</span>
          </Link>
          <Link
            href="/filters/brand"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
              pathname === "/filters/brand" ? "bg-muted font-medium" : "text-muted-foreground",
            )}
            onClick={() => setIsOpen(false)}
          >
            <span className="ml-6">Brand</span>
          </Link>
          <Link
            href="/filters/fuel-type"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
              pathname === "/filters/fuel-type" ? "bg-muted font-medium" : "text-muted-foreground",
            )}
            onClick={() => setIsOpen(false)}
          >
            <Fuel className="mr-2 h-4 w-4" />
            <span>Fuel Type</span>
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* User Dashboard */}
      <Collapsible open={openDashboard} onOpenChange={setOpenDashboard}>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>User Dashboard</span>
          </div>
          {openDashboard ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pt-1">
          <Link
            href="/wishlist"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
              pathname === "/wishlist" ? "bg-muted font-medium" : "text-muted-foreground",
            )}
            onClick={() => setIsOpen(false)}
          >
            <Heart className="mr-2 h-4 w-4" />
            <span>Wishlist</span>
          </Link>
          <Link
            href="/profile/orders"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
              pathname === "/profile/orders" ? "bg-muted font-medium" : "text-muted-foreground",
            )}
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span>Orders</span>
          </Link>
          <Link
            href="/profile/settings"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted",
              pathname === "/profile/settings" ? "bg-muted font-medium" : "text-muted-foreground",
            )}
            onClick={() => setIsOpen(false)}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      {/* Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search cars..."
            className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      <Separator />

      {/* Theme Toggle */}
      <div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <div className="flex items-center">
            {theme === "dark" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
            <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
          </div>
          <div className="h-4 w-8 rounded-full bg-muted p-1">
            <div
              className={cn(
                "h-2 w-2 rounded-full bg-foreground transition-transform",
                theme === "dark" ? "translate-x-3" : "translate-x-0",
              )}
            />
          </div>
        </button>
      </div>
    </div>
  )
}

