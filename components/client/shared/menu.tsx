//menu.tsx
import React from 'react';
import clsx from 'clsx';

import {Navlink} from '../ui/navlink'



import '@/components/client/shared/styles/menu.scss'

interface Props {
    className?: string;
}

export const Menu: React.FC<Props> = ({className}) => {

    return (

        <nav className={clsx(className, '')}>
            <Navlink href='/public' >Главная</Navlink>
            <Navlink href='/about'>О нас</Navlink>
            <Navlink href='/stickers' >Стикеры</Navlink>
            <Navlink href='/products' >Услуги</Navlink>
            <Navlink href='/contacts'>Контакты</Navlink>
        </nav>
    );
};
