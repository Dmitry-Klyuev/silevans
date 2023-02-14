import React from 'react';
import Link from "next/link";
import logo from '../../../assets/svg/Logo.svg'
import style from '../../../styles/components/header.module.scss'
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    return (
        <Wrapper className={style.wrapper}>
            <header className={style.header}>
                <div className={style.row}>
                    <div className={style.logoBlock}>
                        <img src={logo.src} alt="silevans" width={180} height={31}/>
                    </div>

                    <div className={style.navBlock}>
                        <nav className={style.navLinks}>
                            <Link href='#'>Услуги</Link>
                            <Link href='/portfolio'> Портфолио</Link>
                        </nav>
                        <LinkBtn className={style.buttonCallback}>Заказать звонок</LinkBtn>

                    </div>
                </div>
                {!isMainPage && <span className={style.currentPage}>Главная &#8226; {currentPage}</span>}
            </header>
        </Wrapper>
    );
};

export default Header;