import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from '../../../styles/components/buttons/buttons.module.scss'
import {useRouter} from "next/router";

const FullButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>> = ({className, onClick, children, type, ...restProps}) => {

    const finalClass = className ? `${style.default} ${className}` : style.default

    const router = useRouter()
    const onFullButtonClickHandler = () => {
        if (children === "Заполнить анкету") {
            router.push('/questionnaire')
        } else if (children === "Заказать звонок") {
            return ////// need to fix
        } else if (children === "Рассчитать стоимость") {
            return ////// need to fix
        }
    }
    return (
        <button className={finalClass} type={type}
                onClick={onClick ? onClick : onFullButtonClickHandler} {...restProps} >{children}</button>
    );
};

export default FullButton;