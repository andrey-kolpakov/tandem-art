//menu.tsx
import React from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
}

export const Menu: React.FC<Props> = ({className}) => {
    return (
        <nav className={clsx(className, '')}>

        </nav>
    );
};
