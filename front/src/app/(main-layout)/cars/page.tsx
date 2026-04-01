'use client';

import {useSearchParams} from "next/navigation";
import {cars} from "@/data";
import {CategoryEnum} from "@/enums";
import {Breadcrumbs, CarCard, CardList} from "@/app/(main-layout)/ui";

const CarsPage = () => {
    const searchParams = useSearchParams();

    const type = searchParams.get("type") as CategoryEnum || null;

    const filteredCars = cars.filter((car) => {
        if (!type) return true;

        return car.carCategory === type;
    });

    const getLabel = () => {
        switch (type) {
            case CategoryEnum.inStorage:
                return "Авто в наявності";
            case CategoryEnum.toOrder:
                return "Авто під замовлення";
            default:
                return "Каталог авто";
        }
    };

    const label = getLabel();

    return (
        <div className="p-6">
            <Breadcrumbs
                breadcrumbs={[
                    {label: "Головна", href: "/"},
                    {label: label, href: "/cars", active: true},
                ]}
            />

            <h1 className="text-2xl font-bold mb-6">
                {label}
            </h1>

            <CardList objects={filteredCars}>
                {(car) => <CarCard car={car} key={car.id}/>}
            </CardList>
        </div>
    );
}

export default CarsPage;