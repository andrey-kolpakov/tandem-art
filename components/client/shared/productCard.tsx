//productCard.tsx
import React from 'react';
import clsx from 'clsx';

import './styles/productCard.scss'
import {Product} from '@/types/types'

interface Props {
    className?: string;
    itemData: Product
}

export const ProductCard: React.FC<Props> = ({className, itemData}) => {
    console.log(itemData)

    return (
        <div className={clsx(className, 'product-card')}>


            <h2>
                {itemData.title}
            </h2>
            <p>
                {itemData.description}
            </p>

        </div>
    );
};
