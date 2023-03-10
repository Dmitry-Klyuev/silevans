import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import StagesWork from "@/components/common/stagesWork/stagesWork";
import {dataStagesDevelopment} from "@/components/stagesOfWork/MocStages";
import style from '../../styles/components/stagesOfWorks.module.scss'

const StagesOfWork = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.titleBlock}>
                <SmallTitle className={style.title}>Этапы работы</SmallTitle>
                <p className={style.description}>
                    {'Сроки этапов варьируются в зависимости\nот их объёма и сложности:'}
                </p>
            </div>
            {dataStagesDevelopment.map(el =>
                <StagesWork className={style.content} text={el.desc} title={el.title} number={Number(el.id)}
                            key={el.id}/>
            )}
        </Wrapper>
    );
};

export default StagesOfWork;