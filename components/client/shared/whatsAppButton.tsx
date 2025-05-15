//whatsAppButton.tsx
import React from 'react';

import Link from 'next/link';

import './styles/whatsAppButton.scss'
import { MdOutlineWhatsapp } from "react-icons/md";

export const WhatsAppButton = ({}) => {
    return (
        <Link href={'https://wa.me/77017858874'} className={'whatsapp-button'} aria-label={'WhatsApp'}>
            <MdOutlineWhatsapp />
        </Link>
    );
};
