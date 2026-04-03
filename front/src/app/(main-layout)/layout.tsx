import {CSSProperties, FC, PropsWithChildren} from "react";

import {Header} from "@/app/(main-layout)/ui/Header/Header";
import {Footer} from "@/app/(main-layout)/ui/Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    const MainStyles = {
        position: "relative",
        zIndex: 2,

        background: "#fff",
        borderBottomRightRadius: 56,
        borderBottomLeftRadius: 56,

        marginBottom: -60,
        paddingBottom: 60,
    }


    return (
        <div>
            <Header/>
            <div style={MainStyles as CSSProperties}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;