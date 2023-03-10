import React from 'react';
import Wrapper from "@/components/common/wrapper";
import style from "@/styles/components/whoNeedPromotion.module.scss"
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";
import girl from "@/assets/img/promotionGirl.png"

const WhoNeedPromotion = () => {
    return (
        <Wrapper className={style.wrapper}>

            <SmallTitle className={style.title}>Кому нужно продвижение?</SmallTitle>

            <div className={style.gifBlock}>
                <video autoPlay muted loop className={style.questionVideo}>
                    <source src={'./questionMark.mp4'} type={'video/mp4'}/>
                </video>
                <div className={style.questMark}>?</div>
            </div>

            <div className={style.content}>

                <div className={style.topPart}>
                    <div className={style.topText}> Интернет можно сравнить с воскресной ярмаркой, на которой тысячи
                        продавцов наперебой предлагают свои товары и услуги.
                    </div>
                    <div className={style.girlImg}>
                        <img src={girl.src} alt="promotion"/>
                    </div>
                </div>

                <div className={style.nextPart}>

                    <div className={style.textBlock}>
                        <div className={style.first}>В случае с цифровой торговлей такое место тоже есть — оно
                            называется «топ поисковой выдачи».
                        </div>
                        <div className={style.second}>Все они знают: для того, чтобы торговля была успешной, нужно
                            занять место, вокруг которого всегда толпятся покупатели.
                        </div>
                        <div className={style.third}>Мы знаем, как продвинуть ваш сайт в топ, привлечь покупателей и
                            повысить продажи!
                        </div>
                    </div>

                    <div className={style.buttonBlock}>
                        <span className={style.buttonDescription}>Заполните анкету, чтобы получить бесплатную консультацию</span>
                        <FullButton className={style.button}>Заполнить анкету</FullButton>
                    </div>

                </div>

            </div>
        </Wrapper>
    );
};

export default WhoNeedPromotion;