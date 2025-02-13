//footer.tsx
import React from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({className}) => {
    return (
        <div className={clsx(className, '')}>

        </div>
    );
};
