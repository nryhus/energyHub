import {FC, PropsWithChildren} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Header} from "@/app/components/Header/Header";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div>
                    <Header/>
                    {children}
                </div>
            </body>
        </html>
    );
};

export default Layout;