import { NextResponse } from "next/server";

const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const cars = [
    {
        id: "1",
        name: "Tesla Model S",
        price: 89990,
        year: 2023,
        fuel: "Electric",
        transmission: "Automatic",
        seats: 5,
        range: "405 miles",
        acceleration: "1.99s 0-60 mph",
        topSpeed: "200 mph",
        power: "1,020 hp",
        description: "The Tesla Model S is an all-electric sedan with a sleek design and impressive performance.",
        images: ["/cars/tesla-model-s-1.jpg", "/cars/tesla-model-s-2.jpg"],
    },
    {
        id: "2",
        name: "BMW i4",
        price: 55000,
        year: 2023,
        fuel: "Electric",
        transmission: "Automatic",
        seats: 5,
        range: "300 miles",
        acceleration: "3.7s 0-60 mph",
        topSpeed: "140 mph",
        power: "536 hp",
        description: "BMW i4 is a premium electric car with dynamic driving performance and luxurious comfort.",
        images: ["/cars/bmw-i4-1.jpg", "/cars/bmw-i4-2.jpg"],
    },
];

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const car = cars.find((c) => c.id === params.id);
    if (!car) {
        return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    try {
        const searchQuery = encodeURIComponent(car.name);
        const unsplashURL = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${ACCESS_KEY}&per_page=3`;

        const res = await fetch(unsplashURL);
        const data = await res.json();

        const imagesFromUnsplash = data.results
            .slice(0, 3)
            .map((img: any) => img.urls.regular) || [];

        const carWithImages = {
            ...car,
            images: imagesFromUnsplash.length > 0 ? imagesFromUnsplash : car.images,
        };

        return NextResponse.json(carWithImages);
    } catch (error) {
        console.error(`Error fetching image for ${car.name}:`, error);
        return NextResponse.json({ ...car, image: car.images[0] || "/placeholder.svg" });
    }
}
