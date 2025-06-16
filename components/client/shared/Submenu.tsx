import React, {useState, useRef} from 'react';
import clsx from 'clsx';
import Logo from '@/components/assets/images/logo2.svg';
import './styles/Submenu.scss';
import {Container} from '@/components/client/shared/container';
import {MdLocationPin} from 'react-icons/md';
import {FaWhatsapp} from 'react-icons/fa';
import {PiTelegramLogo} from 'react-icons/pi';
import {FaInstagram} from 'react-icons/fa6';
import Link from 'next/link';

interface Props {
    className?: string;
}

export const Submenu: React.FC<Props> = ({className}) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setPopupVisible(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setPopupVisible(false);
        }, 300);
    };

    return (
        <Container className="submenu-container" classNameOuter="submenu-container-outer">
            <Logo width={70} height={50} alt="special-header"/>

            <div className="submenu-address">
                <MdLocationPin/>
                г. Алматы, ул. Мустафы Озтюрка 11а, офис 1
            </div>

            <div className="submenu-icons">
                <Link href="https://wa.me/77017858874" target="_blank" className="submenu-icons__whatsApp">
                    <FaWhatsapp size={25}/>
                </Link>
                <Link href="https://t.me/tandemart_kz" target="_blank" className="submenu-icons__telegram">
                    <PiTelegramLogo size={25}/>
                </Link>
                <Link href="https://instagram.com/tandemart_kz" target="_blank" className="submenu-icons__instagram">
                    <FaInstagram size={25}/>
                </Link>
            </div>

            <div
                className="phone-link-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a href="tel:+77017858874" className="phone-link">
                    +7 (701) 785-88-74
                </a>
                {isPopupVisible && (
                    <div
                        className="phone-popup"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="popup-button">Позвонить</button>
                        <div className="popup-numbers">
                            <a href="tel:+77272750507" >+7 (727) 275-05-07</a>
                            <a href="tel:+77272740278" >+7 (727) 274-02-78</a>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};
