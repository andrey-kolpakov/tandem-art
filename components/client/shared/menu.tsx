"use client";

import React, {useEffect, useState} from "react";
import clsx from "clsx";
import {scrollToElement} from "@/utils/scrollToElement";
import "@/components/client/shared/styles/menu.scss";
import {isDesktop, isMobile} from "react-device-detect";
import {usePopupStore} from "@/store/popupStore";
import {useRouter, usePathname} from 'next/navigation';
import {HiOutlineMenu} from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";

import Image from 'next/image'

import {Submenu} from "./Submenu";

import {Container} from './container'

import {v4} from "uuid";

interface Props {
    className?: string;
}

import {Form} from "@/components/client";

import {wideFormatCards} from './wideformatPrint'
import {interiorCards} from './interiorPrint'

// console.log(wideFormatCards)

type MenuSubItem =
    | { type: "link"; target: string; label: string }
    | { type: "popup"; target: React.ReactNode; label: string };

type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    submenu?: MenuSubItem[];
};

const menuItems: MenuItem[] = [
    {
        id: "wideformatprint",
        label: "Широкоформатная печать",
        icon: "/images/menu/wideformat.webp",
        submenu: [
            { type: "link", target: "/wide-format-printing", label: "Широкоформатная печать" },
            { type: "popup", target: wideFormatCards[1].popupContent, label: "Услуги плоттерной резки" },
            { type: "link", target: "/sticker-pack", label: "Стикерпаки" },
            { type: "popup", target: wideFormatCards[3].popupContent, label: "Мобильные стенды" },
        ]
    },
    {
        id: "stickers",
        label: "Стикеры",
        icon: "/images/menu/stickers.webp"
    },
    {
        id: "interiorprint",
        label: "Интерьерная печать",
        icon: "/images/menu/interior.webp",
        submenu: [
            { type: "link", target: "/canvas-printing", label: "Печать на холсте" },
            { type: "popup", target: interiorCards[1].popupContent, label: "Таблички, стенды и указатели" },
            { type: "link", target: "/billboard-printing", label: "Постеры, плакаты и афиши" },
            { type: "popup", target: interiorCards[3].popupContent, label: "Фотопечать на обоях" },
        ]
    },
    {
        id: "contacts",
        label: "Контакты",
        icon: "/images/menu/contacts.webp"
    }
];



function MenuJSX({closePopup}: { closePopup?: () => void }) {
    const pathname = usePathname();
    const router = useRouter();

    const {openPopup} = usePopupStore();

    const handleClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();

        if (closePopup) closePopup();

        if (pathname !== '/') {
            router.push(`/#${id}`);
        } else {
            scrollToElement(e, id);
        }
    };

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const sectionElements = document.querySelectorAll("[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.getAttribute("id");
                        setActiveSection(sectionId);
                        break; // берём только первый пересекаемый
                    }
                }
            },
            {
                rootMargin: "-50% 0px -50% 0px", // зона пересечения по центру экрана
                threshold: 0,
            }
        );

        sectionElements.forEach((el) => observer.observe(el));

        return () => {
            sectionElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="menu-container">
            <Submenu handleClick={(e) => handleClick(e, 'formBlock')} />

            <Container classNameOuter={'container-outer-nav'}>
                {/*<nav>*/}
                {/*    <a*/}
                {/*        className={clsx({*/}
                {/*            'active': pathname === '/' && activeSection === null*/}
                {/*        })}*/}
                {/*        href="/"*/}
                {/*        data-section="home"*/}
                {/*    >*/}
                {/*        <HiOutlineMenu width={36} height={24} className={'menu-container__icon'}/>*/}
                {/*        Главная*/}
                {/*    </a>*/}

                {/*    /!*<a href="/" onClick={() => closePopup && closePopup()}>Главная</a>*!/*/}
                {/*    <a className={clsx({'active': activeSection === "wideformatprint"})} href="#wideformatprint"*/}
                {/*       data-section="wideformatprint" onClick={(e) => handleClick(e, "wideformatprint")}>*/}
                {/*        <Image src={'/images/menu/wideformat.webp'} width={36} height={24}*/}
                {/*               className={'menu-container__icon'} alt={'icon'}/>*/}
                {/*        Широкоформатная печать*/}
                {/*    </a>*/}
                {/*    <a className={clsx({'active': activeSection === "stickers"})} href="#stickers"*/}
                {/*       data-section="stickers" onClick={(e) => handleClick(e, "stickers")}>*/}
                {/*        <Image src={'/images/menu/stickers.webp'} width={24} height={24}*/}
                {/*               className={'menu-container__icon'}*/}
                {/*               alt={'icon'}/>*/}
                {/*        Стикеры*/}
                {/*    </a>*/}
                {/*    <a className={clsx({'active': activeSection === "interiorprint"})} href="#interiorprint"*/}
                {/*       data-section="interiorprint" onClick={(e) => handleClick(e, "interiorprint")}>*/}
                {/*        <Image src={'/images/menu/interior.webp'} width={24} height={24}*/}
                {/*               className={'menu-container__icon'}*/}
                {/*               alt={'icon'}/>*/}
                {/*        Интерьерная печать*/}
                {/*    </a>*/}

                {/*    <a className={clsx({'active': activeSection === "contacts"})} href="#contacts"*/}
                {/*       data-section="contacts" onClick={(e) => handleClick(e, "contacts")}>*/}
                {/*        <Image src={'/images/menu/contacts.webp'} width={24} height={24}*/}
                {/*               className={'menu-container__icon'}*/}
                {/*               alt={'icon'}/>*/}
                {/*        Контакты*/}
                {/*    </a>*/}
                {/*</nav>*/}

                <nav>
                        <a
                            className={clsx({
                                'active': pathname === '/' && activeSection === null
                            })}
                            href="/"
                            data-section="home"
                        >
                            <HiOutlineMenu width={36} height={24} className={'menu-container__icon'}/>
                            Главная
                        </a>

                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-item-with-submenu">
                            <a
                                className={clsx({'active': activeSection === item.id})}
                                href={`#${item.id}`}
                                onClick={(e) => handleClick(e, item.id)}
                            >
                                {item.icon && (
                                    <Image
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        className="menu-container__icon"
                                        alt="icon"
                                    />
                                )}
                                {item.label}
                            </a>

                            {item.submenu && (
                                <div className="submenu">
                                    {item.submenu.map((sub) => {

                                        if (sub.type === "link" && typeof sub.target === "string") {
                                            return (
                                                <a
                                                    key={v4()}
                                                    href={sub.target}
                                                    onClick={closePopup}
                                                >
                                                    {sub.label}
                                                </a>
                                            );
                                        }

                                        if (sub.type === "popup") {
                                            return (
                                                <a
                                                    key={v4()}
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        closePopup?.();
                                                        openPopup(sub.target);
                                                    }}
                                                >
                                                    {sub.label}
                                                </a>
                                            );
                                        }

                                        return null;
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

            </Container>
        </div>
    );
}

export const Menu: React.FC<Props> = ({className}) => {
    const {openPopup, closePopup} = usePopupStore();
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        if (isMobile) setDeviceType("mobile");
        else if (isDesktop) setDeviceType("desktop");
    }, []);

    if (deviceType === "mobile") {
        return (
            <div onClick={() => openPopup(<MenuJSX closePopup={closePopup}/>)} className={'open-menu-button'}>
                <GiHamburgerMenu/>
            </div>
        );
    }

    return <MenuJSX/>;
};
