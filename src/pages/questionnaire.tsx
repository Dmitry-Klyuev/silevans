import React from 'react';
import style from "@/styles/Home.module.scss";
import bgImage from "@/assets/img/quest_top.png";
import Head from "next/head";
import TopBlock from "@/components/common/topBlock/TopBlock";
import QuestionnaireForm from "@/components/05_Questionnaire/QuestionnaireForm";
import Header from "@/components/common/header/Header";

const Questionnaire = () => {
    return (
        <>
            <Head>
                <title>Questionnaire</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={"Анкета"}/>
                <TopBlock currentPage={"Анкета"}
                          serviceDescription={"— Готовим предложение в течении 2 рабочих дней!"}
                          backgroundImage={bgImage.src} isQuestionnairePage={true}
                />
                <QuestionnaireForm/>
            </main>

        </>
    );
};

export default Questionnaire;