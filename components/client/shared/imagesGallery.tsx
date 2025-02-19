'use client'

import clsx from "clsx";
import Image from "next/image";
import {usePopupStore} from "@/store/popupStore";

import "./styles/portfolio.scss"; // Подключаем стили

interface Props {
    className?: string;
    images: string[]
    header: string
}


export const ImagesGallery: React.FC<Props> = ({className, images, header}) => {
    const {openPopup} = usePopupStore();


    return (

        <>
            <h2 className={'portfolio-header'}>{header}</h2>

            <div className={clsx("portfolio-grid", className)}>
                {images.map((src, index) => (
                    <div key={index} className="portfolio-item">
                        <Image src={src} alt={`Portfolio ${index + 1}`} layout="fill" objectFit="cover"
                               onClick={(evt) => {
                                   openPopup(<Image
                                       src={src}
                                       alt={`Portfolio ${index + 1}`}
                                       layout="intrinsic"
                                       width={500}
                                       height={400}
                                       objectFit="cover"/>)
                               }}/>
                    </div>
                ))}
            </div>
        </>
    );
};
