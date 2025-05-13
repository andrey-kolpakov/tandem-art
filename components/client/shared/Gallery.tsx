'use client'

import Image from 'next/image'
import Link from 'next/link'
import './styles/Gallery.scss'

export type GalleryItem = {
    src: string
    alt?: string
    href?: string
}

interface GalleryProps {
    items: GalleryItem[]
}

export function Gallery({ items }: GalleryProps) {
    return (
        <div className="custom-gallery">
            {items.map((item, idx) => (
                <div
                    // href={item.href || '#'}
                    key={idx}
                    className={`gallery-item item-${idx + 1}`}
                >
                    <Image
                        src={item.src}
                        alt={item.alt || ''}
                        fill
                        className="image"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>
            ))}
        </div>
    )
}
