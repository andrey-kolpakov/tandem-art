//header.tsx
import React from 'react';
import clsx from 'clsx';

import {Menu} from './menu'

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <div className={clsx(className, '')}>
            <Menu/>
        </div>
    );
};
