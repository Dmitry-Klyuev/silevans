import vk from "../../../assets/img/vk.png"
import application from "../../../assets/img/application.png"
import www from "../../../assets/img/www.png"
import socialGroup from "../../../assets/img/socialGroup.png"


export const PromoData: PromoItemType[] = [
    {
        id: '1',
        img: socialGroup.src,
        title: 'Сообщество',
        description: 'Рекламные инструменты, которые мы используем, привлекают в Вашу группу новых подписчиков.'
    },
    {
        id: '2',
        img: www.src,
        title: 'Сайт',
        description: 'Обеспечиваем прирост трафика на сайте, оптимизируем рекламные кампании, анализируя их поведение.'
    },
    {
        id: '3',
        img: application.src,
        title: 'Приложение',
        description: 'Для того, чтобы приложение продвигалось и держалось в топе, мы обеспечиваем ему трафик.'
    },
    {
        id: '4',
        img: vk.src,
        title: 'Рассылка во «ВКонтакте»',
        description: 'Снижаем затраты на рекламу за счёт подогрева интереса ЦА и её подведения к совершению покупки.'
    },

]


type PromoItemType = {
    id: string,
    img: string
    title: string,
    description: string
}