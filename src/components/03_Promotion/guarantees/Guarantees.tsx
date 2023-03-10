import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import style from '../../../styles/components/guarantees.module.scss'
import {guaranteesData, guaranteesPromiseData} from "./MocGuarantees";


const Guarantees = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle className={style.title}>Гарантии</SmallTitle>
            <h3 className={style.subTitle}>Мы не даем пустых обещаний</h3>
            <div className={style.bigBlock}>
                <div className={style.astroBg}>
                </div>
                <div className={style.items}>
                    {guaranteesData.map(el =>
                        <div className={style.item} key={el.id}>
                            <h3 className={style.itemTitle}>{el.title}</h3>
                            <p className={style.itemDescription}>{el.description}</p>
                        </div>
                    )}
                </div>
            </div>
            <h3 className={style.subTitle}>Но можем гарантировать</h3>
            <div className={style.smallBlock}>
                <div className={style.videoBg}></div>
                <div className={style.cards}>
                    {guaranteesPromiseData.map(el =>
                        <div className={style.wrapperCard} key={el.id}>
                            <div className={style.card}>
                                <h5 className={style.cardTitle}>{el.title}</h5>
                                <p className={style.cardDescription}>{el.description}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </Wrapper>
    );
};

export default Guarantees;