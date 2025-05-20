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

export const WideformatPrint: React.FC<Props> = ({className}) => {
    const cards = [
        {
            header: "ШИРОКОФОРМАТНАЯ ПЕЧАТЬ",
            image: "/images/wide-format/4.jpg",
            text: "высокого качества на всех видах материалов",
            link: "/wide-format-printing",
            newTab: true,
        },
        {
            header: "Услуги плоттерной резки",
            image: "/images/plotter.jpg",
            text: "высечка наклеек, резка оракала, изготовление трафаретов",
            link: "/wide-format-printing",
            newTab: false,
            popupContent:
                <div className={'interior-print__popup-form'}>
                    <Image src={'/images/plotter.jpg'} width={200} height={250} alt={"Печать на холсте"}/>

                    <div className={'interior-print__popup-form-text'} style={{fontSize: '14px'}}>
                        {/*<h2>Плоттерная резка</h2>*/}
                        <p>Высечка наклеек</p>
                        <p>Резка оракала</p>
                        <p>Изготовление трафаретов</p>

                        <Form submitAction={submitForm}/>
                    </div>
                </div>
        },
        {
            header: "Стикерпаки",
            image: "/images/wide-format/3.jpg",
            text: "от 1 экземпляра любой формы для любых целей",
            link: "/sticker-pack",
            newTab: true,
        },

        {
            header: "Мобильные стенды",
            image: "/images/x-stand.jpg",
            text: "x-конструкции, roll-up",
            link: "/wide-format-printing",
            newTab: false,
            popupContent:
                <div className={'interior-print__popup-form'}>
                    <Image src={"/images/x-stand.jpg"} width={200} height={300} alt={"Печать на холсте"}/>

                    <div className={'interior-print__popup-form-text'} style={{fontSize: '14px'}}>
                        <p>х-конструкции</p><br/>
                        <p>roll-up</p>


                        <Form submitAction={submitForm}/>
                    </div>
                </div>
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
