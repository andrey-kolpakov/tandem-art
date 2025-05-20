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
            text: <div>
                <p>Интерьерная печать фотографий, репродукций на холсте, с натяжкой на подрамник</p>
            </div>,
            link: "/canvas-printing",
            newTab: true,
        },
        {
            header: "Таблички, стенды и указатели",
            image: "/images/interior-print/2.jpg",
            text: <div>
                <p>Основа ПВХ 5-10мм</p>
                <p>Фотопечать 1440 dpi</p>
                <p>Крепление и кайма на выбор</p>


                <p>и другие</p>
            </div>,
            link: "/wide-format-printing",
            newTab: false,
            popupContent:
                <div className={'interior-print__popup-form'}>
                    <Image src={'/images/interior-print/2.jpg'} width={200} height={200} alt={"Печать на холсте"}/>

                    <div className={'interior-print__popup-form-text'} >
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
        },
        {
            header: "Постеры, плакаты и афиши",
            image: "/images/interior-print/3.jpg",
            text: <div>
                <p>Плакаты — один из самых популярных и недорогих рекламных носителей.</p>
            </div>,
            link: "/billboard-printing",
            newTab: true,
        },
        {
            header: "Фотопечать на обоях",
            image: "/images/interior-print/4.jpg",
            text: <div>
                <p>Печать на обоях — это возможность сделать интерьер неповторимым, отвечающий именно вашему вкусу.</p>
            </div>,
            link: "/background-printing",
            newTab: false,
            popupContent:
                <div className={'interior-print__popup-form'}>
                    <Image src={'/images/interior-print/4.jpg'} width={200} height={300} alt={"Печать на холсте"}/>

                    <div className={'interior-print__popup-form-text'}>
                        <h2>Печать на обоях</h2>
                        <p>Печать на обоях – это возможность сделать интерьер неповторимым, отвечающим именно вашему вкусу.</p>

                        <p>С помощью фотообоев можно создать пространство с эксклюзивным дизайном, обновить интерьер без больших затрат, скорректировать недостатки помещения и неровности стен.</p>

                        <p>У нас вы можете заказать изготовление фотообоев с любым сюжетом, орнаментом, рисунком или даже с фотографией из семейного архива.</p>

                        <Form submitAction={submitForm}/>
                    </div>
                </div>
        },


    ];

    return (
        <div className={clsx(className, '')}>
            <SpecialHeader header={'Интерьерная печать'} subheader={'Картины, постеры, обои'}/>

            <br/>

            <div className={'vertical-cards-container '}>
                {cards.map((el, index) => (
                    <VerticalCard key={`vertical-card__${index}`} cardInfo={el}/>
                ))}
            </div>
        </div>
    );
};
