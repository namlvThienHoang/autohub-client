import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function EmptyWishlist() {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-6">
                <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground max-w-md mb-6">
                Save your favorite cars to your wishlist to keep track of them and quickly add them to your cart when you're
                ready to purchase.
            </p>
            <Button asChild>
                <Link href="/cars">Browse Cars</Link>
            </Button>
        </div>
    )
}

