import Head from 'next/head'
import React from "react";
import style from '../styles/Home.module.scss'
import TopComponent from "@/components/01_Main/topComponent/TopComponent";
import Services from "@/components/01_Main/services/Services";
import StagesSlider from "@/components/01_Main/stagesSlider/StagesSlider";
import {Footer} from "@/components/common/footer/Footer";
import RunningString from "@/components/common/runningString/RunningString";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import OurWorks from "@/components/common/ourWorks/OurWorks";
import {Reviews} from "@/components/01_Main/reviews/Reviews";
import Comfortable from "@/components/01_Main/comfortable/Comfortable";
import Header from "@/components/common/header/Header";
import {GetStaticProps, NextPage} from "next";
import {Api} from "@/pages/api/api";
import {PortfolioPageProps} from "@/pages/portfolio";

export const getStaticProps: GetStaticProps = async () => {
    const res = await Api.portfolioAPI()
    return {
        props: {
            data: res
        }
    };
};

const Home: NextPage<PortfolioPageProps> = ({data}) => {
    return (
        <>
            <Head>
                <title>Silevans</title>
                <meta name="description" content="Silevans Web-Studio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={style.main}>
                <Header isMainPage={true} currentPage={"Разработка сайтов"}/>
                <TopComponent/>
                <RunningString/>
                <Services/>
                <Comfortable/>
                <OurWorks isButton={true} portfolio={data}/>
                <StagesSlider/>
                <Reviews/>
                <CallBackMe/>
                <Footer/>
            </main>
        </>
    )
}

export default Home;
