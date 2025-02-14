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
                            {/*<div className="footer-logo">*/}
                            {/*    <img src={logoSimple} alt="Company logo" className="company-logo" />*/}
                            {/*</div>*/}
                            <p className="footer-description tp-thin">
                                Мы уже много лет занимаемся тем что помогаем людям реализовывать их идеи в виде красивого оформления. Наша команда состоит из проффесионалов своего дела. Мы несем 100% ответсвенность за свою работу. И делаем качественно!
                            </p>
                            <Link className="footer-rights" href="/privacy-policy">Политика конфиденциальности</Link>
                        </div>

                        <div className="footer-column footer-middle">
                            <div className="footer-menu">
                                <h4>Меню сайта</h4>
                                <ul>
                                    <li>
                                        <Link href="/">Главная</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">О нас</Link>
                                    </li>

                                    <li>
                                        <Link href="/projects-list">Наши работы</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-column footer-right">
                            <div className="footer-contacts">
                                <h4>Контакты</h4>
                                <p>
                                    Телефон:
                                    <br/>
                                    <a href="tel:+77012212212">+7 (701) 221 2212</a>
                                </p>

                                <p>
                                    Email:
                                    <br/>
                                    <a href="mailto:director@saras.kz">director@saras.kz</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>

    );
};
