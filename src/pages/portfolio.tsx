import React from 'react';
import Head from "next/head";
import {Footer} from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import style from '@/styles/Home.module.scss'
import OurProjects from "@/components/06_Projects/ourProjects/OurProjects";
import {GetStaticProps, NextPage} from 'next'
import {Api} from "@/pages/api/api";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";

export interface PortfolioPageProps {
    data: PortfolioType[];
}


export const getStaticProps: GetStaticProps = async () => {
    const res = await Api.portfolioAPI()
    return {
        props: {
            data: res
        }
    };
};

const Portfolio: NextPage<PortfolioPageProps> = ({data}) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={'Наши проекты'}/>
                <OurProjects portfolio={data}/>
                <Footer/>
            </main>
        </>
    );
};

export default Portfolio;