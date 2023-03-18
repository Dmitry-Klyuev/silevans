import React from 'react';
import TopBlock from "@/components/common/topBlock/TopBlock";
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import bgImage from "../assets/img/developmentBg.png"
import StagesOfWork from "@/components/stagesOfWork/stagesOfWork";
import ToolsAndTechnologies from "@/components/02_Development/ToolsAndTechnologies/ToolsAndTechnologies";
import OurBenefits from "@/components/common/ourBenefits/OurBenefits";
import {Footer} from "@/components/common/footer/Footer";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import Header from "@/components/common/header/Header";
import {WeDo} from "@/components/weDo/WeDo";
import {development} from "@/components/01_Main/reviews/moc";

const Development: React.FC<{}> = ({}) => {

    return (
        <>
            <Head>
                <title>Development</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={"Разработка сайтов"}/>
                <TopBlock currentPage={"Разработка сайтов"}
                          serviceDescription={"— сайты, построенные на современных технологиях и фреймворках. Понятный\n" +
                              "                frontend для пользователя, который подключается к CMS, и надежный backend для стабильной работы\n" +
                              "                продукта."}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"/*"Рассчитать стоимость"*/}
                          buttonDescription={"Финальная стоимость работы всегда напрямую зависит от объёма,\n" +
                              "                    необходимых технических решений и уровня проработки дизайна проекта."}
                          isCostBlockWide={true}
                          buttonImage={"coins"}
                />
                <WeDo weDoData={development}/>
                <OurBenefits/>
                <StagesOfWork/>
                <ToolsAndTechnologies/>
                <CallBackMe/>
                <Footer/>
            </main>

        </>
    );
};

export default Development;