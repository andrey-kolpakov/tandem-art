'use client';

import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

import { CardSlider } from '../index';
import './styles/gridComponent.scss';

interface GridItem {
    text?: string;
    link: string;
    type: 'link' | 'slider';
    order: number;
    items?: string[];
    isEmpty?: boolean;
}

interface Props {
    className?: string;
}

const gridData: GridItem[] = [
    { text: "Широкоформатная печать", link: "#", type: 'link', order: 2 },
    { text: "Полиграфия", link: "#", type: 'link', order: 12 },
    { text: "Стикеры", link: "#", type: 'link', order: 9 },
    { text: "Портфолио", link: "#", type: 'link', order: 8 },
    { text: "Контакты", link: "#", type: 'link', order: 17 },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 6
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 7
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 10
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 11
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 15
    },
    {
        link: "#", type: 'slider', items: [
            'images/slider-cards/1/1.jpg', 'images/slider-cards/1/2.jpg', 'images/slider-cards/1/3.jpg', 'images/slider-cards/1/4.jpg'
        ], order: 16
    },
];

const totalCells = 18;
const gridCells: GridItem[] = Array.from({ length: totalCells }, (_, index) => {
    const item = gridData.find((el) => el.order === index + 1);
    return item ? { ...item, isEmpty: false } : { link: "#", type: 'link', order: index + 1, isEmpty: true };
});

export const GridComponent: React.FC<Props> = ({ className }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [cellSize, setCellSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (gridRef.current) {
            const { width, height } = gridRef.current.getBoundingClientRect();
            setCellSize({ width: width / 6, height: height / 3 });
        }
    }, []);

    return (
        <div className={clsx("grid-container", className)} ref={gridRef}>
            {gridCells.map((cell, index) => (
                <div
                    key={`grid-element__${index}`}
                    className={clsx("grid-item", {
                        empty: cell.isEmpty,
                        filled: !cell.isEmpty,
                        slider: cell.type === 'slider'
                    })}
                    onClick={() => !cell.isEmpty && window.location.assign(cell.link)}
                >
                    {cell.type === 'slider' ? (
                        <div className="slider-placeholder">
                            <CardSlider images={cell.items || []} size={cellSize} />
                        </div>
                    ) : (
                        cell.text
                    )}
                </div>
            ))}
        </div>
    );
};