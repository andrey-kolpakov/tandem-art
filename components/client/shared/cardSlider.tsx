'use client'

//cardSlider.tsx
import React from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
    images: string[];
    size: { width: number, height: number };
}

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, EffectFade} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

export const CardSlider: React.FC<Props> = ({className, images, size}) => {
    if (size.width === 0) {
        return ''
    }

    // console.log(images)

    const delayRandom = Math.floor(Math.random() * 5000) + 5000

    return (
        <Swiper
            slidesPerView={1}
            modules={[Autoplay, EffectFade]}
            loop={true}
            effect={'fade'}
            autoplay={
                {
                    delay: delayRandom,
                }
            }
            className={'swiper-slider-card'}
            style={{width: `${size.width}px`, height: `${size.height}px`}}>

            {images.map((el: string, index: number) => {
                // console.log(size)

                return (
                    <SwiperSlide key={`swiper-card__${index}`} style={{backgroundImage: `url(${el})`}}>

                    </SwiperSlide>)
            })}

        </Swiper>
    );
};
