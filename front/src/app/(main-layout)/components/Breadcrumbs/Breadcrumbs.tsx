import {FC} from "react";
import {Breadcrumb, Container} from "react-bootstrap";
import Link from "next/link";
import css from "./Breadcrumbs.module.css";

interface ICrumb {
    label: string;
    href: string;
    active?: boolean;
}

interface IProps {
    breadcrumbs: ICrumb[];
}

const Breadcrumbs: FC<IProps> = ({breadcrumbs}) => {
    return (
        <Container className={css.Breadcrumbs}>
            {breadcrumbs.map((crumb, index) => (
                <div key={index} className={css.Item}>

                    {crumb.active || !crumb.href ? (
                        <span className={css.Active}>{crumb.label}</span>
                    ) : (
                        <Link href={crumb.href} className={css.Link}>
                            {crumb.label}
                        </Link>
                    )}

                    {index < breadcrumbs.length - 1 && (
                        <span className={css.Separator}>
                          <svg viewBox="0 0 640 640">
                            <path
                                d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
                          </svg>
                        </span>
                    )}

                </div>
            ))}
        </Container>
    );
};

export {
    Breadcrumbs
}