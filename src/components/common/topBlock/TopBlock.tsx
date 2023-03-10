import React from 'react';
import Wrapper from "@/components/common/wrapper";
import MainTitle from "@/components/common/Titles/MainTitle";
import FullButton from "@/components/common/buttons/FullButton";
import coins from "../../../assets/img/coins.png"
import gift from "../../../assets/img/rotatedGift.png"
import style from "./../../../styles/components/topBlock.module.scss"

const TopBlock: React.FC<{ currentPage: string, serviceDescription: string, backgroundImage: string, button?: string, buttonDescription?: string, buttonImage?: "coins" | "gift", imageClassName?: string, isCostBlockWide?: boolean, isMainTitleWide?: boolean, isQuestionnairePage?: boolean }> = ({
                                                                                                                                                                                                                                                                                                         currentPage,
                                                                                                                                                                                                                                                                                                         serviceDescription,
                                                                                                                                                                                                                                                                                                         backgroundImage,
                                                                                                                                                                                                                                                                                                         button,
                                                                                                                                                                                                                                                                                                         buttonDescription,
                                                                                                                                                                                                                                                                                                         isCostBlockWide,
                                                                                                                                                                                                                                                                                                         isMainTitleWide,
                                                                                                                                                                                                                                                                                                         buttonImage,
                                                                                                                                                                                                                                                                                                         isQuestionnairePage
                                                                                                                                                                                                                                                                                                     }) => {

    return (
        <Wrapper className={style.wrapper}>
            {button &&
                <img src={buttonImage == "coins" ? coins.src : gift.src} alt={"image"}
                     className={buttonImage == "coins" ? style.coinsImage : style.giftImage}/>}
            <div className={style.mainTitleBlock}>
                <MainTitle title={currentPage} isMainTitleWide={isMainTitleWide}/>
            </div>
            <div className={style.description}>{serviceDescription}</div>
            <div className={isQuestionnairePage ? style.bgImageBlockQuest : style.bgImageBlock}>
                <img src={backgroundImage} alt="background"
                     className={isQuestionnairePage ? style.questionnaireImage : style.bgImage}/>
            </div>
            {button &&
                <div className={isCostBlockWide ? style.costBlockWide : style.costBlock}>
                    <div>
                        <FullButton className={style.button}>
                            {button}
                        </FullButton>
                    </div>
                    <span className={style.costDescription}>{buttonDescription}</span>
                </div>}


        </Wrapper>
    );
};

export default TopBlock;