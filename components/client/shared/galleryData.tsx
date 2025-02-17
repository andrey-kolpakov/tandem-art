'use client';

import './styles/stickers.scss';

import {SpecialHeader} from '../index'
import React from "react";

const GalleryItem = ({header, image, size}: {header?: string, image: string, size: number}) => {
    return (
        <div className={`gallery-item size-${size}`} style={{
            backgroundImage: `url(${image})`
        }}>
            {/*{image && <img src={image} alt="gallery" className="gallery-image" />}*/}
            {header ? <p className="gallery-text">{header}</p> : ''}

            <div className="hover-info">Хочу узнать подробнее!</div>
        </div>
    );
};

interface Props {
    className?: string;
    galleryData: {image: string, header?: string, size: number}[];
    subheader: string;
    header: string;
    mainDescription: string
}

export const GalleryData: React.FC<Props> = ({className, galleryData, subheader, header, mainDescription}) => {

    return (
        <div className={className}>
            <SpecialHeader subheader={subheader} header={header}/>
            <p>{mainDescription}</p>
            <br/>
            <div className="gallery-grid">
                {galleryData.map((item, index) => (
                    <GalleryItem key={index} header={item.header} image={item.image} size={item.size}/>
                ))}
            </div>
        </div>
    );
}