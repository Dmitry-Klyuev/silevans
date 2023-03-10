import React from 'react';
import style from "@/styles/components/toolsAndTechnologies.module.scss";

const FilteredTools: React.FC<{ title: string, img: string }> = ({title, img}) => {
    return <div className={style.toolItem}>
        <div className={style.toolIcon}>
            <img src={img} alt="icon"/>
        </div>
        <div className={style.toolName}>{title}</div>
    </div>
};

export default FilteredTools;