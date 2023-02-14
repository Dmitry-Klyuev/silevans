import React from 'react';
import styles from '../../../styles/components/slider/slider.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import ava from '../../../assets/img/reviews_ava.png'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


type SwiperDataType = {
    swiperData: DataType[]
}
type DataType = {
    id: string;
    title: string;
    desc: string;
    img?: string;
    price?: number;
}

export const Slider: React.FC<SwiperDataType> = ({swiperData}) => {
    return (
        <div className={styles.cards}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                autoplay={true}
                pagination={{clickable: true}}
                className={styles.card}
            >
                {swiperData.map((el, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.image}>
                            <img src={ava.src} alt={el.title}/>
                        </div>
                        <div className={styles.title}>
                            {el.title}
                        </div>
                        <div className={styles.desc}>
                            {el.desc}
                        </div>
                        {el.price && <div className={styles.price}>{el.price}</div>}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};