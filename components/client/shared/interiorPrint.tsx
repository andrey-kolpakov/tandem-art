//interiorPrint.tsx
import React from 'react';
import clsx from 'clsx';
import {SpecialHeader, VerticalCard} from "@/components/client";

interface Props {
    className?: string;
}

export const InteriorPrint: React.FC<Props> = ({className}) => {
    const cards = [
        {
            header: "Печать на холсте",
            image: "/images/interior-print/1.jpg",
            text: "Интерьерная печать фотографий, постеров, репродукций и других изображений на холсте с натяжкой на подрамник",
            link: "/wide-format-printing"
        },
        {
            header: "Печать на обоях",
            image: "/images/interior-print/2.jpg",
            text: "Печать на обоях - это возможность сделать интерьер неповторимым, отвечающим именно вашему вкусу.",
            link: "/wide-format-printing"
        },
        {
            header: "Печать плакатов",
            image: "/images/interior-print/3.jpg",
            text: "Плакаты - один из самых популярных и недорогих рекламных носителей.",
            link: "/wide-format-printing"
        },
        {
            header: "Таблички и стенды",
            image: "/images/interior-print/4.jpg",
            text: "Изготавливаем таблички и стенды различного вида.",
            link: "/wide-format-printing"
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
