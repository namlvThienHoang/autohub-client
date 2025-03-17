import { NextResponse } from "next/server";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Business Owner",
        content:
            "AutoHub made finding my dream car so easy. The filtering options helped me narrow down exactly what I wanted, and the detailed specifications gave me confidence in my purchase.",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Software Engineer",
        content:
            "I was impressed by how smooth the entire process was. From browsing to test drive scheduling and finally purchasing, everything was seamless. Highly recommend!",
        avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        content:
            "The comparison feature was a game-changer for me. Being able to see different models side by side made my decision much easier. The customer service was exceptional too.",
        avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=random",
        rating: 4,
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Financial Analyst",
        content:
            "As someone who values efficiency, I appreciated how straightforward the buying process was. The financing calculator helped me understand exactly what I could afford.",
        avatar: "https://ui-avatars.com/api/?name=David+Thompson&background=random",
        rating: 5,
    },
];

export async function GET() {
    return NextResponse.json(testimonials);
}
