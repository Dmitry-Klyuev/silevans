import React from 'react';
import Wrapper from "../common/wrapper";
import Image from "next/image";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import gift from '../../assets/svg/gift.svg'

import style from '../../styles/components/services.module.scss'
import FullButton from "@/components/common/buttons/FullButton";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Link from "next/link";
import {useRouter} from "next/router";


const Services = () => {
    const router = useRouter();

    return (
        <>
            <Wrapper className={style.wrapper}>
                <SmallTitle className={style.smallTitle}>Наши услуги!</SmallTitle>
                <div className={style.items}>
                    <div className={style.itemsBg}></div>
                    <div className={style.itemsMenu}>
                        <div className={style.item_first}>
                            <div className={style.item_blockLeft}>
                                <h5 className={style.item_title}>
                                    <Link href={'/development'}>РАЗРАБОТКА САЙТОВ</Link>
                                </h5>
                                <div className={style.buttons}>
                                    <LinkBtn>Cайт-Визитка</LinkBtn>
                                    <LinkBtn>Промо-сайт</LinkBtn>
                                    <LinkBtn>Landing page</LinkBtn>
                                    <LinkBtn>Корпоративный сайт</LinkBtn>
                                    <LinkBtn>Интернет магазин</LinkBtn>
                                </div>
                            </div>
                            <div className={style.item_blockRight}>
                                <FullButton className={style.fillBtn} onClick={() => {
                                    router.push('/development')
                                }}>Подробнее</FullButton>
                                <h5 className={style.cost}>от 34 990 &#8381;</h5>
                                <div className={style.giftBox}>
                                    <Image alt={'gift'} src={gift} width={`${20}`} height={`${20}`}/>
                                    <p className={style.gift}>Год хостинга в подарок</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.item_second}>
                            <div className={style.item_blockLeft}>
                                <h5 className={style.item_title}>
                                    <Link href={'/promotion'}>Интернет продвижение</Link>
                                </h5>
                                <div className={style.buttons}>
                                    <LinkBtn>SEO продвижение</LinkBtn>
                                    <LinkBtn>Контекстная реклама</LinkBtn>
                                    <LinkBtn>SEO оптимизация</LinkBtn>
                                </div>
                            </div>
                            <div className={style.item_blockRight}>
                                <FullButton className={style.fillBtn} onClick={() => {
                                    router.push('/promotion')
                                }}>Подробнее</FullButton>
                                <h5 className={style.cost}>от 24 990 &#8381;</h5>
                                <div className={style.giftBox}>
                                    <Image alt={'gift'} src={gift} width={`${20}`} height={`${20}`}/>
                                    <p className={style.gift}>Аудит в подарок</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.item_third}>
                            <div className={style.item_blockLeft}>
                                <h5 className={style.item_title}>
                                    <Link href={'/design'}>Дизайн</Link></h5>
                                <div className={style.buttons}>
                                    <LinkBtn>UI и UX дизайн</LinkBtn>
                                    <LinkBtn>Редизайн сайта</LinkBtn>
                                </div>
                            </div>
                            <div className={style.item_blockRight}>
                                <FullButton className={style.fillBtn} onClick={() => {
                                    router.push('/design')
                                }}>Подробнее</FullButton>
                                <h5 className={style.cost}>от 25 990 &#8381;</h5>
                                <div className={style.giftBox}>
                                    <Image alt={'gift'} src={gift} width={`${20}`} height={`${20}`}/>
                                    <p className={style.gift}>Анализ дизайна в подарок</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

        </>

    );
};

export default Services;