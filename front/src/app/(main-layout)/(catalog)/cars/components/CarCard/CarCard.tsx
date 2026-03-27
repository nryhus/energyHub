import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

import css from "./CarCard.module.css";
import {ICar} from "@/interfaces/car.interface";
import {Card, Col} from "react-bootstrap";

interface IProps {
    car: ICar
}

const CarCard: FC<IProps> = ({car}) => {
    return (
        <Col md={4}>
            <Link href={`/cars/${car.id}`} className={css.Link}>
                <Card className={css.Card}>
                    <button className={css.CompareIcon} title="Порівняти">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                            <path
                                d="M12.998 2V3H19.998V5H12.998V19H16.998V21H6.99805V19H10.998V5H3.99805V3H10.998V2H12.998ZM4.99805 6.34315L7.82647 9.17157C8.55033 9.89543 8.99805 10.8954 8.99805 12C8.99805 14.2091 7.20719 16 4.99805 16C2.78891 16 0.998047 14.2091 0.998047 12C0.998047 10.8954 1.44576 9.89543 2.16962 9.17157L4.99805 6.34315ZM18.998 6.34315L21.8265 9.17157C22.5503 9.89543 22.998 10.8954 22.998 12C22.998 14.2091 21.2072 16 18.998 16C16.7889 16 14.998 14.2091 14.998 12C14.998 10.8954 15.4458 9.89543 16.1696 9.17157L18.998 6.34315ZM4.99805 9.17157L3.58383 10.5858C3.20988 10.9597 2.99805 11.4606 2.99805 12C2.99805 13.1046 3.89348 14 4.99805 14C6.10262 14 6.99805 13.1046 6.99805 12C6.99805 11.4606 6.78621 10.9597 6.41226 10.5858L4.99805 9.17157ZM18.998 9.17157L17.5838 10.5858C17.2099 10.9597 16.998 11.4606 16.998 12C16.998 13.1046 17.8935 14 18.998 14C20.1026 14 20.998 13.1046 20.998 12C20.998 11.4606 20.7862 10.9597 20.4123 10.5858L18.998 9.17157Z"></path>
                        </svg>
                    </button>

                    <div className={css.ImageWrapper}>
                        <Image src={car.image_url} alt={car.label} className={css.Image} fill/>
                    </div>

                    <Card.Body className={css.Body}>
                        <h3 className={css.Title}>{car.label}</h3>

                        <div className={css.Tags}>
                            <span>{car.year}</span>
                            <span>нове авто</span>
                        </div>

                        <p className={css.Status}>Під замовлення</p>

                        <div className={css.Specs}>
                            <div>
                                <p>ЗАПАС ХОДУ</p>
                                <span>555</span>
                            </div>
                            <div>
                                <p>ЄМНІСТЬ БАТАРЕЇ</p>
                                <span>83.4</span>
                            </div>
                            <div>
                                <p>ПОТУЖНІСТЬ</p>
                                <span>646</span>
                            </div>
                        </div>

                        {/* button */}
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
    CarCard
}