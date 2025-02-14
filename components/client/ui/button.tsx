import React from "react";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles/button.module.scss";

interface Props {
    className?: string;
    children: React.ReactNode;
    href?: string; // Если передан, то рендерится как <Link>
    onClickHandler?: () => void;
}

export const Button: React.FC<Props> = ({ className, children, href, onClickHandler }) => {
    console.log(className)

    const arrayClassName :string[] | undefined = className?.split(" ");

    // Если передан href, рендерим ссылку
    if (href) {
        return (
            <Link href={href} className={clsx(styles.button, (className? arrayClassName?.map(el => styles[el]) : ''))}>
                {children}
            </Link>
        );
    }

    // Если href нет, рендерим кнопку
    return (
        <button className={clsx(styles.button, (className? arrayClassName?.map(el => styles[el]) : ''))} onClick={onClickHandler}>
            {children}
        </button>
    );
};
