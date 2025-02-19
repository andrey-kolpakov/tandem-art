'use client';

import './styles/stickers.scss';

import {SpecialHeader} from '../index'
import React from "react";

import Link from 'next/link'

import { useRouter } from "next/navigation";

const GalleryItem = ({header, image, size, link}: {link: string, header?: string, image: string, size: number}) => {
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
    galleryData: {image: string, header?: string, size: number, link: string}[];
    subheader: string;
    header: string;
    mainDescription: string;

}

export const GalleryData: React.FC<Props> = ({className, galleryData, subheader, header, mainDescription}) => {

    return (
        <div className={className}>
            <SpecialHeader subheader={subheader} header={header}/>
            <p>{mainDescription}</p>
            <br/>
            <div className="gallery-grid">
                {galleryData.map((item, index) => (
                    <GalleryItem key={index} header={item.header} image={item.image} size={item.size} link={item.link}/>
                ))}
            </div>
        </div>
    );
}