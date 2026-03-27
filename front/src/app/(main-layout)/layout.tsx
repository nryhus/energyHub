import {FC, PropsWithChildren} from "react";

import {Header} from "@/app/(main-layout)/components/Header/Header";
import {Footer} from "@/app/(main-layout)/components/Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;