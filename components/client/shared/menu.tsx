"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { scrollToElement } from "@/utils/scrollToElement";
import "@/components/client/shared/styles/menu.scss";
import { isDesktop, isMobile } from "react-device-detect";
import { usePopupStore } from "@/store/popupStore";

import { GiHamburgerMenu } from "react-icons/gi";

import Image from 'next/image'

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
                {/*<a href="/" onClick={() => closePopup && closePopup()}>Главная</a>*/}
                <a href="#wideformatprint" onClick={(e) => handleClick(e, "wideformatprint")}>
                    <Image src={'/images/menu/wideformat.webp'} width={36} height={24} className={'menu-container__icon'} alt={'icon'}/>
                    Широкоформатная печать
                </a>
                <a href="#stickers" onClick={(e) => handleClick(e, "stickers")}>
                    <Image src={'/images/menu/stickers.webp'} width={24} height={24} className={'menu-container__icon'} alt={'icon'}/>
                    Стикеры
                </a>
                <a href="#interiorprint" onClick={(e) => handleClick(e, "interiorprint")}>
                    <Image src={'/images/menu/interior.webp'} width={24} height={24} className={'menu-container__icon'} alt={'icon'}/>
                    Интерьерная печать
                </a>
                {/*<a href="#portfolio" onClick={(e) => handleClick(e, "portfolio")}>*/}
                {/*    <Image src={'/images/menu/gallery.webp'} width={24} height={24} className={'menu-container__icon'} alt={'icon'}/>*/}
                {/*    Портфолио*/}
                {/*</a>*/}
                <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
                    <Image src={'/images/menu/contacts.webp'} width={24} height={24} className={'menu-container__icon'} alt={'icon'}/>
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
