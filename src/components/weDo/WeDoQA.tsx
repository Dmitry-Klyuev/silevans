import React, {useState} from 'react';
import styles from '@/styles/components/weDoQA.module.scss'

type QAType = {
    data: { title?: string | undefined; desc?: string | undefined; }
}
export const WeDoQA: React.FC<QAType> = ({data}) => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className={styles.wrapper}>
                 <div className={styles.btnWrapper}>
                    <div className={styles.btn}>
                        <div className={styles.title}>
                            {data?.title}
                        </div>
                        <div className={styles.more} onClick={() => setActive(!active)}>
                            Подробнее
                        </div>
                    </div>
                    <div className={active ? styles.desc_active : styles.desc}>
                        {data?.desc}
                    </div>
                </div>

        </div>
    );
};