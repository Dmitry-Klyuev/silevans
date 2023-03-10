import React from 'react';
import style from "@/styles/components/toolsAndTechnologies.module.scss";
import purpleGear from "@/assets/img/gears_icons/purpleGear.png";
import pinkGear from "@/assets/img/gears_icons/roseGear.png";
import blueGear from "@/assets/img/gears_icons/blueGear2.png";
import blueBigGear from "@/assets/img/gears_icons/blueGear.png";
import greenGear from "@/assets/img/gears_icons/greenGear.png";
import greenBigGear from "@/assets/img/gears_icons/greenGear2.png";

const GearsList = () => {
    return (
        <div className={style.gears}>
            <img src={purpleGear.src} alt="tool" className={style.purple}/>
            <img src={pinkGear.src} alt="tool" className={style.pink}/>
            <img src={blueGear.src} alt="tool" className={style.blue}/>
            <img src={blueBigGear.src} alt="tool" className={style.blueBig}/>
            <img src={greenGear.src} alt="tool" className={style.green}/>
            <img src={greenBigGear.src} alt="tool" className={style.greenBig}/>
        </div>
    );
};

export default GearsList;