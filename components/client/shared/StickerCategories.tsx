'use client'

import Image from 'next/image'
import Link from 'next/link'
import './styles/StickerCategories.scss'
import {usePopupStore} from "@/store/popupStore";
import React from "react";
import {Form} from "@/components/client";
import {submitForm} from "@/actions";

const categories = [
    { title: 'Стикеры виниловые', img: '/images/stickers-categories/vinyl.jpg' },
    { title: 'Стикеры с ламинацией', img: '/images/stickers-categories/laminate.jpg' },
    { title: 'Наклейки на прозрачном оракале', img: '/images/stickers-categories/oracal.jpg' },
    { title: 'Наклейки для продуктов', img: '/images/stickers-categories/food.jpg' },
    { title: 'Стикеры зеркального отображения', img: '/images/stickers-categories/mirror.jpg' },
    { title: 'Предупреждающие', img: '/images/stickers-categories/warning.jpg' },
    { title: 'Двухсторонние наклейки', img: '/images/stickers-categories/double.jpg' },
    { title: 'Для маркировки', img: '/images/stickers-categories/marking.jpg' },
    { title: 'Наклейки на автомобиль', img: '/images/stickers-categories/car.jpg' },
    { title: 'Брендирование', img: '/images/stickers-categories/branding.jpg' },
    { title: 'Стикеры на витрины, окна', img: '/images/stickers-categories/windows.jpg' },
    { title: 'Этикетки, штрих-код', img: '/images/stickers-categories/barcode.jpg' },
    { title: 'Для банкоматов и терминалов', img: '/images/stickers-categories/atm.jpg' },
    { title: 'Наклейки на стену', img: '/images/stickers-categories/wall.jpg' },
    { title: 'Наклейки на ноутбук', img: '/images/stickers-categories/laptop.jpg' },
    { title: 'Наклейки на пол', img: '/images/stickers-categories/floor.jpg' },
]

const Component = () => {
    return(
        <div className={'interior-print__popup-form'}>
            <Image src={'/images/sticker-popup-background.jpg'} width={200} height={300} alt={"Печать на холсте"}/>

            <div className={'interior-print__popup-form-text'}>
                <h2 style={{fontSize: '12px'}}>СОЗДАЁМ ТО, ЧТО ЗАПОМИНАЕТСЯ</h2>
                <section className="sticker-info" style={{fontSize: '12px'}}>
                    <p>
                        Наклейка (стикер) — это полиграфическая продукция, которая печатается на самоклеющейся плёнке.
                        Наклейка с логотипом и уникальным дизайном — отличный способ моментальной идентификации товаров.
                    </p>

                    <p>
                        Области применения разнообразны: реклама, этикетки для свечей, брендирование коробок с товарами
                        хендмейд, брендирование продукции в магазинах, на маркетплейсах. Возможность прочно закрепить
                        цветную наклейку на любой поверхности (с некоторыми ограничениями) делает её идеальным носителем
                        рекламной и идентификационной информации.
                    </p>

                    <p>
                        Современные наклейки с логотипом на заказ могут быть разных форм и размеров:
                    </p>

                    <ul>
                        <li>- Обычные прямоугольные.</li>
                        <li>- Фигурные сложных форм.</li>
                        <li>- Круглые и овальные.</li>
                        <li>- Стикерпак — лист с размещёнными на нём наклейками.</li>
                    </ul>

                    <p>Производство наклеек для продвижения — несколько интересных идей</p>

                    <p>
                        Раздавайте наклейки на выставках, мероприятиях или делайте такой подарок во время покупки.
                        Такие действия помогают людям запоминать ваш бренд и распространять о нём информацию.
                        Клейте их на коробки, пакеты, чтобы привлекать внимание потенциальных клиентов.
                    </p>
                </section>
                <Form submitAction={submitForm}/>
            </div>
        </div>
    )
}

export function StickerCategories() {
    const {openPopup} = usePopupStore();

    function onClickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()


        openPopup(<Component/>)
    }

    return (
        <div className="stickers-grid">
            {categories.map((item, index) => (
                <Link href="/stickers" key={index} className="sticker-card" onClick={e => onClickHandler(e)}>
                    <div className="sticker-image-wrapper">
                        <Image
                            src={item.img}
                            alt={`Изображение стикера`}
                            fill
                            sizes="200px"
                            className="sticker-image"
                        />
                    </div>
                    <div className="sticker-title">{item.title}</div>
                </Link>
            ))}
        </div>
    )
}
