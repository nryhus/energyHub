'use client';

import {Breadcrumbs, MerchCard} from "@/app/(main-layout)/ui";
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

            <Row>
                {merch.map((m) => (
                    <MerchCard merch={m} key={m.id}/>
                ))}
            </Row>
        </div>
    );
};

export default MerchPage;