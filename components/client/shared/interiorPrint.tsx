//interiorPrint.tsx
import React from 'react';
import clsx from 'clsx';
import {SpecialHeader, VerticalCard, Form} from "@/components/client";

import {submitForm} from "@/actions/index";
import './styles/interiorPrint.scss'
import Image from 'next/image'

interface Props {
    className?: string;
}

export const InteriorPrint: React.FC<Props> = ({className}) => {

    const cards = [
        {
            header: "Печать на холсте",
            image: "/images/interior-print/1.jpg",
            text: "Интерьерная печать фотографий, постеров, репродукций и других изображений на холсте с натяжкой на подрамник",
            link: "/canvas-printing",
            newTab: true,
        },
        {
            header: "Печать на обоях",
            image: "/images/interior-print/2.jpg",
            text: "Печать на обоях - это возможность сделать интерьер неповторимым, отвечающим именно вашему вкусу.",
            link: "/background-printing",
            newTab: false,
            popupContent:
                <div className={'interior-print__popup-form'}>
                    <Image src={'/images/interior-print/2.jpg'} width={200} height={200} alt={"Печать на холсте"}/>

                    <div className={'interior-print__popup-form-text'}>
                        <h2>Печать на обоях</h2>
                        <p>Печать на обоях – это возможность сделать интерьер неповторимым, отвечающим именно вашему вкусу.</p>

                        <p><strong>С помощью фотообоев можно создать пространство с эксклюзивным дизайном, обновить интерьер без больших затрат, скорректировать недостатки помещения и неровности стен.</strong></p>

                        <p>У нас вы можете заказать изготовление фотообоев с любым сюжетом, орнаментом, рисунком или даже с фотографией из семейного архива.</p>

                        <Form submitAction={submitForm}/>
                    </div>
                </div>
        },
        {
            header: "Печать плакатов",
            image: "/images/interior-print/3.jpg",
            text: "Плакаты - один из самых популярных и недорогих рекламных носителей.",
            link: "/billboard-printing",
            newTab: true,
        },
        {
            header: "Таблички и стенды",
            image: "/images/interior-print/4.jpg",
            text: "Изготавливаем таблички и стенды различного вида.",
            link: "/wide-format-printing",
            newTab: false,
            popupContent:
                <div className={'interior-print__popup-form'}>
                    <Image src={'/images/interior-print/4.jpg'} width={200} height={200} alt={"Печать на холсте"}/>

                    <div className={'interior-print__popup-form-text'}>
                        <h2>Таблички и стенды</h2>
                        <p><strong>Изготавливаем таблички и стенды различного вида:</strong></p>

                        <p>- таблички для офиса<br/>
                            - адресные таблички<br/>
                            - навигаторы<br/>
                            - информационные стенды<br/>
                            - рекламные стенды и таблички<br/>
                            - пожарной безопасности</p>

                        <p>и другие</p>
                        <Form submitAction={submitForm}/>
                    </div>
                </div>
        }
    ];

    return (
        <div className={clsx(className, '')}>
            <SpecialHeader header={'Интерьерная печать'} subheader={'Картины, постеры, обои'}/>

            <br/>

            <div className={'vertical-cards-container'}>
                {cards.map((el, index) => (
                    <VerticalCard key={`vertical-card__${index}`} cardInfo={el}/>
                ))}
            </div>
        </div>
    );
};
