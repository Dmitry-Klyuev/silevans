import React from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import style from '@/styles/components/ourWorks.module.scss'

import 'swiper/css';
import 'swiper/css/autoplay';
import FullButton from "@/components/common/buttons/FullButton";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import {useRouter} from "next/router";


const OurWorks: React.FC<{ isButton: boolean, className?: string, portfolio: PortfolioType[] }> = ({
                                                                                                       isButton,
                                                                                                       className,
                                                                                                       portfolio
                                                                                                   }) => {
    const route = useRouter()
    const wrapper = className ? `${style.wrapper} ${className}` : style.wrapper
    return (
        <Wrapper className={wrapper}>
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
                {portfolio.map((el, i) =>
                    <SwiperSlide key={i} className={style.swiperSlide}>
                        <div className={style.card}>
                            <img src={el.img} alt={'image portfolio'}/>
                            <h5>{el.title}</h5>
                            <LinkBtn><a href={el.link}>Перейти на страницу</a></LinkBtn>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            {isButton && <FullButton onClick={() => route.push('./portfolio')}>Смотреть все работы</FullButton>}
        </Wrapper>
    );
};

export default OurWorks;