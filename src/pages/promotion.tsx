import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import bgImage from "@/assets/img/promotionBg.png";
import TopBlock from "@/components/common/topBlock/TopBlock";
import WhoNeedPromotion from "@/components/03_Promotion/WhoNeedPromotion/WhoNeedPromotion";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import {Footer} from "@/components/common/footer/Footer";
import RunningString from "@/components/common/runningString/RunningString";
import OurBenefits from "@/components/common/ourBenefits/OurBenefits";
import Guarantees from "@/components/03_Promotion/guarantees/Guarantees";
import Promo from "@/components/03_Promotion/promo/Promo";
import Header from "@/components/common/header/Header";
import {WeDo} from "@/components/weDo/WeDo";
import {promotion} from "@/components/01_Main/reviews/moc";

const Promotion: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Promotion</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={"Интернет продвижение"}/>
                <TopBlock currentPage={"Интернет продвижение"}
                          serviceDescription={"— Для быстрого привлечения ваших клиентов и увеличении конверсии"}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"}
                          buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                          isMainTitleWide={true} buttonImage={"gift"}
                />
                <WeDo weDoData={promotion}/>
                <OurBenefits/>
                <Guarantees/>
                <WhoNeedPromotion/>
                <RunningString/>
                <Promo/>
                <CallBackMe/>
                <Footer/>
            </main>

        </>
    );
};

export default Promotion;