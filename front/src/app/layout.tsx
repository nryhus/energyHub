import {FC, PropsWithChildren} from "react";

import {Navbar} from "@/app/components/Navbar/Navbar";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div>
                    <Navbar/>
                    {children}
                </div>
            </body>
        </html>
    );
};

export default Layout;