//formBlock.tsx
import React from 'react';

import {Form} from '../index'

import {submitForm} from "@/actions/index";

import './styles/formBlock.scss'

interface Props {
    className?: string;
}

export const FormBlock: React.FC<Props> = ({className}) => {
    return (
        <div className={'form-block'}>

            <div className={'form-block__image'}></div>
            <div className={'form-block__form'}>
                <h2>Ответим на ваши вопросы</h2>
                <Form submitAction={submitForm}/></div>
        </div>
    );
};
