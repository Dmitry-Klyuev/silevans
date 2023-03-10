import React from 'react';
import style from '../../../styles/components/runningString.module.scss'
import Wrapper from "@/components/common/wrapper";
import StringItem from "@/components/common/runningString/stringItem/StringItem";

const RunningString = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.runningString}>
                <div className={style.strings}>
                    <StringItem string={"22 эксперта в нашей команде"}/>
                    <StringItem string={"ПИШЕМ САЙТЫ НА ЧИСТОМ КОДЕ"}/>
                    <StringItem string={"предоставление гарантии"}/>
                    <StringItem string={"ПРЕДОСТАВЛЯЕМ РАЗличНЫЙ СПЕКТР УСЛУГ"}/>
                    <StringItem string={"Долгосрочная поддержка сайта"}/>
                    <StringItem string={"индивидуальный и адаптивный дизайн"}/>
                    <StringItem string={"Согласование этапов работы"}/>
                </div>

            </div>
        </Wrapper>
    );
};

export default RunningString;