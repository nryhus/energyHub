import {FC} from "react";

import {ICar} from "@/interfaces/car.interface";
import Image from "next/image";
import Link from "next/link";

interface IProps {
    car: ICar
}

const CarCard: FC<IProps> = ({car}) => {
    return (
        <Link href={`/cars-catalog/${car.id}`}>
            <div className="p-6" style={{backgroundColor: "cyan"}}>
                <h1 className="text-3xl font-bold">{car.label}</h1>
                <Image src={car.image_url} alt={car.label} width={50} height={40} loading="eager"/>

                <div className="mt-6 space-y-2">
                    <p>Рік: {car.year}</p>
                    <p>Запас ходу: 555</p>
                    <p>Батарея: 83.4</p>
                    <p>Потужність: 646</p>
                </div>
            </div>
        </Link>
    );
};

export {
    CarCard
}