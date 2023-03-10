import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from '../../../styles/components/buttons/buttons.module.scss';

const LinkBtn: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>> = ({
                               children,
                               onClick,
                               className
                           }) => {

    const finalClass = className ? `${style.LinkBtn} ${className}` : style.LinkBtn

    return (
        <button className={finalClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default LinkBtn;