export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

export interface User {
    id: number;
    email: string;
    fullName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: UserRole;
}

export interface SliderOfBanners {
    id: number;
    title: string;
    images: SliderImage[];
}

export interface SliderImage {
    id: number;
    imageUrl: string;
    altText: string;
    sliderBannerId?: number;
    buttonUrl: string;
    buttonText: string;
    headerText: string;
    subHeaderText: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    altText: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Review {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    linkTitle?: string; // Опциональное поле
    linkUrl?: string;   // Опциональное поле
}

export interface Order {
    id?: number;
    name: string;
    phone: string;
    comments?: string;
}
