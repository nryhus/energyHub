import {FC} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Pagination} from "react-bootstrap";
import css from "./PaginationBar.module.css";

interface IProps {
    totalPages: number;
}

const PaginationBar: FC<IProps> = ({totalPages}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());

        router.push(`?${params.toString()}`);
    };

    if (totalPages <= 1) return null;

    return (
        <div className={css.Pagination}>
            <button
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
                className={css.NavBtn}
            >
                ← Previous
            </button>

            <div className={css.Pages}>
                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => changePage(page)}
                            className={`${css.Page} ${
                                page === currentPage ? css.Active : ''
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            <button
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
                className={css.NavBtn}
            >
                Next →
            </button>
        </div>
    );
};

export {
    PaginationBar
}