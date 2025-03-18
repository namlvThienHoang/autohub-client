// components/WishlistGridItem.js
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, Fuel, Settings, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface WishlistGridItemProps {
    item: any;
    isSelected: boolean;
    onSelect: (checked: boolean) => void;
    onRemove: () => void;
    onAddToCart: () => void;
}

export default function WishlistGridItem({ item, isSelected, onSelect, onRemove, onAddToCart }: WishlistGridItemProps) {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <div className="absolute left-2 top-2 z-10">
                    <Checkbox checked={isSelected} onCheckedChange={onSelect} id={`select-${item.id}`} />
                </div>
                <div className="absolute right-2 top-2 z-10 flex space-x-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-white/80 text-muted-foreground hover:text-destructive"
                        onClick={onRemove}
                    >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove from wishlist</span>
                    </Button>
                </div>
                <Link href={item.link} className="block">
                    <div className="relative h-[200px] w-full">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                </Link>
                {!item.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Badge variant="outline" className="bg-background text-foreground">
                            Out of Stock
                        </Badge>
                    </div>
                )}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href={item.link}>
                            <h3 className="font-semibold text-lg hover:underline">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            {item.category} • {item.year}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg">${item.price.toLocaleString()}</p>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Fuel className="mr-1 h-4 w-4" />
                        {item.fuelType}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Settings className="mr-1 h-4 w-4" />
                        {item.transmission}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        {item.seats} Seats
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        {item.mileage === 0 ? "New" : `${item.mileage.toLocaleString()} miles`}
                    </div>
                </div>
            </div>
            <div className="p-4 pt-0">
                <Button variant="default" className="w-full" onClick={onAddToCart} disabled={!item.inStock}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}