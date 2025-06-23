//wideformatPrint.tsx
import React from 'react';
import clsx from 'clsx';

import {Form, SpecialHeader, VerticalCard} from '../index'

import './styles/wideFormatPrint.scss'
import Image from "next/image";
import {submitForm} from "@/actions";

interface Props {
    className?: string;
}

export const wideFormatCards = [
    {
        header: "ШИРОКОФОРМАТНАЯ ПЕЧАТЬ",
        image: "/images/wide-format/4.webp",
        text: "высокого качества на всех видах материалов",
        link: "/wide-format-printing",
        newTab: true,
    },
    {
        header: "Услуги плоттерной резки",
        image: "/images/wide-format/2.webp",
        text: "высечка наклеек, резка оракала, изготовление трафаретов",
        link: "/wide-format-printing",
        newTab: false,
        popupContent:
            <div className={'interior-print__popup-form'}>
                <img src={'/images/wide-format/2.webp'} width={200} height={300} alt={"Печать на холсте"}/>

                <div className={'interior-print__popup-form-text'} >
                    {/*<h2>Плоттерная резка</h2>*/}
                    <p>Плоттерная резка – это современный технологический процесс, который осуществляется с помощью специального оборудования, известного как режущий плоттер. Этот метод позволяет с высокой точностью и аккуратностью вырезать разнообразные материалы, такие как самоклеющаяся пленка и бумага. </p>
                    <p>Благодаря этому, плоттерная резка нашла широкое применение в различных сферах, включая производство рекламных материалов, оформление интерьеров, создание наклеек и графических элементов.</p>
                    <p>Основные преимущества плоттерной резки – это высокая точность, скорость и возможность массового производства. Технология используется для резки самоклеющейся пленки, что позволяет создавать яркие и привлекательные вывески, логотипы, декоративные элементы для интерьеров и экстерьеров, а также автомобильные наклейки.</p>
                    <p>Изготовление наклеек плоттером позволяет получить продукцию любой формы и сложности, что особенно ценно для дизайнеров и рекламных агентств.</p>

                    <Form submitAction={submitForm}/>
                </div>
            </div>
    },
    {
        header: "Стикерпаки",
        image: "/images/wide-format/3.webp",
        text: "от 1 экземпляра любой формы для любых целей",
        link: "/sticker-pack",
        newTab: true,
    },

    {
        header: "Мобильные стенды",
        image: "/images/wide-format/1.webp",
        text: "x-конструкции, roll-up",
        link: "/wide-format-printing",
        newTab: false,
        popupContent:
            <div className={'interior-print__popup-form'}>
                <img src={"/images/wide-format/1.webp"} width={200} height={300} alt={"Печать на холсте"}/>

                <div className={'interior-print__popup-form-text'} >
                    <p>Roll Up (Ролл ап) и Х-конструкция – это мобильные стенды, которые собираются и разбираются за минуту. Незаменимые инструменты рекламы, выставок, оформления входной группы и т.д.
                        Конструкции очень мобильны, они легко перемещаются с точки на точку, замена информации подразумевает лишь печать нового полотна и не сложная замена. Поставляеются в чехле.
                    </p>
                    <p>Roll Up (Ролл ап) и Х-конструкцию можно использовать внутри, снаружи помещений. Они мобильны, благодаря чему при решении о проведении кампании в ином месте или ухудшении погодных условий их можно быстро свернуть и переместить без каких-либо неудобств.</p>
                    <p>Их можно установить в любом удобном месте. Это может быть центр, угол в помещении определённого назначения. При этом такая реклама не займёт много места, так как конструкции Roll Up и Х-паучка уже сами по себе разработаны с учётом возможного монтажа при стеснённых условиях.</p>

                    <Form submitAction={submitForm}/>
                </div>
            </div>
    }
];

export const WideformatPrint: React.FC<Props> = ({className}) => {


    return (
        <div className={clsx(className, '')}>
            <SpecialHeader header={'Широкоформатная печать'}/>
            {/*<p>Широкоформатная печать — это сочетание качества, скорости и универсальности. Современные технологии*/}
            {/*    позволяют создавать яркие и долговечные изображения на различных материалах, будь то баннеры, оракал,*/}
            {/*    фотобумага или холсты. */}
            {/*</p>*/}
            <br/>

            <div className={'vertical-cards-container'}>
                {wideFormatCards.map((el, index) => (
                    <VerticalCard key={`vertical-card__${index}`} cardInfo={el}/>
                ))}
            </div>
        </div>
    );
};
