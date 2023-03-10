import React, {useState} from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import FullButton from "@/components/common/buttons/FullButton";
import {useFormik} from "formik";
import {CHAT_ID, URI_API} from "@/components/05_Questionnaire/telegramAPI/telegramAPI";
import style from './../../../styles/components/callBackMe.module.scss'
import * as yup from "yup";
import * as scroll from 'react-scroll';
import axios from "axios";


const CallBackMe = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {Element: ScrollElement} = scroll;

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        onSubmit: (values, {resetForm}) => {
            setIsLoading(true)

            const mailRequest = axios.post("https://silevans-backend.vercel.app/callback", values)

            const tgBotRequest = axios.post(URI_API, {
                chat_id: CHAT_ID, parse_mode: "html", text: `<b>Заказан звонок!</b> \n
                 <b>Имя: ${values.name}, \nтелефон: ${values.phone}.</b>`
            })

            Promise.all([mailRequest, tgBotRequest])
                .then(() => {
                    alert("Ваша анкета была успешно отправлена! В ближайшее время наши специалисты с Вами свяжутся.")
                    resetForm()
                })
                .catch(() => {
                    alert("Произошла ошибка :( Попробуйте еще раз.")
                })
                .finally(() => {
                    setIsLoading(false)
                });
        },
        validationSchema: yup.object({
            name: yup.string().trim().required("Необходимо ввести имя"),
            phone: yup.string().required("Необходима ввести телефон").min(11, "Слишком короткий номер")
        })
    })

    return (
        <ScrollElement
            id="callMeBack"
            name="callMeBack"
        >
            <Wrapper className={style.wrapper}>
                <SmallTitle children={"Остались вопросы?"} className={style.title}/>
                <form className={style.form} onSubmit={formik.handleSubmit}>

                    <div className={style.column1}>
                        {formik.errors.name && formik.touched.name &&
                            <span className={style.formikError}>{formik.errors.name}</span>}
                        <input name={"name"} type="text" value={formik.values.name} placeholder="Иванов Иван Иванович"
                               className={formik.errors.name && formik.touched.name ? `${style.name} ${style.inputError}` : style.name}
                               onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isLoading}
                        />
                        <p className={style.description}>Оставьте свои контакты и наши специалисты с вами свяжутся</p>
                    </div>

                    <div className={style.column2}>
                        {formik.errors.phone && formik.touched.phone &&
                            <span className={style.formikError}>{formik.errors.phone}</span>}
                        <input type="tel" name={"phone"} value={formik.values.phone} placeholder="+7 (___) ___ __ __"
                               className={formik.errors.phone && formik.touched.phone ? `${style.phone} ${style.inputError}` : style.phone}
                               onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isLoading}
                        />
                        <FullButton className={style.button} type={"submit"}>Заказать звонок</FullButton>
                    </div>

                </form>
            </Wrapper>
        </ScrollElement>
    );
};

export default CallBackMe;