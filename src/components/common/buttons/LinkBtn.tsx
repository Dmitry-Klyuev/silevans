import React from 'react';
import style from '../../../styles/components/buttons/buttons.module.scss'

const LinkBtn: React.FC<{ children?: React.ReactNode, onClick?: () => void, className?: string }> = ({
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