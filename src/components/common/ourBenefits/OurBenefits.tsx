import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import style from '../../../styles/components/ourBenefits/ourBenefits.module.scss'

const OurBenefits = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle className={style.title}>Наши преимущества</SmallTitle>
            <div className={style.items}>
                <div className={style.item}>
                    <p className={style.description}>Индивидуальный и адаптивный дизайн</p>
                </div>
                <div className={style.item}>
                    <p className={style.description}>Долгосрочная поддержка сайта</p>
                </div>
                <div className={style.item}>
                    <p className={style.description}>Согласование этапов работы</p>
                </div>
                <div className={style.item}>
                    <p className={style.description}>Предоставление гарантии</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default OurBenefits;