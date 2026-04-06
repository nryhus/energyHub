import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer, Header} from "@/app/ui";
import {CSSProperties} from "react";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
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
        <html lang="en" data-scroll-behavior="smooth">
            <body>
                <Header/>
                <div style={MainStyles as CSSProperties}>
                    {children}
                </div>
                <Footer/>
            </body>
        </html>
    )
}