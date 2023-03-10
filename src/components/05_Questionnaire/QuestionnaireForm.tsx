import React, {ReactNode, useState} from 'react';
import {useFormik} from 'formik';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";
import SelectorItem from "@/components/05_Questionnaire/SelectorItem";
import {scrollToElement} from "@/utils/scrollToElement";
import {selectorItemsData} from "@/components/05_Questionnaire/SelectorItemsData";
import {CHAT_ID, URI_API} from "@/components/05_Questionnaire/telegramAPI/telegramAPI";
import axios from "axios";
import * as yup from "yup";
import * as scroll from "react-scroll";
import style from "@/styles/components/questionnaireForm.module.scss"

const QuestionnaireForm = () => {

    const [isMessageActive, setIsMessageActive] = useState<boolean>(false)

    const [interest, setInterest] = useState<Array<{ checked: boolean, title: ReactNode }>>([])

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {Element: ScrollElement} = scroll;

    const onSubmitHandler = () => {
        if (formik.errors.name || formik.errors.phone || formik.errors.email) {
            scrollToElement("commonInfo", 0)
        }
    }

    const onMessageActiveHandler = () => {
        setIsMessageActive(true)
    }

    const addClickedButton = (checkedButton: Array<{ checked: boolean, title: ReactNode }>) => {
        const indexOfCheckedButton = interest.findIndex(el => el.title === checkedButton[0].title)
        let newInterest = interest
        if (checkedButton[0] && indexOfCheckedButton >= 0) {
            newInterest.splice(indexOfCheckedButton, 1, ...checkedButton)
        } else {
            newInterest.push(...checkedButton)
        }
        setInterest(newInterest)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            companyOrProject: '',
            message: '',
            interest: interest
        },
        onSubmit: (values, {resetForm}) => {
            setIsLoading(true)

            axios.post(URI_API, {
                chat_id: CHAT_ID, parse_mode: "html", text: `<b>Заявка с сайта!</b> \n
 <b>Имя: ${values.name}, \nтелефон: ${values.phone}, \nemail: ${values.email}, \nкомпания или проект: ${values.companyOrProject ? values.companyOrProject : "нет данных"}, \nсообщение: ${values.message ? values.message : "не введено дополнительной информации"}.\n</b>
 <b>Интересует: ${values.interest.length > 0 ? values.interest.filter(i => i.checked).map(i => i.title) : "не выбрано"} </b>`
            })
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
            phone: yup.string().required("Необходима ввести телефон").min(7, "Слишком короткий номер"),
            email: yup.string().email('Некорректный email').required('Необходимо ввести email'),
        })
    });


    return (
        <ScrollElement
            id="callMeBack"
            name="callMeBack"
        >
            <Wrapper className={style.wrapper}>
                <form className={style.formBlock} onSubmit={formik.handleSubmit}>

                    <ScrollElement
                        id="commonInfo"
                        name="commonInfo"
                    >
                        <div className={style.commonInfo}>
                            <SmallTitle className={style.titles}>Общая информация</SmallTitle>
                            <div className={style.commonInfoForm} id={"commonInfo"}>
                                <div className={style.formName}>
                                    <label className={style.label}>Имя</label>
                                    <input type="text" name="name" placeholder={"Иванов Иван Иванович"}
                                           onChange={formik.handleChange}
                                           value={formik.values.name} disabled={isLoading}
                                           className={formik.errors.name && formik.touched.name ? style.errorInput : ""}/>
                                    {formik.errors.name && formik.touched.name &&
                                        <span className={style.formikError}>{formik.errors.name}</span>}
                                    {!formik.values.name &&
                                        <span className={style.fakePlaceholder}>Фамилия Имя Отчество</span>}
                                </div>
                                <div className={style.formPhone}>
                                    <label className={style.label}>Номер телефона</label>
                                    <input type="text" name="phone" placeholder={"+7(___) ___ __ __"}
                                           onChange={formik.handleChange}
                                           value={formik.values.phone} disabled={isLoading}
                                           className={formik.errors.phone && formik.touched.phone ? style.errorInput : ""}/>
                                    {formik.errors.phone && formik.touched.phone &&
                                        <span className={style.formikError}>{formik.errors.phone}</span>}
                                    {!formik.values.phone &&
                                        <span className={style.fakePlaceholder}>+7(___) ___ __ __</span>}
                                </div>
                                <div className={style.formEmail}>
                                    <label className={style.label}>E-mail</label>
                                    <input type="text" name="email" placeholder={"Ivan@mail.ru"}
                                           onChange={formik.handleChange}
                                           value={formik.values.email} disabled={isLoading}
                                           className={formik.errors.email && formik.touched.email ? style.errorInput : ""}/>
                                    {formik.errors.email && formik.touched.email &&
                                        <span className={style.formikError}>{formik.errors.email}</span>}
                                    {!formik.values.email && <span className={style.fakePlaceholder}>E-mail</span>}
                                </div>
                                <div className={style.formCompanyName}>
                                    <label className={style.label}>Компания/проект</label>
                                    <input type="text" name="companyOrProject"
                                           placeholder={"OOO Ivanovka"}
                                           onChange={formik.handleChange}
                                           value={formik.values.companyOrProject} disabled={isLoading}/>
                                    {!formik.values.companyOrProject &&
                                        <span className={style.fakePlaceholder}>Компания/проект</span>}
                                </div>
                            </div>
                        </div>
                    </ScrollElement>

                    <div className={style.interest}>
                        <SmallTitle className={style.titles}>Вас интересует</SmallTitle>
                        <div className={style.selectorsBlock}>
                            <div className={style.container}>
                                {selectorItemsData.map((i) => <SelectorItem key={i.id} title={i.title}
                                                                            buttons={i.buttons}
                                                                            background={i.style}
                                                                            onMessageActiveHandler={onMessageActiveHandler}
                                                                            addClickedButton={addClickedButton}
                                                                            interest={interest}/>)}
                            </div>
                        </div>
                    </div>

                    <ScrollElement
                        id="projectInfo"
                        name="projectInfo"
                    >
                        <div className={style.projectInfo}>
                            <div className={style.projectInputForm}>
                                <div className={style.row2}>
                                    <div className={style.formMessage}>
                                        <label className={style.label}>Сообщение</label>
                                        <textarea disabled={!isMessageActive || isLoading} name="message"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.message}/>
                                        {!formik.values.name &&
                                            <span className={style.fakePlaceholder}>Сообщение</span>}
                                    </div>
                                </div>

                                <div className={style.buttonBlock}>
                                    <FullButton className={style.button} type="submit"
                                                onClick={onSubmitHandler}>Отправить</FullButton>
                                </div>

                            </div>
                        </div>
                    </ScrollElement>


                </form>

            </Wrapper>
        </ScrollElement>
    );
};

export default QuestionnaireForm;