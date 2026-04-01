'use client';

import {useSearchParams} from "next/navigation";
import {cars} from "@/data";
import {CategoryEnum} from "@/enums";
import {Breadcrumbs, CarCard, CardList} from "@/app/(main-layout)/ui";

const ITEMS_PER_PAGE = 9;

const CarsPage = () => {
    const searchParams = useSearchParams();

    const type = searchParams.get("type") as CategoryEnum || null;
    const page = Number(searchParams.get("page")) || 1;

    const filteredCars = cars.filter((car) => {
        if (!type) return true;

        return car.carCategory === type;
    });

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const paginatedCars = filteredCars.slice(start, end);

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

            <CardList objects={paginatedCars}>
                {(car) => <CarCard car={car} key={car.id}/>}
            </CardList>
        </div>
    );
}

export default CarsPage;