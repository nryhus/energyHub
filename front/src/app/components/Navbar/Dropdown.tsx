'use client'

import { FC, PropsWithChildren, ReactNode, useEffect, useRef } from "react";

import css from "./Navbar.module.css";

interface IProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
}

const Dropdown: FC<IProps> = ({isOpen, onClose, children}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <div className={css.Overlay} onClick={onClose}/>

            <div ref={ref} className={css.Dropdown}>
                {children}
            </div>
        </>
    );
};

export {
    Dropdown
}