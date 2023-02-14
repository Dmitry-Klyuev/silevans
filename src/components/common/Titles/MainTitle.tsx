import React from 'react';
import style from "../../../styles/components/titles/titles.module.scss";

const MainTitle: React.FC<{ title: string, className?: string }> = ({title, className}) => {
    const finalClass = className ? `${style.mainTitle} ${className}` : style.mainTitle

    return (
        <h1 className={finalClass}>{title}</h1>
    );
};

export default MainTitle;