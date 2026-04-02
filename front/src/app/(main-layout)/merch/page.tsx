'use client';

import {Breadcrumbs, CardList, MerchCard, PaginationBar} from "@/app/(main-layout)/ui";
import {merch} from "@/data/merch";
import {useSearchParams} from "next/navigation";

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

            <CardList objects={paginatedMerch}>
                {(m) => <MerchCard merch={m} key={m.id}/>}
            </CardList>

            {(countOfPages > 1) && <PaginationBar totalPages={countOfPages}/>}
        </div>
    );
};

export default MerchPage;