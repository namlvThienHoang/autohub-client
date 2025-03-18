// components/WishlistListItem.js
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, Fuel, Settings, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Label } from "./ui/label";

interface WishlistListItemProps {
    item: any;
    isSelected: boolean;
    onSelect: (checked: boolean) => void;
    onRemove: () => void;
    onAddToCart: () => void;
}

export default function WishlistListItem({ item, isSelected, onSelect, onRemove, onAddToCart }: WishlistListItemProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 rounded-lg border p-4">
            <div className="flex items-center sm:hidden">
                <Checkbox checked={isSelected} onCheckedChange={onSelect} id={`select-mobile-${item.id}`} className="mr-2" />
                <Label htmlFor={`select-mobile-${item.id}`} className="font-medium">
                    {item.name}
                </Label>
            </div>
            <div className="relative h-[120px] w-full sm:w-[180px] flex-shrink-0">
                <div className="absolute left-2 top-2 z-10 hidden sm:block">
                    <Checkbox checked={isSelected} onCheckedChange={onSelect} id={`select-list-${item.id}`} />
                </div>
                <Link href={item.link} className="block h-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="rounded-md object-cover" />
                </Link>
                {!item.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/50">
                        <Badge variant="outline" className="bg-background text-foreground">
                            Out of Stock
                        </Badge>
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                    <div className="hidden sm:block">
                        <Link href={item.link}>
                            <h3 className="font-semibold text-lg hover:underline">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            {item.category} • {item.year}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg">${item.price.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Added on {new Date(item.dateAdded).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4">
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
                <div className="mt-auto pt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={onRemove} className="text-destructive hover:bg-destructive/10">
                        <Trash2 className="mr-1 h-4 w-4" />
                        Remove
                    </Button>
                    <Button variant="default" size="sm" onClick={onAddToCart} disabled={!item.inStock}>
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}