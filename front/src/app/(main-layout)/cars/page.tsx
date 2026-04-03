'use client';

import {useSearchParams} from "next/navigation";
import {cars} from "@/data";
import {CategoryEnum} from "@/enums";
import {Breadcrumbs, CarCard, CardList, PaginationBar} from "@/app/(main-layout)/ui";
import {Container, Row} from "react-bootstrap";

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
    const countOfPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

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
        <Container className="p-6">
            <Breadcrumbs
                breadcrumbs={[
                    {label: "Головна", href: "/"},
                    {label: label, href: "/cars", active: true},
                ]}
            />

            <h1 className="text-2xl font-bold mb-6">
                {label}
            </h1>

            <Row className="d-flex flex-column align-items-center" style={{ background: "#F6F6F6", borderRadius: "36px"}}>
                <CardList objects={paginatedCars}>
                    {(car) => <CarCard car={car} key={car.id}/>}
                </CardList>

                <PaginationBar totalPages={countOfPages}/>
            </Row>
        </Container>
    );
}

export default CarsPage;