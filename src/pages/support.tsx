import React from 'react';
import Head from "next/head";
import TopBlock from "@/components/common/topBlock/TopBlock";
import {WeDo} from "@/components/weDo/WeDo";
import {support} from "@/components/01_Main/reviews/moc";
import bgImage from "@/assets/img/supportBg.png";
import style from "@/styles/Home.module.scss";

const Support = () => {
    return (
        <>
            <Head>
                <title>Support</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"поддержка сайта"}
                          serviceDescription={"— С гарантированным временем реакции и фиксированным сроком выполнения задач"}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"}
                          buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                          buttonImage={"gift"}
                />
                <WeDo weDoData={support}/>
            </main>
        </>
    );
};

export default Support;