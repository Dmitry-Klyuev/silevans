import React from 'react';
import styles from '../../../styles/components/footer.module.scss'
import Link from "next/link";
import logo from '../../../assets/svg/Logo.svg'
import Wrapper from "@/components/common/wrapper";

export const Footer: React.FC = () => {
    return (
        <footer>
            <Wrapper className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.logo}>
                        <img src={logo.src} alt={"silevans logo"}/>
                    </div>
                    <Link href={'tel:+79282345678'}>+7 928 234-56-78</Link>
                    <div className={styles.mail}>Стать клиентом или партнёром
                        <Link href={'mailto:hello@silevans.com'}>hello@silevans.com</Link>
                    </div>
                    <div className={styles.mail}>Присоединиться к команде
                        <Link href={'mailto:hr@silevans.com'}>hr@silevans.com</Link>
                    </div>
                </div>
                <div className={styles.services1}>
                    <Link href={'#'}>Услуги</Link>
                    <Link href={'#'}>Разработка</Link>
                    <Link href={'#'}>Продвижение</Link>
                    <Link href={'#'}>Дизайн</Link>
                </div>
                <div className={styles.services2}>
                    <Link href={'#'}>Портфолио</Link>
                    <Link href={'#'}>Бриф</Link>
                    <Link href={'#'}>Вакансии</Link>
                </div>
                <div className={styles.date}>Ⓒ {new Date().getFullYear()} Silevans. Все права защищены</div>
            </Wrapper>
        </footer>
    );
};