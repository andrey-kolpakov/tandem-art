//productCard.tsx
import React from 'react';
import clsx from 'clsx';

import './styles/productCard.scss'
import {Product} from '@/types/types'

import {Form} from '../index'

import {submitForm} from "@/actions/index";

interface Props {
    className?: string;
    itemData: Product
}

export const ProductCard: React.FC<Props> = ({className, itemData}) => {
    // console.log(itemData)

    return (
        <div className={clsx(className, 'product-card')}>
            <div className={'product-card__image'} style={{backgroundImage: `url(${itemData.imageUrl})`}}>

            </div>

            <div className={'product-card__content'}>
                <h2>
                    {itemData.title}
                </h2>
                <p>
                    {itemData.description}
                </p>

                <Form submitAction={submitForm}/>
            </div>


        </div>
    );
};
