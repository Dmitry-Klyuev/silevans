import styles from '@/styles/components/reviews.module.scss'
import Wrapper from "@/components/common/wrapper";
import {data} from './moc'
import {Slider} from "@/components/common/slider/Slider";
import React from "react";


export const Reviews: React.FC = () => {
    return (
        <Wrapper className={styles.wrapper}>
            <div className={styles.text}>
                <span>отзывы</span>
                <span>клиентов</span>
            </div>
            <Slider swiperData={data}/>
        </Wrapper>
    );
};