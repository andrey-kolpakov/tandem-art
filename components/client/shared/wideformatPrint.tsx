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
            image: "/images/wide-format/4.jpg",
            text: "высокого качества на всех видах материалов",
            link: "/wide-format-printing"
        },
        {
            header: "Стикеры, наклейки, этикетки, стикерпаки",
            image: "/images/wide-format/3.jpg",
            text: "от одного экземпляра любой формы для любых целей",
            link: "/wide-format-printing"
        },
        {
            header: "Услуги плоттерной резки",
            image: "/images/wide-format/2.jpg",
            text: "высечка наклеек, резка оракала, изготовление трафаретов",
            link: "/wide-format-printing"
        },
        {
            header: "Мобильные стенды",
            image: "/images/wide-format/1.jpg",
            text: "x-конструкции, roll-up",
            link: "/wide-format-printing"
        }
    ];

    return (
        <div className={clsx(className, '')}>
            <SpecialHeader header={'Широкоформатная печать'}/>
            {/*<p>Широкоформатная печать — это сочетание качества, скорости и универсальности. Современные технологии*/}
            {/*    позволяют создавать яркие и долговечные изображения на различных материалах, будь то баннеры, оракал,*/}
            {/*    фотобумага или холсты. */}
            {/*</p>*/}
            <br/>

            <div className={'vertical-cards-container'}>
                {cards.map((el, index) => (
                    <VerticalCard key={`vertical-card__${index}`} cardInfo={el}/>
                ))}
            </div>
        </div>
    );
};
