import {FC, PropsWithChildren} from "react";

import {Header} from "@/app/(main-layout)/components/Header/Header";
import {Footer} from "@/app/(main-layout)/components/Footer/Footer";
import {Container} from "react-bootstrap";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <Container>
                {children}
            </Container>
            <Footer/>
        </div>
    );
};

export default Layout;