import {FC, PropsWithChildren} from "react";

import {Header} from "@/app/(main-layout)/ui/Header/Header";
import {Footer} from "@/app/(main-layout)/ui/Footer/Footer";
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