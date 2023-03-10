import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import {HowDoWeDoItData} from "@/components/04_Desing/howDoWeDoIt/MocData";
import style from '@/styles/components/HowDoWeDoIt.module.scss'


const HowDoWeDoIt = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.videoBG}>
                <div className={style.videoWrapper}>
                    <video autoPlay muted loop className={style.video}>
                        <source src={'./video.mp4'} type={'video/mp4'}/>
                    </video>
                </div>
            </div>
            <div className={style.content}>
                <SmallTitle className={style.title}>Как мы делаем?</SmallTitle>
                <div className={style.items}>
                    {HowDoWeDoItData.map(el =>
                        <div key={el.id} className={style.item}>
                            <h5 className={style.itemTitle}>{el.title}</h5>
                            <p className={style.itemDescription}>{el.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default HowDoWeDoIt;