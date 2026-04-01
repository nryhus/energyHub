'use client';

import {Breadcrumbs, CardList, MerchCard} from "@/app/(main-layout)/ui";
import {Row} from "react-bootstrap";
import {merch} from "@/data/merch";

const MerchPage = () => {
    const label = "Магазин автозапчастин"

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

            <CardList objects={merch}>
                {(m) => <MerchCard merch={m} key={m.id}/>}
            </CardList>
        </div>
    );
};

export default MerchPage;