import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

interface DesktopFiltersProps {
    filters: any;
    toggleFilter: any;
    clearFilters: any;
}

export default function DesktopFilters({ filters, toggleFilter, clearFilters }: DesktopFiltersProps) {
    const minPrice = 0;
    const maxPrice = 150000;
    const step = 1000;

    // Giá trị mặc định lấy từ filters
    const [priceRange, setPriceRange] = useState<[number, number]>([
        filters.MinPrice || 20000,
        filters.MaxPrice || 80000,
    ]);

    // Cập nhật giá trị khi kéo Slider
    const handleSliderChange = (value: [number, number]) => {
        setPriceRange(value);
        toggleFilter("MinPrice", value[0]);
        toggleFilter("MaxPrice", value[1]);
    };

    // Xử lý nhập giá trị vào input
    const handleInputChange = (index: number, value: string) => {
        let numValue = parseInt(value, 10) || 0;
        if (index === 0) {
            numValue = Math.max(minPrice, Math.min(numValue, priceRange[1] - step));
        } else {
            numValue = Math.min(maxPrice, Math.max(numValue, priceRange[0] + step));
        }
        setPriceRange((prev) => (index === 0 ? [numValue, prev[1]] : [prev[0], numValue]));
        toggleFilter(index === 0 ? "MinPrice" : "MaxPrice", numValue);
    };

    // // Đồng bộ filters nếu có thay đổi từ bên ngoài
    // useEffect(() => {
    //     setPriceRange([filters.MinPrice || 20000, filters.MaxPrice || 80000]);
    // }, [filters.MinPrice, filters.MaxPrice]);
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                    <Slider
                        value={priceRange}
                        onValueChange={handleSliderChange}
                        min={minPrice}
                        max={maxPrice}
                        step={step}
                    />
                    <div className="flex items-center justify-between">
                        <Input
                            type="number"
                            placeholder="Min"
                            className="w-[45%]"
                            value={priceRange[0]}
                            onChange={(e) => handleInputChange(0, e.target.value)}
                        />
                        <span className="text-muted-foreground">to</span>
                        <Input
                            type="number"
                            placeholder="Max"
                            className="w-[45%]"
                            value={priceRange[1]}
                            onChange={(e) => handleInputChange(1, e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Car Type</h3>
                <div className="space-y-2">
                    {["Sedan", "SUV", "Electric", "Hybrid", "Sports", "Luxury"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                                id={`category-${category.toLowerCase()}`}
                                checked={filters.categories.includes(category)}
                                onCheckedChange={() => toggleFilter("categories", category)}
                            />
                            <Label htmlFor={`category-${category.toLowerCase()}`}>{category}</Label>
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
                            <Checkbox id={`brand-${brand.toLowerCase().replace(" ", "-")}`}
                                checked={filters.brands.includes(brand)}
                                onCheckedChange={() => toggleFilter("brands", brand)}
                            />
                            <Label htmlFor={`brand-${brand.toLowerCase().replace(" ", "-")}`}>{brand}</Label>
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
                            <Checkbox id={`fuel-${fuel.toLowerCase()}`}
                                checked={filters.fuelTypes.includes(fuel)}
                                onCheckedChange={() => toggleFilter("fuels", fuel)}
                            />
                            <Label htmlFor={`fuel-${fuel.toLowerCase()}`}>{fuel}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Transmission</h3>
                <div className="space-y-2">
                    {["Automatic", "Manual"].map((transmission) => (
                        <div key={transmission} className="flex items-center space-x-2">
                            <Checkbox id={`transmission-${transmission.toLowerCase()}`}
                                checked={filters.transmissions.includes(transmission)}
                                onCheckedChange={() => toggleFilter("transmissions", transmission)}
                            />
                            <Label htmlFor={`transmission-${transmission.toLowerCase()}`}>{transmission}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="font-semibold mb-4">Year</h3>
                <div className="space-y-2">
                    <Select defaultValue="any">
                        <SelectTrigger>
                            <SelectValue placeholder="Select year from" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            {[2023, 2022, 2021, 2020, 2019].map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button className="w-full">Apply Filters</Button>
            <Button variant="outline" className="w-full" onClick={clearFilters}>
                Reset Filters
            </Button>
        </div>
    )
}