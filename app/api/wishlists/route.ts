import { NextResponse } from "next/server";

const cars = [
    {
        id: 1,
        name: "Tesla Model S",
        price: 89990,
        image: "https://source.unsplash.com/400x300/?tesla",
        category: "Electric",
        year: 2023,
        mileage: 15000,
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
        mileage: 12000,
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
        mileage: 18000,
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
        mileage: 10000,
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
        mileage: 5000,
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
        mileage: 22000,
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
        mileage: 14000,
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
        mileage: 18000,
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
        mileage: 12000,
        fuelType: "Petrol",
        transmission: "Manual",
        seats: 4,
        featured: false,
        link: "/cars/ford-mustang",
    },
    {
        id: 10,
        name: "Chevrolet Corvette",
        price: 69990,
        image: "/placeholder.svg?height=300&width=400",
        category: "Sports",
        year: 2023,
        mileage: 9000,
        fuelType: "Petrol",
        transmission: "Automatic",
        seats: 2,
        featured: true,
        link: "/cars/chevrolet-corvette",
    },
    {
        id: 11,
        name: "Nissan GT-R",
        price: 99990,
        image: "/placeholder.svg?height=300&width=400",
        category: "Sports",
        year: 2023,
        mileage: 6000,
        fuelType: "Petrol",
        transmission: "Automatic",
        seats: 2,
        featured: true,
        link: "/cars/nissan-gt-r",
    },
    {
        id: 12,
        name: "Subaru Outback",
        price: 36990,
        image: "/placeholder.svg?height=300&width=400",
        category: "SUV",
        year: 2023,
        mileage: 25000,
        fuelType: "Petrol",
        transmission: "Automatic",
        seats: 5,
        featured: false,
        link: "/cars/subaru-outback",
    },
    {
        id: 13,
        name: "Mazda CX-5",
        price: 29990,
        image: "/placeholder.svg?height=300&width=400",
        category: "SUV",
        year: 2023,
        mileage: 20000,
        fuelType: "Petrol",
        transmission: "Automatic",
        seats: 5,
        featured: false,
        link: "/cars/mazda-cx-5",
    },
    {
        id: 14,
        name: "Hyundai Sonata",
        price: 27990,
        image: "/placeholder.svg?height=300&width=400",
        category: "Sedan",
        year: 2023,
        mileage: 16000,
        fuelType: "Hybrid",
        transmission: "Automatic",
        seats: 5,
        featured: false,
        link: "/cars/hyundai-sonata",
    },
    {
        id: 15,
        name: "Kia Sportage",
        price: 28990,
        image: "/placeholder.svg?height=300&width=400",
        category: "SUV",
        year: 2023,
        mileage: 21000,
        fuelType: "Hybrid",
        transmission: "Automatic",
        seats: 5,
        featured: false,
        link: "/cars/kia-sportage",
    }
];


const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export async function GET() {
    try {
        const updatedCars = await Promise.all(
            cars.map(async (car) => {
                const searchQuery = encodeURIComponent(car.name); // Mã hóa tên xe để đưa vào URL
                const unsplashURL = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${ACCESS_KEY}&per_page=1`;

                try {
                    const res = await fetch(unsplashURL);
                    const data = await res.json();
                    return {
                        ...car,
                        image: data.results[0]?.urls.regular || "/placeholder.svg",
                    };
                } catch (error) {
                    console.error(`Error fetching image for ${car.name}:`, error);
                    return { ...car, image: "/placeholder.svg" };
                }
            })
        );

        return NextResponse.json(updatedCars);
    } catch (error) {
        console.error("Error fetching images:", error);
        return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
    }
}
