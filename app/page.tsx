import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import FeaturedCars from "@/components/featured-cars"
import TestimonialSlider from "@/components/testimonial-slider"
import BrandSlider from "@/components/brand-slider"

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Browse by Category</h2>
            <p className="mt-2 text-muted-foreground">
              Find your perfect ride by exploring our diverse car categories
            </p>
          </div>
          <Link href="/cars" className="flex items-center text-primary hover:underline">
            View all categories
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <CategorySection />
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Cars</h2>
            <p className="mt-2 text-muted-foreground">Explore our handpicked selection of premium vehicles</p>
          </div>
          <Link href="/cars" className="flex items-center text-primary hover:underline">
            View all cars
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <FeaturedCars />
      </section>

      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Hear from our satisfied customers about their experience with AutoHub
            </p>
          </div>
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Trusted Brands</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            We partner with the world's leading automotive manufacturers
          </p>
        </div>
        <div className="mt-12">
          <BrandSlider />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stay Updated</h2>
              <p className="mt-4 text-primary-foreground/90">
                Subscribe to our newsletter to receive the latest updates on new car models, exclusive offers, and
                automotive news.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <form className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground text-primary"
                  required
                />
                <Button variant="secondary" type="submit">
                  Subscribe
                </Button>
              </form>
              <p className="mt-2 text-sm text-primary-foreground/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

