//header.tsx
import React from 'react';

import Image from 'next/image';
import Logo from '../../assets/images/logo.png';

import {Menu, Container} from '../index'

import {IoLocationOutline} from "react-icons/io5";
import {MdAccessTime, MdOutlineLocalPhone} from "react-icons/md";

import '@/components/client/shared/styles/header.scss'

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <>


            {/*<Container marginNone={true} className={'container--header'}>*/}
            {/*    <div className="header-main-info">*/}

            {/*        <Image src={Logo} alt={'Лого'}/>*/}

            {/*        <div className="header-main-info__info-item">*/}
            {/*            <IoLocationOutline className="info-item__icon"/>*/}

            {/*            <div className="info-item__content">*/}
            {/*                <h3>ул. Мустафы Озтюрка 11 А, офис 1</h3>*/}
            {/*                <div className="tp-thin tp-s">(ул. Ауэзова, уг. ул. Джандосова)</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="header-main-info__info-item">*/}
            {/*            <MdOutlineLocalPhone className="info-item__icon"/>*/}

            {/*            <div className="info-item__content">*/}
            {/*                <h3>+7 (727) 274-02-78</h3>*/}
            {/*                <div className="tp-thin tp-s">plus_tandem@mail.ru</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="header-main-info__info-item">*/}
            {/*            <MdAccessTime className="info-item__icon"/>*/}

            {/*            <div className="info-item__content">*/}
            {/*                <h3>Пн - Сб 9.00 - 19.00</h3>*/}
            {/*                <div className="tp-thin tp-s">Вс выходной</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}


            {/*</Container>*/}
            <Menu/>
         </>
    );
};
