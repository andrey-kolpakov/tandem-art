'use client'

//advertSlider.tsx
import React from 'react';

import {SliderImage} from '@/types/types'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, EffectFade} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

import styles from './styles/advertSlider.module.scss'
import {v4} from 'uuid'

import Image from 'next/image'

import {
    Container,
} from "@/components/client";

interface Props {
    // images: SliderImage[]
    images: {
        imageUrl: string,
        header: string
    }[]
}


export const AdvertSlider: React.FC<Props> = ({images}) => {

    // console.log(images)

    return (


        <Swiper className={styles.swiperAvdertSlider}
            // effect={'fade'}
                modules={[
                    Autoplay,
                    // EffectFade
                ]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}

        >

            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index} style={{backgroundImage: `url(${image.imageUrl})`}}
                                 className={styles.swiperSlide}
                    >

                        <div className={styles['header-background']}
                             style={{backgroundColor: index % 2 === 0 ? 'rgba(39, 169, 212, 0.9)' : 'rgba(58, 108, 165, 0.9)'}}>
                            <Container marginNone={true} className={styles['header-background__header']}>
                                <Image src="/images/menu/stickers.webp" alt="Стикеры" width={36} height={36}/>
                                <h2>{image.header}</h2>
                            </Container>
                        </div>


                    </SwiperSlide>)
            })}

        </Swiper>

    );
};
