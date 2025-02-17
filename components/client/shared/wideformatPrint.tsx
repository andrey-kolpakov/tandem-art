//wideformatPrint.tsx
import React from 'react';
import clsx from 'clsx';

import {SpecialHeader, VerticalCard} from '../index'

import './styles/wideFormatPrint.scss'

interface Props {
    className?: string;
}

export const WideformatPrint: React.FC<Props> = ({className}) => {
    const cards = [
        {
            header: "ШИРОКОФОРМАТНАЯ ПЕЧАТЬ",
            image: "/images/stickers/1.jpg",
            text: "на оракале, баннере, фотобумаге, бэклите, перфорации, холсте",
            link: "/wide-format-printing"
        },
        {
            header: "УСЛУГИ ПЛОТТЕРНОЙ РЕЗКИ",
            image: "/images/stickers/1.jpg",
            text: "дублирующие номера, трафареты, отрисовка шаблонов",
            link: "/plotter-cutting"
        },
        {
            header: "МОНТАЖ И ПЕЧАТЬ",
            image: "/images/stickers/1.jpg",
            text: "roll-up, x-конструкций, pop-up",
            link: "/installation-and-printing"
        },
        {
            header: "ПЕЧАТЬ ВЫСОКОГО КАЧЕСТВА",
            image: "/images/stickers/1.jpg",
            text: "постеров, модульных картин, плакатов",
            link: "/high-quality-printing"
        }
    ];

    return (
        <div className={clsx(className, '')}>
            <SpecialHeader subheader={'Широкоформатная печать'} header={'Достоинства'}/>
            <p>Широкоформатная печать — это сочетание качества, скорости и универсальности. Современные технологии
                позволяют создавать яркие и долговечные изображения на различных материалах, будь то баннеры, оракал,
                фотобумага или холсты. </p>
            <br/>

            <div className={'vertical-cards-container'}>
                {cards.map((el, index) => (
                    <VerticalCard key={`vertical-card__${index}`} cardInfo={el}/>
                ))}
            </div>
        </div>
    );
};
