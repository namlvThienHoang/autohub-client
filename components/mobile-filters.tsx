// components/MobileFilters.js
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";


interface MobileFiltersProps {
    filters: any;
    toggleFilter: any;
    clearFilters: any;
}

export default function MobileFilters({ filters, toggleFilter, clearFilters }: MobileFiltersProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                    <Slider defaultValue={[20000, 80000]} min={0} max={150000} step={1000} />
                    <div className="flex items-center justify-between">
                        <Input type="number" placeholder="Min" className="w-[45%]" />
                        <span className="text-muted-foreground">to</span>
                        <Input type="number" placeholder="Max" className="w-[45%]" />
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Car Type</h3>
                <div className="space-y-2">
                    {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-type-${type.toLowerCase()}`} />
                            <Label htmlFor={`mobile-type-${type.toLowerCase()}`}>{type}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Brand</h3>
                <div className="space-y-2">
                    {["BMW", "Mercedes-Benz", "Audi", "Tesla", "Toyota", "Honda", "Ford", "Porsche"].map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-brand-${brand.toLowerCase().replace(" ", "-")}`} />
                            <Label htmlFor={`mobile-brand-${brand.toLowerCase().replace(" ", "-")}`}>{brand}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Fuel Type</h3>
                <div className="space-y-2">
                    {["Petrol", "Diesel", "Electric", "Hybrid"].map((fuel) => (
                        <div key={fuel} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-fuel-${fuel.toLowerCase()}`} />
                            <Label htmlFor={`mobile-fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 mt-6">
                <Button className="flex-1">Apply Filters</Button>
                <Button variant="outline" className="flex-1">
                    Reset
                </Button>
            </div>
        </div>
    )
}