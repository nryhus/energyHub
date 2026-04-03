'use client'

import Link from "next/link";
import css from "./Header.module.css";
import {useState} from "react";
import {Dropdown} from "./Dropdown"
import {CategoryEnum} from "@/enums";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LoginModal} from "@/app/(main-layout)/ui";

type MenuType = "available" | "order" | null;

const Header = () => {
    const [activeMenu, setActiveMenu] = useState<MenuType>(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleMenu = (menu: MenuType) => {
        setActiveMenu(prev => (prev === menu ? null : menu));
    };

    return (
        <div className={css.Wrapper}>
            <Navbar expand="md" className="justify-content-between">
                <Container>
                    <Navbar.Brand href={"/"}>Energy Hub Logo</Navbar.Brand>

                    <Nav className="ms-auto align-items-center gap-3">

                        <button className={css.NavbarLink} onClick={() => toggleMenu("available")}>
                            Авто в наявності
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-chevron-down-icon lucide-chevron-down">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </button>
                        <button className={css.NavbarLink} onClick={() => toggleMenu("order")}>
                            Авто під замовлення
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-chevron-down-icon lucide-chevron-down">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </button>

                        <Link href={"/merch"} className={css.NavbarLink}>Магазин Автозапчастин</Link>
                        <Link href={"/"} className={css.NavbarLink}>Кредитування</Link>
                        <Link href={"/partners"} className={css.NavbarLink}>Для дилерів</Link>

                        <button className={css.IconBtn} title="Порівняти">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12.998 2V3H19.998V5H12.998V19H16.998V21H6.99805V19H10.998V5H3.99805V3H10.998V2H12.998ZM4.99805 6.34315L7.82647 9.17157C8.55033 9.89543 8.99805 10.8954 8.99805 12C8.99805 14.2091 7.20719 16 4.99805 16C2.78891 16 0.998047 14.2091 0.998047 12C0.998047 10.8954 1.44576 9.89543 2.16962 9.17157L4.99805 6.34315ZM18.998 6.34315L21.8265 9.17157C22.5503 9.89543 22.998 10.8954 22.998 12C22.998 14.2091 21.2072 16 18.998 16C16.7889 16 14.998 14.2091 14.998 12C14.998 10.8954 15.4458 9.89543 16.1696 9.17157L18.998 6.34315ZM4.99805 9.17157L3.58383 10.5858C3.20988 10.9597 2.99805 11.4606 2.99805 12C2.99805 13.1046 3.89348 14 4.99805 14C6.10262 14 6.99805 13.1046 6.99805 12C6.99805 11.4606 6.78621 10.9597 6.41226 10.5858L4.99805 9.17157ZM18.998 9.17157L17.5838 10.5858C17.2099 10.9597 16.998 11.4606 16.998 12C16.998 13.1046 17.8935 14 18.998 14C20.1026 14 20.998 13.1046 20.998 12C20.998 11.4606 20.7862 10.9597 20.4123 10.5858L18.998 9.17157Z"></path>
                            </svg>
                        </button>

                        <button onClick={() => setIsLoginOpen(true)} className={css.IconBtn} title="Особистий кабінет">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <circle cx="12" cy="7" r="3" stroke="#333333" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                <path
                                    d="M14 13H10C7.79086 13 6 14.7909 6 17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17C18 14.7909 16.2091 13 14 13Z"
                                    stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button className={`${css.IconBtn} ${css.PhoneBtn}`} title="Зв'яжіться з нами">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M20.4799 19.77L21.7373 16.9317C21.9833 16.3764 21.7614 15.7234 21.2279 15.4327L19.3651 14.4175C18.9042 14.1664 17.1263 13.3319 16.6465 13.5411L13.9204 15.127L13.3736 14.7875C12.1974 14.0466 10.6879 13.0862 9.60153 12.0241C9.15724 11.5898 9.09915 10.9165 9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C3.6327 13.3965 9.54455 18.0951 16.6308 20.2834C18.0169 20.7114 19.8923 21.0964 20.4799 19.77Z"
                                    stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </Nav>
                </Container>
            </Navbar>

            <Dropdown isOpen={!!activeMenu} onClose={() => setActiveMenu(null)}>
                {activeMenu === "available" && (
                    <div className={css.MenuContent}>
                        <div>
                            <p>АВТО В НАЯВНОСТІ</p>
                            <p onClick={() => setActiveMenu(null)}>МАШИНИ З КИТАЮ</p>
                            <p onClick={() => setActiveMenu(null)}>МАШИНИ З ЄВРОПИ</p>
                            <p onClick={() => setActiveMenu(null)}>МАШИНИ З США</p>
                        </div>

                        <Link href={`/cars?type=${CategoryEnum.inStorage}`}
                              onClick={() => setActiveMenu(null)} className={css.CatalogBtn}>
                            Дивитись весь каталог →
                        </Link>
                    </div>
                )}

                {activeMenu === "order" && (
                    <div className={css.MenuContent}>
                        <div>
                            <p>ПІД ЗАМОВЛЕННЯ</p>
                            <p onClick={() => setActiveMenu(null)}>МАШИНИ З КИТАЮ</p>
                            <p onClick={() => setActiveMenu(null)}>МАШИНИ З ЄВРОПИ</p>
                            <p onClick={() => setActiveMenu(null)}>МАШИНИ З США</p>
                        </div>

                        <Link href={`/cars?type=${CategoryEnum.toOrder}`}
                              onClick={() => setActiveMenu(null)} className={css.CatalogBtn}>
                            Дивитись весь каталог →
                        </Link>
                    </div>
                )}
            </Dropdown>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </div>
    );
};

export {
    Header
};