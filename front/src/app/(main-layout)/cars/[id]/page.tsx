'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import {cars} from "@/data";
import {CategoryEnum} from "@/enums";
import {Breadcrumbs} from "@/app/(main-layout)/ui";
import {Container} from "react-bootstrap";

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
        <Container>
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
        </Container>
    );
};

export default CarPage;