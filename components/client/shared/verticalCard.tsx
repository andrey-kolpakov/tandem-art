//verticalCard.tsx
import React from 'react';
import clsx from 'clsx';

import Image from 'next/image'
import Link from 'next/link'

import './styles/verticalCard.scss'

interface Props {
    className?: string;

    cardInfo: {
        header: string;
        image: string;
        text: string;
        link: string;
    }
}

export const VerticalCard: React.FC<Props> = ({className, cardInfo}) => {
    return (
        <div className={clsx(className, 'vertical-card')}>
            <Image src={cardInfo.image} width={350} height={300} alt={'special-header'} className={'vertical-card__image'}/>
            <div className={'vertical-card__text'}>

                <h3>{cardInfo.header}</h3>
                <p>{cardInfo.text}</p>

                <Link href={cardInfo.link}>узнать больше</Link>
            </div>
        </div>
    );
};
