import React from 'react';
import Image from "next/image";

import Wrapper from "@/components/common/wrapper";
import MainTitle from "@/components/common/Titles/MainTitle";
import FullButton from "@/components/common/buttons/FullButton";

import ground from "@/assets/svg/ground.svg";
import gift from '../../../assets/svg/giftConsultation.svg'
import vectorLogo from '../../../assets/svg/vectorLogo.svg'
import gifBackground from '../../../assets/img/BigGifBackground.png'

import style from '../../../styles/components/topComponent.module.scss'
import {useRouter} from "next/router";


const TopComponent = () => {
    const router = useRouter()
    /// autoplay video doesn't work in Safari version 15
    return (
        <>
            <Wrapper className={style.wrapper}>
                <div className={style.topComponent}>
                    <div className={style.leftBlock}>
                        <div className={style.titleBlock}>
                            <video autoPlay muted loop className={style.littleVideoBlock}>
                                <source src={'./topComponent.mp4'} type={'video/mp4'}/>
                            </video>
                            <MainTitle title={"SILEVANS"} className={style.titleWrapper}/>
                        </div>
                        <div className={style.textDescription}>
                            <p className={style.text}>Веб-студия специализируется на разработке сложно-функциональных
                                сайтов
                                и веб-сервисов, на
                                креативном дизайне и интернет продвижении.</p>
                        </div>
                        <div className={style.consultationBlock}>
                            <div className={style.consultation}>
                                <img src={gift.src} alt={"free consultation"} className={style.gift}/>
                                <p className={style.consultationText}>Заполните анкету, чтобы получить бесплатную
                                    консультацию</p>
                            </div>
                        </div>
                        <FullButton className={style.buttonFillForm} onClick={() => {
                            router.push('/questionnaire')
                        }}>Заполнить анкету</FullButton>
                    </div>

                    <div className={style.rightBlock}>
                        <img src={gifBackground.src} alt={"gif"} height={650} className={style.bigGifBckgrnd}/>
                        <video autoPlay muted loop className={style.videoBlock}>
                            <source src={'./topComponent.mp4'} type={'video/mp4'} className={style.bigVideo}/>
                        </video>
                        <video autoPlay muted loop className={style.videoBlockTablet}>
                            <source src={'./topComponentTablet.mp4'} type={'video/mp4'}/>
                        </video>
                    </div>

                </div>

                <div className={style.logoForMobile}><img src={vectorLogo.src} alt="logo"/></div>
                <div className={style.groundBlock}>
                    <Image src={ground} alt={"ground"} width={1440} height={770} className={style.ground}/>
                </div>

            </Wrapper>
        </>
    );
};

export default TopComponent;