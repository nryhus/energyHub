'use client';

import {useRouter, usePathname, useSearchParams} from "next/navigation";
import {useState, useEffect} from "react";

import css from "./SearchInput.module.css"

const SearchInput = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const search = searchParams.get("search")?.toLowerCase() || "";

    const [searchValue, setSearchValue] = useState(search);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (searchValue) {
                params.set("search", searchValue);
            } else {
                params.delete("search");
            }

            params.set("page", "1");

            router.push(`${pathname}?${params.toString()}`);
        }, 400);

        return () => clearTimeout(timeout);
    }, [searchValue]);

    return (
        <div className={css.SearchWrapper}>
            <svg viewBox="0 0 24 24" className={css.SearchIcon}>
                <path d="M21 21L16.65 16.65M11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18Z"
                      stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            </svg>

            <input
                type="text"
                className={css.SearchInput}
                placeholder="Пошук"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
};

export {
    SearchInput
}