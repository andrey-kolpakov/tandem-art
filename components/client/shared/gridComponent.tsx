'use client';

import React, {useRef, useEffect, useState} from 'react';
import clsx from 'clsx';

import {CardSlider} from '../index';
import {scrollToElement} from "@/utils/scrollToElement"; //

import './styles/gridComponent.scss';

import Image from 'next/image';
import {isDesktop, isMobile} from "react-device-detect";
import Link from "next/link";

// import sticker from '@/components/assets/images/icons-home/sticker.svg'
// import contacts from '@/components/assets/images/icons-home/phone-call.svg'
// import wideformatprint from '@/components/assets/images/icons-home/plotter.svg'
// import portfolio from '@/components/assets/images/icons-home/portfolio.svg'
// import poly from '@/components/assets/images/icons-home/copy.svg'

interface GridItem {
    text?: string;
    link: string;
    type: 'link' | 'slider';
    order: number;
    items?: string[];
    isEmpty?: boolean;
    img?: string;
}

interface Props {
    className?: string;
}

const gridData: GridItem[] = [
    {
        text: "Широкоформатная печать",
        link: "wideformatprint",
        type: 'link',
        order: 2,
        img: '/images/icons-home/plotter.svg'
    },
    {text: "Полиграфия", link: "polygraph", type: 'link', order: 12, img: '/images/icons-home/copy.svg'},
    {text: "Стикеры", link: "stickers", type: 'link', order: 9, img: '/images/icons-home/sticker.svg'},
    {text: "Портфолио", link: "portfolio", type: 'link', order: 8, img: '/images/icons-home/portfolio.svg'},
    {text: "Контакты", link: "contacts", type: 'link', order: 17, img: '/images/icons-home/phone-call.svg'},
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 6
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 7
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 10
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 11
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 15
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 16
    },
];

const totalCells = 18;
const gridCells: GridItem[] = Array.from({length: totalCells}, (_, index) => {
    const item = gridData.find((el) => el.order === index + 1);
    return item ? {...item, isEmpty: false} : {link: "#", type: 'link', order: index + 1, isEmpty: true};
});

export const GridComponent: React.FC<Props> = ({className}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [deviceType, setDeviceType] = useState("");
    const [cellSize, setCellSize] = useState({width: 0, height: 0});

    useEffect(() => {
        if (isMobile) setDeviceType("mobile");
        else if (isDesktop) setDeviceType("desktop");
    }, []);

    useEffect(() => {
        if (gridRef.current) {
            const {width, height} = gridRef.current.getBoundingClientRect();

            // console.log(gridRef.current.getBoundingClientRect())
            setCellSize({width: width / 6, height: height / 3});
        }
    }, [deviceType]);


    return (


        <>
            <div className={'header-content'}>
                <Image src={'/images/logo.webp'} width={200} height={100} alt={'logo'}/>

                <div>
                    <h1>Мы не нуждаемся в рекламе. Реклама нуждается в нас.</h1>
                    <h2>Признание Вами высокого качества нашей работы - лучшая реклама.</h2>
                </div>
            </div>

            {deviceType === 'desktop' ?
                <div className={clsx("grid-container", className)} ref={gridRef}>
                    {gridCells.map((cell, index) => {
                        // if (cell.type === 'slider'){
                        //     console.log(gridRef.current)
                        // }

                        return (<div
                            key={`grid-element__${index}`}
                            className={clsx("grid-item", {
                                empty: cell.isEmpty,
                                filled: !cell.isEmpty,
                                slider: cell.type === 'slider'
                            })}
                            onClick={(e) => {
                                if (!cell.isEmpty && cell.type === "link") {
                                    scrollToElement(e, cell.link);
                                }
                            }}
                        >
                            {cell.type === 'slider' ? (
                                <div className="slider-placeholder">
                                    <CardSlider images={cell.items || []} size={cellSize}/>
                                </div>
                            ) : (

                                <div className={'grid-item__info-link'}>
                                    {cell.img ? <Image src={cell.img} alt={'check'} width={70} height={70}/> : ''}
                                    {cell.text}
                                </div>

                            )}
                        </div>)
                    })}
                </div> :

                <div className={'header-links'}>
                    {
                        gridData.map((el, index) => {

                            if (el.type === 'link') {
                                return (
                                    <div key={`header-links__link-${index}`} className={'header-links__link'}>
                                        <Link href={el.link}>{el.text}</Link>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            }
        </>
    );
};