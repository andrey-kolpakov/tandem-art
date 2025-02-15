'use client'

//reviews.tsx
import React from 'react';

import {Review} from '@/types/types'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

import styles from './styles/reviews.module.scss'

import Image from 'next/image'

import {v4} from 'uuid'

interface Props {
    className?: string;
    reviewsData: Review[]
}

export const Reviews: React.FC<Props> = ({className, reviewsData}) => {
    // console.log(reviewsData)

    return (
        <Swiper
            slidesPerView={3}
            autoplay={{
                delay: 3000,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={40}
        >
            {reviewsData.map((review, index) => {
                return (
                    <SwiperSlide key={index} className={styles.reviewItem}>

                        <p className={'tp-thin'}>{review.description}</p>

                        <div className={styles.reviewItem__avatar}>
                            <Image src={review.imageUrl} width={50} height={50} alt={`Отзыв от ${review.name}`}/>
                            <div>
                                <h3>{review.name}</h3>
                                <p className={'tp-s'}>{review.linkTitle}</p>
                            </div>

                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};
