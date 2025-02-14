'use client'

//advertSlider.tsx
import React from 'react';
import clsx from 'clsx';

import {SliderImage} from '@/types/types'
import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

import styles from './styles/advertSlider.module.scss'

import {Container, Button} from '@/components/client'

interface Props {
    images: SliderImage[]
}

export const AdvertSlider: React.FC<Props> = ({images}) => {

    // console.log(images)

    return (


        <Swiper className={styles.swiperAvdertSlider}>

            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index} style={{backgroundImage: `url(${image.imageUrl})`}}
                                 className={styles.swiperSlide}>
                        {/*<Container>*/}
                            <h2>{image.headerText}</h2>
                            <p>{image.subHeaderText}</p>

                            <Button href={image.buttonUrl}>{image.buttonText}</Button>
                        {/*</Container>*/}


                    </SwiperSlide>)
            })}

        </Swiper>

    );
};
