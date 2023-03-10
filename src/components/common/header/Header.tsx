import React, {MouseEvent} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import logo from '../../../assets/svg/Logo.svg'
import style from '../../../styles/components/header.module.scss'
import {scrollToElement} from "@/utils/scrollToElement";

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    const router = useRouter()

    const onLogoClickHandler = () => {
        router.push('/')
    }

    const onServicesClickHandler = () => {
        router.push('/').then(() => {
            scrollToElement('ourServices', 0)
        })
    }

    const onCallMeBackClickHandler = () => {
        if (currentPage === "Анкета" || currentPage === "Наши проекты") {
            router.push('/').then(() => {
                scrollToElement('callMeBack', 250)
            })
        } else scrollToElement('callMeBack', 0)
    }

    const onPortfolioClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        router.push('/portfolio')
    }


    return (
        <Wrapper className={style.wrapper}>
            <header className={isMainPage ? style.headerMainPage : style.header}>
                <div className={style.row}>
                    <div className={style.logoBlock} onClick={onLogoClickHandler}>
                        <img src={logo.src} alt="silevans" width={180} height={31}/>
                    </div>

                    <div className={style.navBlock}>
                        <nav className={style.navLinks}>
                            <div className={style.servicesLink}><span
                                onClick={onServicesClickHandler}>Услуги</span>
                            </div>
                            <div className={style.portfolioLink}>
                                <Link href='/#' onClick={onPortfolioClickHandler}>Портфолио</Link>
                            </div>
                        </nav>
                        <LinkBtn className={style.buttonCallback} onClick={onCallMeBackClickHandler}>Заказать
                            звонок</LinkBtn>

                    </div>
                </div>
                {!isMainPage && <span className={style.currentPage}>
                    <span className={style.mainPageLink} onClick={() => {
                        router.push('/')
                    }}>Главная</span> <span className={style.currentPageName}> &#8226; {currentPage}</span>
                </span>}
            </header>
        </Wrapper>
    );
};

export default Header;