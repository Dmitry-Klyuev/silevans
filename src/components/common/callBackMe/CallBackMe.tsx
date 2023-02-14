import React from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import style from './../../../styles/components/callBackMe.module.scss'
import FullButton from "@/components/common/buttons/FullButton";
import {useFormik} from "formik";
import * as yup from "yup";

const CallBackMe = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values.name, values.phone)
            resetForm()
        },
        validationSchema: yup.object({
            name: yup.string().trim().required("Необходимо ввести имя"),
            phone: yup.string().required("Необходима ввести телефон").min(11, "Слишком короткий номер")
        })
    })
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle children={"Остались вопросы?"} className={style.title}/>
            <form className={style.form} onSubmit={formik.handleSubmit}>

                <div className={style.column1}>
                    {formik.errors.name && formik.touched.name &&
                        <span className={style.formikError}>{formik.errors.name}</span>}
                    <input name={"name"} type="text" value={formik.values.name} placeholder="Иванов Иван Иванович"
                           className={style.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    />
                    <p className={style.description}>Оставьте свои контакты и наши специалисты с вами свяжутся</p>
                </div>

                <div className={style.column2}>
                    {formik.errors.phone && formik.touched.phone &&
                        <span className={style.formikError}>{formik.errors.phone}</span>}
                    <input type="tel" name={"phone"} value={formik.values.phone} placeholder="+7 (___) ___ __ __"
                           className={style.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    />
                    <FullButton className={style.button} type={"submit"}>Заказать звонок</FullButton>
                </div>

            </form>
        </Wrapper>
    );
};

export default CallBackMe;