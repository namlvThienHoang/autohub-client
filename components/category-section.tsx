import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Sedan",
    image: "/placeholder.svg?height=300&width=400",
    count: 48,
    link: "/categories/sedan",
  },
  {
    id: 2,
    name: "SUV",
    image: "/placeholder.svg?height=300&width=400",
    count: 64,
    link: "/categories/suv",
  },
  {
    id: 3,
    name: "Electric",
    image: "/placeholder.svg?height=300&width=400",
    count: 32,
    link: "/categories/electric",
  },
  {
    id: 4,
    name: "Luxury",
    image: "/placeholder.svg?height=300&width=400",
    count: 24,
    link: "/categories/luxury",
  },
  {
    id: 5,
    name: "Sports",
    image: "/placeholder.svg?height=300&width=400",
    count: 16,
    link: "/categories/sports",
  },
  {
    id: 6,
    name: "Hybrid",
    image: "/placeholder.svg?height=300&width=400",
    count: 28,
    link: "/categories/hybrid",
  },
]

export default function CategorySection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {categories.map((category) => (
        <Link key={category.id} href={category.link} className="group">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <span className="text-sm text-muted-foreground">{category.count} cars</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

