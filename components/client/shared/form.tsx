"use client";

import React, { useState } from "react";
import clsx from "clsx";

import {Button} from '../index'

import './styles/form.scss'

interface Props {
    className?: string;
    formOrigin?: string
    submitAction: (formData: FormData) => Promise<void>; // Функция для отправки на сервер
}

export const Form: React.FC<Props> = ({ className, submitAction, formOrigin }) => {

    const [formData, setFormData] = useState({ name: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("phone", formData.phone);

            if(formOrigin){
                data.append("comments", formOrigin);
            } else {
                data.append("comments", 'Комментариев нет');
            }

            await submitAction(data);

            setFormData({ name: "", phone: "" })
        } catch (err) {
            setError("Ошибка отправки данных. Попробуйте снова.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={clsx(className, "form-main")} onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Введите имя"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <Button className={'button--blue'}>{loading ? "Отправка..." : "Отправить"}</Button>

            {error && <p className="error">{error}</p>}
        </form>
    );
};
