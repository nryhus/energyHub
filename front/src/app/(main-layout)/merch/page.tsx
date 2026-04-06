'use client';

import {Breadcrumbs, CardList, MerchCard, PaginationBar} from "@/app/(main-layout)/ui";
import {merch} from "@/data/merch";
import {useSearchParams} from "next/navigation";
import {Container, Row} from "react-bootstrap";

const ITEMS_PER_PAGE = 9;

const MerchPage = () => {
    const searchParams = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;

    const label = "Магазин автозапчастин"


    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const paginatedMerch = merch.slice(start, end);
    const countOfPages = Math.ceil(merch.length / ITEMS_PER_PAGE);

    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    {label: "Головна", href: "/"},
                    {label: label, href: "/cars", active: true},
                ]}
            />

            <h1 className="text-2xl font-bold mb-3" style={{color: "#212D3C", fontSize: "44px", fontWeight: 300}}>
                {label}
            </h1>

            <Row className="d-flex flex-column align-items-center" style={{ background: "#F6F6F6", borderRadius: "36px"}}>
                <CardList objects={paginatedMerch}>
                    {(m) => <MerchCard merch={m} key={m.id}/>}
                </CardList>
                <PaginationBar totalPages={countOfPages}/>
            </Row>
        </Container>
    );
};

export default MerchPage;