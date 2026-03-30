'use client';

import { useParams } from "next/navigation";
import { cars } from "@/data/cars";
import Image from "next/image";
import {Breadcrumbs} from "@/app/(main-layout)/components/Breadcrumbs/Breadcrumbs";
import {CategoryEnum} from "@/enums/carCategory.enum";

const CarPage = () => {
    const params = useParams<{ id: string }>();

    const car = cars.find(car => car.id === params.id);

    if (!car) return <div>Not found</div>;

    const getLabel = () => {
        switch (car.carCategory) {
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
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Головна", href: "/" },
                    { label: label, href: `/cars?type=${car.carCategory}` },
                    { label: car.label, href: `/cars/${car.id}`, active: true },
                ]}
            />
            <div className="p-6 bg-cyan-300">
                <h1 className="text-3xl font-bold">{car.label}</h1>

                <Image
                    src={car.image_url}
                    alt={car.label}
                    width={400}
                    height={300}
                    loading="eager"
                />

                <div className="mt-6 space-y-2">
                    <p>Рік: {car.year}</p>
                    <p>Країна: {car.country}</p>
                    <p>Ціна: ${car.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CarPage;