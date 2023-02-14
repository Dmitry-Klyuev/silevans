import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from '../../../styles/components/buttons/buttons.module.scss'

const FullButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>> = ({className, onClick, children, type, ...restProps}) => {

    const finalClass = className ? `${style.default} ${className}` : style.default

    return (
        <button className={finalClass} type={type} onClick={onClick}>{children}</button>
    );
};

export default FullButton;