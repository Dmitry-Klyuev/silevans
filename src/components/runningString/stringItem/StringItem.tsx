import React from 'react';
import Image from "next/image";
import style from "@/styles/components/runningString.module.scss";
import star from "@/assets/svg/StarRunString.svg";

const StringItem: React.FC<{ string: string }> = ({string}) => {
    return (
        <div className={style.stringItem}>
            <Image src={star} width={47} height={47} alt={"star"} className={style.star}/>
            <span className={style.text}> {string} </span>
        </div>
    );
};

export default StringItem;