import {FC} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Pagination} from "react-bootstrap";

interface IProps {
    totalPages: number;
}

const PaginationBar: FC<IProps> = ({totalPages}) => {
    const router = useRouter();
    const params = useSearchParams();

    const currentPage = Number(params.get("page")) || 1;

    const changePage = (page: number) => {
        const paramsToSet = new URLSearchParams(params.toString());
        paramsToSet.set("page", page.toString());

        router.push(`?${paramsToSet.toString()}`);
    };

    const renderPages = () => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                Math.abs(i - currentPage) <= 1
            ) {
                pages.push(
                    <Pagination.Item
                        key={i}
                        active={i === currentPage}
                        onClick={() => changePage(i)}
                    >
                        {i}
                    </Pagination.Item>
                );
            } else if (
                i === currentPage - 2 ||
                i === currentPage + 2
            ) {
                pages.push(<Pagination.Ellipsis key={`ellipsis-${i}`}/>);
            }
        }

        return pages;
    };

    return (
        <Pagination className="justify-content-center mt-4">
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
            >
                Previous
            </Pagination.Prev>

            {renderPages()}

            <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
            >
                Next
            </Pagination.Next>
        </Pagination>
    );
};

export {
    PaginationBar
}