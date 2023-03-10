import React from 'react';
import style from '@/styles/components/whatIsDesignFor.module.scss';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import imgArrow from '@/assets/img/ArrowWhatIsDesign.png';

const WhatIsDesignFor = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle className={style.title}>Для чего нужен дизайн?</SmallTitle>
            <div className={style.content}>
                <p className={style.description}>Хороший дизайн - это лучший способ управления клиентами, который
                    помогает предугадать каждое их
                    действие. Также красивая картинка на сайте - это отличный способ выделиться на рынке</p>
                <div className={style.blockArrow}>
                    <img src={imgArrow.src} alt="Arrow" className={style.imgArrow}/>
                    <p className={style.description}>Посмотрите наши работы, чтобы убедиться в этом.</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default WhatIsDesignFor;
