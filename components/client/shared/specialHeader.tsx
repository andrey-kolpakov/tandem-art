//specialHeader.tsx
import React from 'react';
import clsx from 'clsx';

import Image from 'next/image'

import './styles/specialHeader.scss'

interface Props {
    className?: string;
    header: string;
    subheader: string;
}

export const SpecialHeader: React.FC<Props> = ({className, header, subheader}) => {
    return (
        <div className={clsx(className, 'special-header-container')}>
            <Image src={'/images/elephant.jpg'} width={100} height={70} alt={'special-header'}/>
            <div>
                <div className={'special-subheader'}>{subheader}</div>
                <h2 className={'special-header'}>{header}</h2>
            </div>
        </div>
    );
};
