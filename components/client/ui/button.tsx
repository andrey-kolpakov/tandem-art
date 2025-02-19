import React, { useMemo } from "react";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles/button.module.scss";

interface Props {
    className?: string;
    children: React.ReactNode;
    href?: string; // Если передан, то рендерится как <Link>
    onClickHandler?: () => void;
}

const ButtonComponent: React.FC<Props> = ({ className, children, href, onClickHandler }) => {
    const arrayClassName = useMemo(() => {
        if (className) {
            // console.log(className);
            return className.split(" ");
        }
        return undefined;
    }, [className]);

    // console.log("ререндер Button");

    if (href) {
        return (
            <Link href={href} className={clsx(styles.button, className ? arrayClassName?.map(el => styles[el]) : "")}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={clsx(styles.button, className ? arrayClassName?.map(el => styles[el]) : "")}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

// Оборачиваем в `React.memo`, чтобы предотвратить ререндеры, если пропсы не изменились
export const Button = React.memo(ButtonComponent);
