'use client';

import {useSearchParams} from "next/navigation";
import {cars} from "@/data/cars";
import {CarCard} from "@/app/(main-layout)/(catalog)/cars/components/CarCard/CarCard";
import {CategoryEnum} from "@/enums/carCategory.enum";
import {Col, Row} from "react-bootstrap";

const CarsPage = () => {
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

            <Row>
                {filteredCars.map((car) => (
                    <CarCard car={car} key={car.id}/>
                ))}
            </Row>
        </div>
    );
}

export default CarsPage;