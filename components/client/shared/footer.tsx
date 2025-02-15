//footer.tsx
import React from 'react';

import Link from 'next/link';

import {Container} from '../index'

import './styles/footer.scss'

export const Footer: React.FC = ({}) => {
    return (
        <div className={'footer-background'}>
            <Container classNameOuter={'footer--container'}>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-column footer-left">

                            <p>© 2020-2025. Все права защищены</p>
                            <div className="footer-description tp-thin">
                                <p>Интернет-магазин Vasilisav Cashmere </p>
                                <p> ИП Круглоголов Игорь Николаевич</p>
                                <p>ИНН 503808237151</p>
                                <p>Адрес: ул. Мустафы Озтюрка 11 А, офис 1</p>


                            </div>
                            <Link className="footer-rights" href="/privacy-policy">Политика конфиденциальности</Link>
                        </div>

                        <div className="footer-column footer-middle">
                            <div className="footer-menu">
                                <h4>Меню сайта</h4>
                                <ul>
                                    <li>
                                        <Link href="/" className={'tp-thin'}>Главная</Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className={'tp-thin'}>О нас</Link>
                                    </li>

                                    <li>
                                        <Link href="/projects-list" className={'tp-thin'}>Наши работы</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-column footer-right">
                            <div className="footer-contacts">
                                <h4>Контакты</h4>
                                <div>
                                    <h4>Телефон:</h4>

                                    <a href="tel:+77272740278" className={'tp-thin'}>+7 (727) 274-02-78</a>
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
