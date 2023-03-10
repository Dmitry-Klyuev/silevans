import React from 'react';
import style from "@/styles/components/comfortable.module.scss";
import Wrapper from "@/components/common/wrapper";

const Comfortable = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.blockComfort}>
                <div className={style.rocketsImg}>
                    <h3 className={style.comfort_title}>С нами <br/> комфортно</h3>
                </div>
                <div className={style.circleImg}>
                    <p className={style.comfort_description}>
                        Активно взаимодействуя с нами, вы будете заранее знать,
                        какой именно результат вы получите. Стоит ли говорить, что он вам понравится?
                    </p>
                </div>

            </div>
        </Wrapper>
    );
};

export default Comfortable;