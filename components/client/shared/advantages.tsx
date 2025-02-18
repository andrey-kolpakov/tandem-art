//advantages.tsx
import React from 'react';
import clsx from 'clsx';

import { GoThumbsup } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";

import './styles/advantages.scss';

interface Props {
    className?: string;
}

export const Advantages: React.FC<Props> = ({className}) => {
    return (
        <div className={clsx(className, 'advantages-component')}>
            <div className="advantages-header">
                <h2>В чем наши преимущества</h2>
                <p>основных - три. Об остальных - при личной встрече)</p>
            </div>


            <div className="advantages-container">
                <div className="advantages-item">
                    <GoThumbsup className={'advantages-item__icon'}/>
                    <h3>Качество</h3>
                    <p>достойное Вас. Мы постараемся, чтобы Вы остались довольны нашей работой.</p>
                </div>
                <div className="advantages-item">
                    <IoTimeOutline className={'advantages-item__icon'}/>
                    <h3>Своевременно</h3>
                    <p>Одной проблемой в вашей жизни стало меньше - Вы успеете. Мы все сделаем вовремя и быстро.</p>
                </div>
                <div className="advantages-item">
                    <TbPigMoney className={'advantages-item__icon'}/>
                    <h3>Доступно</h3>
                    <p>Мы сэкономим Ваше время и увеличим Ваш доход. Цены от производителя - лучше не бывает.</p>
                </div>
            </div>
        </div>
    );
};
