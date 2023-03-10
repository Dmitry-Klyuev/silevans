import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import style from "../../../styles/components/promo.module.scss";
import {PromoData} from "@/components/03_Promotion/promo/MocPromo";


const Promo = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle className={style.title}>Что мы продвигаем?</SmallTitle>
            <div className={style.items}>
                {PromoData.map(el => <div key={el.id} className={style.item}>
                    <img src={el.img} alt={''} height={85}/>
                    <h5 className={style.itemTitle}>{el.title}</h5>
                    <p className={style.itemDescription}>{el.description}</p>
                </div>)}
            </div>
        </Wrapper>
    );
};

export default Promo;