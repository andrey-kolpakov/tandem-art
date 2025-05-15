'use client'

//verticalCard.tsx
import React from 'react';
import clsx from 'clsx';

import Image from 'next/image'
import Link from 'next/link'

import './styles/verticalCard.scss'
import {usePopupStore} from "@/store/popupStore";

interface Props {
    className?: string;

    cardInfo: {
        header: string;
        image: string;
        text: string | React.JSX.Element;
        link: string;
        popupContent?: React.JSX.Element;
        newTab?: boolean;
    }

}

export const VerticalCard: React.FC<Props> = ({className, cardInfo}) => {
    const {openPopup} = usePopupStore();

    // console.log(cardInfo.newTab)

    function onClickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()

        if (cardInfo.popupContent) {
            openPopup(cardInfo.popupContent)
        }
    }

    return (
        <div className={clsx(className, 'vertical-card')}>
            <Image src={cardInfo.image} width={350} height={300} alt={'special-header'}
                   className={'vertical-card__image'}/>
            <div className={'vertical-card__text'}>

                <h3>{cardInfo.header}</h3>
                {cardInfo.text}

                {!cardInfo.popupContent ? <Link href={cardInfo.link}>узнать больше</Link> :
                    cardInfo.newTab === false ? <Link href={'/'} onClick={e => onClickHandler(e)}>узнать больше</Link> :
                    <Link href={cardInfo.link} >узнать больше</Link>
                }
            </div>
        </div>
    );
};
