import React, {useEffect, useState} from 'react';
import {Slider} from "@/components/common/slider/Slider";
import styles from '@/styles/components/weDo.module.scss'
import Wrapper from "@/components/common/wrapper";
import {WeDoQA} from "@/components/weDo/WeDoQA";
import FullButton from "@/components/common/buttons/FullButton";

export type weDoDataType = {
    weDoData: {
        id: string;
        title: string;
        subTitle: string;
        desc: string;
        avatar?: string;
        price: number;
        QA?:
            {
                title?: string;
                desc?: string;
            }[];
    }[]
}

export const WeDo: React.FC<weDoDataType> = ({weDoData}) => {
    const [active, setActive] = useState(0)
    const [width, setWidth] = useState(0);
    const activeHandler = (index: number) => {
        if (width > 1440) {
            setActive(index)
        }
    }
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        setWidth(window.innerWidth);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Wrapper className={styles.wrapper}>
            <div className={styles.whatWeDo}>
                <div className={styles.title}>Что мы делаем?</div>
                <div className={styles.items}>
                    {weDoData.map((el, index) => (
                        <div key={index}
                             className={`${styles.item} ${index === active ? styles.item_active : null}`}
                             onClick={() => setActive(index)}
                        >
                            {el.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.pcSlider}>
                <Slider swiperData={weDoData}
                        activeHandler={activeHandler}
                />
                <div className={styles.writeForm}>
                    <p>Заполните анкету, чтобы получить бесплатную консультацию</p>
                    <FullButton className={styles.writeFormBtn}>Заполнить анкету</FullButton>
                </div>
            </div>
            <div className={styles.mobileSlider}>
                {weDoData[active].QA && weDoData[active].QA?.map((el, index) => (
                    <WeDoQA data={el} key={index}/>
                ))}
                <FullButton className={styles.writeFormBtn}>Заполнить анкету</FullButton>
                <p>Заполните анкету, чтобы получить бесплатную консультацию</p>
            </div>
        </Wrapper>
    );
};