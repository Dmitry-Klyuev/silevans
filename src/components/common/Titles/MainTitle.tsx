import React from 'react';
import style from "../../../styles/components/titles/titles.module.scss";

const MainTitle: React.FC<{ title: string, className?: string, isMainTitleWide?: boolean }> = ({
                                                                                                   title,
                                                                                                   className,
                                                                                                   isMainTitleWide
                                                                                               }) => {
    const finalClass = isMainTitleWide ? `${style.mainTitle} ${style.mainTitleWide}` : className ? `${style.mainTitle} ${className}` : style.mainTitle

    return (
        <h1 className={finalClass}>{title}</h1>
    );
};

export default MainTitle;