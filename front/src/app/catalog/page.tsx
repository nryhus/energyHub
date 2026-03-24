'use client'

import { useSearchParams } from "next/navigation";

const Catalog = () => {
    const searchParams = useSearchParams()

    return (
        <div>Catalog {searchParams.get("type")}</div>
    );
};

export default Catalog