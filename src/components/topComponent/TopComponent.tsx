import React from 'react';
import Image from "next/image";

import Header from "@/components/common/header/Header";
import Wrapper from "@/components/common/wrapper";
import MainTitle from "@/components/common/Titles/MainTitle";
import FullButton from "@/components/common/buttons/FullButton";

import ground from "@/assets/svg/ground.svg";
import gift from '../../assets/svg/giftConsultation.svg'
import vectorLogo from '../../assets/svg/vectorLogo.svg'
import giftBckgrnd from '../../assets/svg/giftConsultBackground.svg'
import gifBackground from '../../assets/img/BigGifBackground.png'
import gif from '../../assets/gif/gifMain.gif'

import style from '../../styles/components/topComponent.module.scss'


const TopComponent = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.topComponent}>

                <div className={style.leftBlock}>
                    <Header isMainPage={true} currentPage={"Разработка сайтов"}/>
                    <div className={style.titleBlock}>
                        <div className={style.littleGif}>
                            <img src={gif.src} alt={"gif"} height={130}/>
                        </div>
                        <MainTitle title={"SILEVANS"} className={style.titleWrapper}/>
                    </div>
                    <div className={style.textDescription}>
                        <p className={style.text}>Веб-студия специализируется на разработке сложно-функциональных сайтов
                            и веб-сервисов, на
                            креативном дизайне, интернет продвижении
                            и поддержке.</p>
                    </div>
                    <div className={style.consultationBlock}>
                        <div className={style.consultation}>
                            <img src={gift.src} alt={"free consultation"} className={style.gift}/>
                            <img src={giftBckgrnd.src} alt={"free consultation"} className={style.background}/>
                            <p className={style.consultationText}>Заполните анкету, чтобы получить бесплатную
                                консультацию</p>
                        </div>
                    </div>
                    <FullButton className={style.buttonFillForm}>Заполнить анкету</FullButton>
                </div>

                <div className={style.rightBlock}>
                    <img src={gifBackground.src} alt={"gif"} height={650} className={style.bigGifBckgrnd}/>
                    <div className={style.gifBlock}>
                        <img src={gif.src} alt={"gif"} height={850} className={style.bigGif}/>
                    </div>
                </div>

            </div>
            <Image src={ground} alt={"ground"} width={1440} height={770} className={style.ground}/>

            <div className={style.logoForMobile}><img src={vectorLogo.src} alt="logo"/></div>

        </Wrapper>
    );
};

export default TopComponent;