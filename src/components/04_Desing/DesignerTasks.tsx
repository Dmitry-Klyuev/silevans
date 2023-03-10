import React from 'react';
import style from "@/styles/components/designerTasks.module.scss"
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";
import spaceman from "@/assets/img/desing_spaceman.png"
import waves from "@/assets/img/desing_waves.png"
import wavesMob from "@/assets/img/design_waves_mob.png"

const DesignerTasks = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.content}>

                <div className={style.titleBlock}>
                    <SmallTitle className={style.taskTitle}>Задачи дизайнера</SmallTitle>
                </div>

                <div className={style.tasks}>
                    <img src={spaceman.src} alt="design" className={style.spaceman}/>
                    <div className={style.topTask}>Выделить компанию на фоне конкурентов</div>
                    <div className={style.leftTask}>сделать сайт запоминающимся</div>
                    <div className={style.rightTask}>Сделать понятный логичный визуал для удобного пользования клиентами
                        бизнеса
                    </div>
                    <div className={style.tasksDescription}>Веб-дизайнер проектирует визуальное представление, а также
                        продумывает наиболее верные решения для подачи информации
                    </div>
                </div>

                <div className={style.visual}>
                    <div className={style.visualTitle}>Контент+визуал</div>
                    <div className={style.visualDescription}>
                        <div className={style.visualText}> Идеальное соотношение текста и графики дает грамотное
                            визуальное представление сайта. Работаем
                            в минимализме, акцентировано ведем пользователя сквозь текст. В наших сайтах тексты и
                            графика не
                            противоречат друг другу, а поддерживают концепцию, гармонично сочетаясь между собой, даже
                            если
                            графики «много»
                        </div>
                        <div className={style.visualButtonWrapper}>
                            <FullButton className={style.visualButton}>Заполнить анкету</FullButton>
                        </div>
                    </div>

                    <div className={style.background}>
                        <img src={waves.src} alt="design" className={style.waves}/>
                    </div>

                    <img src={wavesMob.src} alt="design" className={style.wavesMob}/>
                </div>
            </div>

        </Wrapper>
    );
};

export default DesignerTasks;