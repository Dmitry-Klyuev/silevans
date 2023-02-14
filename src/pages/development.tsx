import React from 'react';
import TopBlock from "@/components/common/topBlock/TopBlock";
import Head from "next/head";
import style from "@/styles/Home.module.scss";

const Development: React.FC<{}> = ({}) => {

    return (
        <>
            <Head>
                <title>Development</title>
            </Head>
            <main className={style.main}>
                <TopBlock/>
            </main>

        </>
    );
};

export default Development;