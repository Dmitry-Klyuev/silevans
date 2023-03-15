import React from 'react';
import styles from '@/styles/components/slider/slider.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import arrow from '@/assets/img/Arrow_2.png'

import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import "swiper/css";


export type SwiperDataType = {
    swiperData: {
        id: string;
        title: string;
        subTitle?: string;
        desc: string;
        price?: number;
        avatar?: string;
        QA?:
            {
                title?: string;
                desc?: string;
            }[];
    }[]
    activeHandler?: (index: number) => void;
}

export const Slider: React.FC<SwiperDataType> = ({swiperData, activeHandler}) => {
    const handleSlideChange = (swiper: { activeIndex: number; }) => {
        if (activeHandler) {
            activeHandler(swiper.activeIndex)
        }
    };
    return (
        <div className={styles.carousel}>
            <Swiper className='swiper-slide'
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    autoplay={true}
                    onSlideChange={handleSlideChange}
            >
                {swiperData.map((el, index) => {
                    return <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.image}>
                            <img src={el.avatar} alt={el.title} style={{maxWidth: '100%', height: 'auto'}}/>
                        </div>
                        <div className={styles.allText}>
                            <div className={styles.title}>
                                {el.title}
                            </div>
                            <div className={styles.subTitle}>{el.subTitle}</div>
                            <div className={styles.desc}>
                                {el.desc}
                            </div>
                            <div className={styles.price}>{el.price && `от ${el.price} ₽`}</div>
                            <div className={styles.buttons}>
                                <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
                                    <img src={arrow.src} alt={'Arrow'}/>
                                </div>
                                {`0${index + 1}`}/<span>{`0${swiperData.length}`}</span>
                                <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
                                    <img src={arrow.src} alt={'Arrow'}/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <style jsx>{`
              .slideClass {

              }

              .swiper-slide {

              }

              .swiper-button-prev {
                width: auto;
              }

              .swiper-button-next:after {
                display: none;
              }

              .swiper-button-prev:after {
                display: none;
              }

              .swiper-slide {

              }

              .swiper-wrapper {
                display: none;
              }
            `}</style>
            {/*{form && <div className={styles.writeForm}>*/}
            {/*    <p>Заполните анкету, чтобы получить бесплатную консультацию</p>*/}
            {/*    <div>Заполнить анкету</div>*/}
            {/*</div>}*/}
        </div>
    );
}