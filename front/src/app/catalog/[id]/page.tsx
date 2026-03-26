'use client';

import { useParams } from "next/navigation";
import { cars } from "@/data/cars";
import Image from "next/image";

const Merchandise = () => {
    const params = useParams<{ id: string }>();

    const car = cars.find(car => car.id === params.id);

    if (!car) return <div>Not found</div>;

    return (
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
    );
};

export default Merchandise;