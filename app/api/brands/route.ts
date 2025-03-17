import { NextResponse } from "next/server"

export async function GET() {
    const brands = [
        { id: 1, name: "BMW", logo: "https://logo.clearbit.com/bmw.com", link: "/brands/bmw" },
        { id: 2, name: "Mercedes-Benz", logo: "https://logo.clearbit.com/mercedes-benz.com", link: "/brands/mercedes-benz" },
        { id: 3, name: "Audi", logo: "https://logo.clearbit.com/audi.com", link: "/brands/audi" },
        { id: 4, name: "Tesla", logo: "https://logo.clearbit.com/tesla.com", link: "/brands/tesla" },
        { id: 5, name: "Porsche", logo: "https://logo.clearbit.com/porsche.com", link: "/brands/porsche" },
        { id: 6, name: "Toyota", logo: "https://logo.clearbit.com/toyota.com", link: "/brands/toyota" },
        { id: 7, name: "Honda", logo: "https://logo.clearbit.com/honda.com", link: "/brands/honda" },
        { id: 8, name: "Ford", logo: "https://logo.clearbit.com/ford.com", link: "/brands/ford" },
        { id: 9, name: "Nissan", logo: "https://logo.clearbit.com/nissan.com", link: "/brands/nissan" },
        { id: 10, name: "Lexus", logo: "https://logo.clearbit.com/lexus.com", link: "/brands/lexus" },
        { id: 11, name: "Chevrolet", logo: "https://logo.clearbit.com/chevrolet.com", link: "/brands/chevrolet" },
        { id: 12, name: "Hyundai", logo: "https://logo.clearbit.com/hyundai.com", link: "/brands/hyundai" },
        { id: 13, name: "Mazda", logo: "https://logo.clearbit.com/mazda.com", link: "/brands/mazda" },
        { id: 14, name: "Subaru", logo: "https://logo.clearbit.com/subaru.com", link: "/brands/subaru" },
        { id: 15, name: "Volkswagen", logo: "https://logo.clearbit.com/volkswagen.com", link: "/brands/volkswagen" },
        { id: 16, name: "Kia", logo: "https://logo.clearbit.com/kia.com", link: "/brands/kia" },
        { id: 17, name: "Jaguar", logo: "https://logo.clearbit.com/jaguar.com", link: "/brands/jaguar" },
        { id: 18, name: "Ferrari", logo: "https://logo.clearbit.com/ferrari.com", link: "/brands/ferrari" },
        { id: 19, name: "Lamborghini", logo: "https://logo.clearbit.com/lamborghini.com", link: "/brands/lamborghini" },
        { id: 20, name: "Bugatti", logo: "https://logo.clearbit.com/bugatti.com", link: "/brands/bugatti" },
    ]

    return NextResponse.json(brands)
}
