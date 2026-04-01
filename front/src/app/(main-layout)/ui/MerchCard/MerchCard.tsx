import {IMerch} from "@/interfaces";
import {FC} from "react";
import {Card, Col} from "react-bootstrap";
import Link from "next/link";
import css from "./MerchCard.module.css";
import Image from "next/image";

interface IProps {
    merch: IMerch;
}

const MerchCard: FC<IProps> = ({merch}) => {
    return (
        <Col md={4}>
            <Link href={`/front/src/app/(main-layout)/merch/${merch.id}`} className={css.Link}>
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

                        <div className={css.ButtonWrapper}>
                            <button className={css.Button}>
                                ДЕТАЛЬНІШЕ →
                            </button>
                        </div>

                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export {
    MerchCard
}