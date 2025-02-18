'use client';

import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import clsx from 'clsx';

import './styles/ford.scss'

interface Props {
    className?: string;
}

const ProgressBar = ({label, progress } : {label: string, progress: number}) => {
    return (
        <div className="progress-bar-container">
            <p className="progress-label">{label}</p>
            <div className="progress-background">
                <motion.div
                    initial={{width: 0}}
                    animate={{width: `${progress}%`}}
                    transition={{duration: 1.5, ease: 'easeOut'}}
                    className="progress-fill"
                />
            </div>
        </div>
    );
};

export const Ford: React.FC<Props> = ({className}) => {
    const {ref, inView} = useInView({triggerOnce: true});
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        }
    }, [inView]);

    const progressData = [
        {label: 'отпечатано километров на оракале', value: 80},
        {label: 'слова благодарности от клиентов', value: 60},
        {label: 'при изготовлении заказов использовано тонн бумаги A4', value: 70},
        {label: 'выпито литров кофе в ночную смену', value: 50},
    ];

    return (
        <div className={clsx(className, 'ford-component-container')}>
            <div>
                <h2>Еще один аргумент</h2>
                <p>Я не знаю какой результат принесет мне реклама, но даже если я заработаю доллар - я вложу его в
                    рекламу. Герни Форд</p>
            </div>

            <hr/>

            <div className={'ford-quote'}>
                <div>
                    Наша компания основана в 2007 году. Опыт у нас богатый. Если вы сомневаетесь, что задуманное можно
                    воплотить в жизнь - приходите к нам. Мы материализуем любые. Ваши идеи от изготовления визитки,
                    стикера или постера до производства и установки рекламной вывески.
                </div>

                <div ref={ref} className="progress-container">
                    {progressData.map((item, index) => (
                        <ProgressBar key={index} label={item.label} progress={startAnimation ? item.value : 0}/>
                    ))}
                </div>
            </div>

        </div>
    );
};
