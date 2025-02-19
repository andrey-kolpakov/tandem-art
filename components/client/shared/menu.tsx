"use client";

import React from "react";
import clsx from "clsx";
import {scrollToElement} from "@/utils/scrollToElement"; // Импортируем функцию

import "@/components/client/shared/styles/menu.scss";

interface Props {
    className?: string;
}

export const Menu: React.FC<Props> = ({className}) => {
    return (

        <div className={'menu-container'}>
            <nav className={clsx(className, "")}>
                <a href="#wideformatprint" onClick={(e) => scrollToElement(e, "wideformatprint")}>Широкоформатная
                    печать</a>
                <a href="#stickers" onClick={(e) => scrollToElement(e, "stickers")}>Стикеры</a>
                <a href="#polygraph" onClick={(e) => scrollToElement(e, "polygraph")}>Полиграфия</a>
                <a href="#portfolio" onClick={(e) => scrollToElement(e, "portfolio")}>Портфолио</a>
                <a href="#contacts" onClick={(e) => scrollToElement(e, "contacts")}>Контакты</a>
            </nav>
        </div>
    );
};
