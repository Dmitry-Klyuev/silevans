import React from 'react';
import style from "@/styles/components/titles/titles.module.scss";

const SmallTitle: React.FC<{ children?: React.ReactNode, className?: string }> = ({children, className}) => {
    const finalClass = className ? `${style.title} ${className}` : style.title


    return (
        <h2 className={finalClass}>{children}</h2>
    );
};

export default SmallTitle;