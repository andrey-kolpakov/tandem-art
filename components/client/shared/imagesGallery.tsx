'use client'

import clsx from "clsx";
import Image from "next/image";
import {usePopupStore} from "@/store/popupStore";

import "./styles/portfolio.scss"; // Подключаем стили

import { useEffect, useState } from "react";

import {isMobile, isTablet, isDesktop, getSelectorsByUserAgent } from "react-device-detect";

interface Props {
    className?: string;
    images: string[]
    header: string
}

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, EffectFade} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'
import styles from "@/components/client/shared/styles/advertSlider.module.scss";
import React from "react";


export const ImagesGallery: React.FC<Props> = ({className, images, header}) => {
    const {openPopup} = usePopupStore();

    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        if (isMobile) setDeviceType("mobile");
        else if (isDesktop) setDeviceType("desktop");
    }, []);

    if (deviceType === "mobile") {
        return (
            <div>
                <h2 className={'portfolio-header'}>{header}</h2>

                <Swiper className={'swiper-gallery'}
                        modules={[Autoplay]}>

                    {images.map((image, index) => {
                        return (
                            <SwiperSlide key={index} style={{backgroundImage: `url(${image})`}}
                                         className={styles.swiperSlide}>

                            </SwiperSlide>)
                    })}

                </Swiper>
            </div>
        )
    }



    return (
        <>
            <h2 className={'portfolio-header'}>{header}</h2>

            <div className={clsx("portfolio-grid", className)}>
                {images.map((src, index) => (
                    <div key={index} className="portfolio-item">
                        <Image src={src} alt={`Portfolio ${index + 1}`} style={{objectFit: "cover"}} fill
                               sizes={"500px"}
                               onClick={(evt) => {
                                   openPopup(<Image
                                           src={src}
                                           alt={`Portfolio ${index + 1}`}
                                           width={500}
                                           height={500}
                                           style={{objectFit: "contain"}}
                                       />
                                   )
                               }}/>
                    </div>
                ))}
            </div>
        </>
    );
};
