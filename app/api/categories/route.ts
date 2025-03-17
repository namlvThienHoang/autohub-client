import { NextResponse } from "next/server"

const categories = [
    {
        id: 1,
        name: "Sedan",
        image: "/images/compositor.jpg",
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
        image: "/images/mercedes/c-class.jpg",
        count: 24,
        link: "/categories/luxury",
    },
    {
        id: 5,
        name: "Sports",
        image: "/images/mercedes/iris.webp",
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

export async function GET() {
    return NextResponse.json(categories)
}
