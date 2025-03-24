"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { scrollToElement } from "@/utils/scrollToElement";
import "@/components/client/shared/styles/menu.scss";
import { isDesktop, isMobile } from "react-device-detect";
import { usePopupStore } from "@/store/popupStore";

import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
    className?: string;
}

function MenuJSX({ closePopup }: { closePopup?: () => void }) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (closePopup) closePopup(); // Закрываем попап после клика
        scrollToElement(e, id);
    };

    return (
        <div className="menu-container">
            <nav>
                <a href="/" onClick={() => closePopup && closePopup()}>Главная</a>
                <a href="#wideformatprint" onClick={(e) => handleClick(e, "wideformatprint")}>
                    Широкоформатная печать
                </a>
                <a href="#stickers" onClick={(e) => handleClick(e, "stickers")}>
                    Стикеры
                </a>
                <a href="#interiorprint" onClick={(e) => handleClick(e, "interiorprint")}>
                    Интерьерная печать
                </a>
                <a href="#portfolio" onClick={(e) => handleClick(e, "portfolio")}>
                    Портфолио
                </a>
                <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
                    Контакты
                </a>
            </nav>
        </div>
    );
}

export const Menu: React.FC<Props> = ({ className }) => {
    const { openPopup, closePopup } = usePopupStore();
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        if (isMobile) setDeviceType("mobile");
        else if (isDesktop) setDeviceType("desktop");
    }, []);

    if (deviceType === "mobile") {
        return (
            <div onClick={() => openPopup(<MenuJSX closePopup={closePopup} />)} className={'open-menu-button'}>
                <GiHamburgerMenu/>
            </div>
        );
    }

    return <MenuJSX />;
};
