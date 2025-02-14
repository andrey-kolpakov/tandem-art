'use client'

//productsList.tsx
import React from 'react';

import {Product} from '@/types/types'
import {usePopupStore} from "@/store/popupStore";

import './styles/productList.scss'
import {ProductCard} from '../index'

interface Props {
    productsData: Product[]
}

export const ProductsList: React.FC<Props> = ({productsData}) => {
    // console.log(productsData)
    const {openPopup} = usePopupStore();

    return (
        <div className="product-list">
            {productsData.map((product, index) => {
                return (
                    <div key={index} style={{backgroundImage: `url(${product.imageUrl})`}} className="product-list__item" onClick={evt => openPopup(<ProductCard itemData={product}/>)}>
                        <h3>{product.title}</h3>

                    </div>
                )
            })}
        </div>
    );
};
