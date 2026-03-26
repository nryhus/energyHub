'use client';

import { useSearchParams } from "next/navigation";
import { cars } from "@/data/cars";
import {CarCard} from "@/app/cars-catalog/components/CarCard/CarCard";
import {CategoryEnum} from "@/enums/carCategory.enum";

const CarsCatalogPage = () => {
    const searchParams = useSearchParams();

    const type = searchParams.get("type") as CategoryEnum || null;

    const filteredCars = cars.filter((car) => {
        if (!type) return true;

        return car.carCategory === type;
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                Catalog ({type || "all"})
            </h1>

            <div className="grid grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default CarsCatalogPage;