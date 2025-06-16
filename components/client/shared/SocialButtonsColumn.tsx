import React from 'react';
import Link from 'next/link';
import './styles/socialButtonsColumn.scss';

import { MdOutlineWhatsapp } from 'react-icons/md';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa6';

export const SocialButtonsColumn = () => {
    return (
        <div className="social-buttons-column">
            <Link
                href="https://wa.me/77017858874"
                className="social-button whatsapp"
                aria-label="WhatsApp"
                target="_blank"
            >
                <MdOutlineWhatsapp />
            </Link>
            <Link
                href="https://t.me/Tandem_art"
                className="social-button telegram"
                aria-label="Telegram"
                target="_blank"
            >
                <PiTelegramLogo />
            </Link>
            <Link
                href="https://instagram.com/tandemart_kz"
                className="social-button instagram"
                aria-label="Instagram"
                target="_blank"
            >
                <FaInstagram />
            </Link>
        </div>
    );
};
