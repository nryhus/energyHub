import {IMerch} from "@/interfaces";
import {FC} from "react";
import {Card, Col} from "react-bootstrap";
import Link from "next/link";
import css from "./Card.module.css";
import Image from "next/image";

interface IProps {
    merch: IMerch;
}

const MerchCard: FC<IProps> = ({merch}) => {
    return (
        <Col>
            <Card className={css.Card}>
                <div className={css.ImageWrapper}>
                    <Image src={merch.image_url} alt={merch.label} className={css.Image} fill/>
                </div>
                <Card.Body className={css.Body}>
                    <h3 className={css.Title}>{merch.label}</h3>

                    <div className={css.Specs}>
                        <div>
                            <p>{"ТИП РОЗ'ЄМУ НА АВТО"}</p>
                            <span>{merch.type_of_connector}</span>
                        </div>
                        <div>
                            <p>ДОПУСТИМИЙ СТРУМ ДО</p>
                            <span>{merch.max_current}</span>
                        </div>
                        <div>
                            <p>{"ТИП РОЗ'ЄМУ РОЗЕТКИ"}</p>
                            <span>{merch.type_of_socket}</span>
                        </div>
                    </div>

                    <div className={css.ButtonGroup}>
                        <Link href={`/merch/${merch.id}`} className={css.MainButton}>
                            ДЕТАЛЬНІШЕ
                        </Link>

                        <Link href={`/merch/${merch.id}`} className={css.IconButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path d="M16.3891 8.11096L8.61091 15.8891" stroke="#fff" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.3891 8.11096L16.7426 12" stroke="#fff" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.3891 8.11096L12.5 7.75741" stroke="#fff" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export {
    MerchCard
}