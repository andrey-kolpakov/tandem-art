'use client'

//navlink.tsx
import React from 'react';
import clsx from 'clsx';

import Link from 'next/link';
import {usePathname} from "next/navigation";

interface Props {
    children?: React.ReactNode;
    href: string;
}

export const Navlink: React.FC<Props> = ({href, children}:Props) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={clsx('nav-link', {
            'nav-link--active': pathname === href
        })}>
            {children}
        </Link>
    );
};
