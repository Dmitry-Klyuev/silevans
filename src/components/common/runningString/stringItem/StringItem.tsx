import React from 'react';
import style from "@/styles/components/runningString.module.scss";
import star from "@/assets/img/starForRunningString.png";

const StringItem: React.FC<{ string: string }> = ({string}) => {
    return (
        <div className={style.stringItem}>
            <img src={star.src} alt={"star"}/>
            <span className={style.text}> {string} </span>
        </div>
    );
};

export default StringItem;