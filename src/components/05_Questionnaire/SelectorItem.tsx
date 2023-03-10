import React, {ReactNode, useState} from 'react';
import InterestItem from "@/components/05_Questionnaire/InterestItem";
import {scrollToElement} from "@/utils/scrollToElement";
import arrow from "@/assets/svg/arrowDown.svg"
import style from "@/styles/components/questionnaireForm.module.scss"

type SelectorItemPropsType = {
    title: string,
    buttons?: Array<string>,
    background: { background: string },
    onMessageActiveHandler: () => void
    addClickedButton: (array: Array<any>) => void
    interest: Array<{ checked: boolean, title: ReactNode }>
}
const SelectorItem: React.FC<SelectorItemPropsType> = ({
                                                           title,
                                                           buttons,
                                                           background,
                                                           onMessageActiveHandler,
                                                           addClickedButton, interest
                                                       }) => {

    const [expandedMenu, setExpandedMenu] = useState(false)

    const clickedButtonInfo: Array<{ checked: boolean, title: ReactNode }> = []

    const onMenuClickHandler = () => {
        if (title === "Другое") {
            scrollToElement("projectInfo", 0)
            onMessageActiveHandler()
        } else {
            setExpandedMenu(!expandedMenu)
        }
    }

    const onChangeChecked = (checked: boolean, children: ReactNode) => {
        const button = {checked: checked, title: children}
        const indexOfButton = clickedButtonInfo.findIndex(el => el.title === children)
        if (indexOfButton >= 0) {
            clickedButtonInfo.splice(indexOfButton, 1, button)
        } else {
            clickedButtonInfo.push(button)
        }
        addClickedButton(clickedButtonInfo)
    }

    return <>
        <div className={expandedMenu ? style.selectorItemActive : style.selectorItem} onClick={onMenuClickHandler}
             style={background}>
            <h5 className={style.itemTitle}>{title}</h5>
            <img src={arrow.src} className={expandedMenu ? style.itemArrowExpanded : style.itemArrow}
                 alt="questionnaire"/>
        </div>
        <div className={expandedMenu ? `${style.selectorItemExpanded}` : `${style.selectorItemHidden}`}>
            {expandedMenu && buttons && buttons.map((b) => <InterestItem key={b} interest={interest}
                                                                         onChangeChecked={onChangeChecked}>{b}</InterestItem>)}
        </div>
        <div>
        </div>
    </>
};

export default SelectorItem;