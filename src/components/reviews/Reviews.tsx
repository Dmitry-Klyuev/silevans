import React from 'react';
import styles from '@/styles/components/reviews.module.scss'
import Wrapper from "@/components/common/wrapper";
import {data} from './moc'
import "swiper/css";
import {Slider} from "@/components/common/slider/Slider";


export const Reviews: React.FC = () => {
    return (
        <Wrapper className={styles.wrapper}>
            <div className={styles.text}>
                <p>отзывы</p>
                <p>клиентов</p>
            </div>
            <Slider swiperData={data}/>
        </Wrapper>
    );
};