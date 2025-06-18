'use client'

//footer.tsx
import React from 'react';

import Link from 'next/link';

import {Container} from '../index'

import './styles/footer.scss'
import {scrollToElement} from "@/utils/scrollToElement";
import { usePopupStore } from "@/store/popupStore";
import Image from "next/image";

export const Footer: React.FC = ({}) => {
    const { openPopup, closePopup } = usePopupStore();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (closePopup) closePopup(); // Закрываем попап после клика
        scrollToElement(e, id);
    };

    return (
        <div className={'footer-background'}>
            <Container classNameOuter={'footer--container'} marginNone={true}>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-column footer-left">

                            <p>© 2020-2025. Все права защищены</p>
                            <div className="footer-description tp-thin">
                                {/*<p>Интернет-магазин Vasilisav Cashmere </p>*/}
                                {/*<p> ИП Круглоголов Игорь Николаевич</p>*/}
                                {/*<p>ИНН 503808237151</p>*/}
                                {/*<p>Адрес: ул. Мустафы Озтюрка 11 А, офис 1</p>*/}
                            </div>
                            <Link className="footer-rights" href="/privacy-policy">Политика конфиденциальности</Link>
                        </div>

                        <div className="footer-column footer-middle">
                            <div className="footer-menu">
                                <h4>Меню сайта</h4>
                                {/*<ul>*/}
                                {/*    <li>*/}
                                {/*        <Link href="/" className={'tp-thin'}>Главная</Link>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <Link href="/about" className={'tp-thin'}>О нас</Link>*/}
                                {/*    </li>*/}

                                {/*    <li>*/}
                                {/*        <Link href="/projects-list" className={'tp-thin'}>Наши работы</Link>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}

                                <a href="#wideformatprint" className={'tp-thin'} onClick={(e) => handleClick(e, "wideformatprint")}>
                                    Широкоформатная печать
                                </a>
                                <a href="#stickers" className={'tp-thin'} onClick={(e) => handleClick(e, "stickers")}>
                                    Стикеры
                                </a>
                                <a href="#interiorprint" className={'tp-thin'} onClick={(e) => handleClick(e, "interiorprint")}>
                                    Интерьерная печать
                                </a>
                                <a href="#contacts" className={'tp-thin'} onClick={(e) => handleClick(e, "contacts")}>
                                    Контакты
                                </a>
                            </div>
                        </div>

                        <div className="footer-column footer-right">
                            <div className="footer-contacts">
                                <h4>Контакты</h4>
                                <div>
                                    <h4>Телефон:</h4>

                                    <a href="tel:+77017858874" className={'tp-thin'}>+7 (701) 785 88 74</a>
                                    <a href="tel:+77272740278" className={'tp-thin'}>+7 (727) 274 02 78</a>
                                    <a href="tel:+77272750507" className={'tp-thin'}>+7 (727) 275 05 07</a>
                                </div>

                                <div>
                                    <h4>Email:</h4>

                                    <a href="mailto:plus_tandem@mail.ru" className={'tp-thin'}>plus_tandem@mail.ru</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>

    );
};
