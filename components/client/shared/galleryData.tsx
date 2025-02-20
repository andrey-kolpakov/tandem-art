'use client';

import './styles/stickers.scss';

import {SpecialHeader} from '../index'
import React, {useEffect, useState} from "react";

import Link from 'next/link'

import {useRouter} from "next/navigation";
import {isDesktop, isMobile} from "react-device-detect";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "@/components/client/shared/styles/advertSlider.module.scss";

const GalleryItem = ({header, image, size, link}: { link: string, header?: string, image: string, size: number }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(link); // Переход на страницу /about
    };

    return (
        <div className={`gallery-item size-${size}`} style={{
            backgroundImage: `url(${image})`
        }} onClick={handleClick}>
            {/*{image && <img src={image} alt="gallery" className="gallery-image" />}*/}
            {header ? <p className="gallery-text">{header}</p> : ''}

            <div className="hover-info">Хочу узнать подробнее!</div>
        </div>
    );
};

interface Props {
    className?: string;
    galleryData: { image: string, header?: string, size: number, link: string }[];
    subheader: string;
    header: string;
    mainDescription: string;
    link : string
}

export const GalleryData: React.FC<Props> = ({className, galleryData, subheader, header, mainDescription, link}) => {
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        if (isMobile) setDeviceType("mobile");
        else if (isDesktop) setDeviceType("desktop");
    }, []);

    return (
        <div className={className}>
            <SpecialHeader subheader={subheader} header={header}/>
            <p className={'gallery-main-description'}>{mainDescription}</p>



            {deviceType === 'desktop' ?

                <div className="gallery-grid">
                    {galleryData.map((item, index) => (
                        <GalleryItem key={index} header={item.header} image={item.image} size={item.size} link={item.link}/>
                    ))}
                </div> :

                <div>
                    <Link href={link} className={'gallery-grid__mobile-link'}>читать подробнее</Link>
                    <br/><br/>

                    <div className={'gallery-grid__header-list'}>
                        {galleryData.map((item, index) => {
                            if (item.header) {
                                return (
                                    <div key={`item-header__${index}`}
                                         className={'gallery-grid__header'}>{item.header}</div>
                                )
                            }
                        })}
                    </div>

                    <Swiper className={'swiper-gallery'}
                            modules={[Autoplay]}>

                        {galleryData.map((item, index) => {
                            return (
                                <SwiperSlide key={index} style={{backgroundImage: `url(${item.image})`}}
                                             className={styles.swiperSlide}>
                                </SwiperSlide>)
                        })}

                    </Swiper>
                </div>}
        </div>
    );
}