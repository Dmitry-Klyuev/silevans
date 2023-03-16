import React from 'react';
import styles from '../../../styles/components/footer.module.scss'
import Link from "next/link";
import Wrapper from "@/components/common/wrapper";
import Image from 'next/image'
import logo from '@/assets/svg/Logo.svg'
import {scrollToElement} from "@/utils/scrollToElement";
import {useRouter} from "next/router";

export const Footer: React.FC = () => {
    const router = useRouter()
    const onServicesClickHandler = () => {
        router.push('/').then(() => {
            scrollToElement('ourServices', 0)
        })
    }
    return (
        <footer>
            <Wrapper className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.logo}>
                        <Image src={logo} alt={"silevans logo"}/>
                    </div>
                    <Link href={'tel:+79282345678'}>+7 928 234-56-78</Link>
                    <Link href={'https://t.me/u11wsia'} className={styles.btn}>Телеграм</Link>
                    <Link href={'/questionnaire'} className={styles.btn}> Заполнить анкету</Link>


                    <div className={styles.date}>Ⓒ {new Date().getFullYear()} Silevans. Все права защищены</div>
                </div>
                <div className={styles.allServices}>
                    <div className={styles.services1}>
                        <Link href={'/'} onClick={onServicesClickHandler}>Услуги</Link>
                        <Link href={'/development'}>Разработка</Link>
                        <Link href={'/promotion'}>Продвижение</Link>
                        <Link href={'/design'}>Дизайн</Link>
                    </div>
                    <div className={styles.services2}>
                        <Link href={'/portfolio'}>Портфолио</Link>
                        <Link href={'#'}>Бриф</Link>
                        <Link href={'#'}>Вакансии</Link>
                    </div>
                    <div className={styles.date}>Ⓒ {new Date().getFullYear()} Silevans. Все права защищены</div>
                </div>
            </Wrapper>
        </footer>
    );
};