import React from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import style from '../../../styles/components/ourWorks.module.scss'

import 'swiper/css';
import 'swiper/css/autoplay';
import {worksItems} from "@/components/common/ourWorks/OurWotksItems";


const OurWorks: React.FC = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle>Наши Работы!</SmallTitle>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                loop={true}
                spaceBetween={20}
            >
                {worksItems.map((el, i) =>
                    <SwiperSlide key={i}>
                        <img src={el.src} alt={'image portfolio'}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </Wrapper>
    );
};

export default OurWorks;