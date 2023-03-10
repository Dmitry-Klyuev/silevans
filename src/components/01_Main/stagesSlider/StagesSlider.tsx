import React, {useEffect, useState} from 'react';
import Wrapper from "@/components/common/wrapper";
import FullButton from "@/components/common/buttons/FullButton";
import style from '../../../styles/components/stageSlider.module.scss'

const StagesSlider: React.FC = () => {

    const [stage, setStage] = useState(1)

    useEffect(() => {
        if (stage !== 5) {
            const interval = setInterval(() => {
                setStage(() => stage + 1);
            }, 3500);
            return () => clearInterval(interval);
        } else {
            setStage(1)
        }
    }, [stage])


    return (
        <Wrapper className={style.wrapper}>
            <div className={style.stars}>
                <div className={style.pulse}>
                    <div className={style.pulse_item}>{stage}</div>
                </div>
                <div className={style.content}>
                    <h5 className={style.titleBlock}>
                        Этапы работы
                    </h5>
                    {stage === 1 &&
                        <>
                            <h3 className={style.title}>
                                Обсуждение проекта
                            </h3>
                            <p className={style.description}>
                                Уточняем что вы хотите получить <br/>в результате работы, какая задача <br/>стоит перед
                                нашей
                                командой?
                            </p>
                        </>}
                    {stage === 2 &&
                        <>
                            <h3 className={style.title}>
                                Заключение договора
                            </h3>
                            <p className={style.description}>
                                Фиксируем техническое задание, оговариваем сроки сдачи проекта, договор, предоплата.
                            </p>
                        </>}
                    {stage === 3 &&
                        <>
                            <h3 className={style.title}>
                                Разработка проекта
                            </h3>
                            <p className={style.description}>
                                Разрабатываем структуру, будущий скелет вашего проекта, утверждаем макеты, продумываем
                                тексты и пишем код.
                            </p>
                        </>}
                    {stage === 4 &&
                        <>
                            <h3 className={style.title}>
                                Сдача проекта
                            </h3>
                            <p className={style.description}>
                                Утверждаем, вносим правки <br/>если требуется, тестируем готовый <br/>проект и отдаём
                                все
                                исходники.
                            </p>
                        </>}
                    <div className={style.dots}>
                        <div className={style.dot} style={stage === 1 ? {background: '#9A219C'} : undefined}></div>
                        <div className={style.dot} style={stage === 2 ? {background: '#9A219C'} : undefined}></div>
                        <div className={style.dot} style={stage === 3 ? {background: '#9A219C'} : undefined}></div>
                        <div className={style.dot} style={stage === 4 ? {background: '#9A219C'} : undefined}></div>
                    </div>

                    <FullButton className={style.btn}>Заполнить анкету</FullButton>
                </div>
            </div>
        </Wrapper>
    );
};

export default StagesSlider;