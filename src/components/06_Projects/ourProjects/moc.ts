import air from '../../../assets/img/portfolio/AirCompany.jpg'
import color from '../../../assets/img/portfolio/ColorPrint.jpeg'
import vip from '../../../assets/img/portfolio/1vip.jpeg'
import group from '../../../assets/img/portfolio/TheGroup.jpg'
import halabo from '../../../assets/img/portfolio/Halabo.jpeg'
import ice from '../../../assets/img/portfolio/MarcoIce.jpeg'
import market from '../../../assets/img/portfolio/Market.jpeg'
import rbt from '../../../assets/img/portfolio/RBT.jpeg'
import sela from '../../../assets/img/portfolio/Sela.jpeg'
import sky from '../../../assets/img/portfolio/SkySmart.jpg'
import ventriloc from '../../../assets/img/portfolio/Ventriloc.jpeg'

export type PortfolioType<T = { title: string, description: string }> = {
    id: string,
    img?: string
    title: string,
    request: T,
    deadlines: T,
    services: T,
    frontEnd: T,
    backEnd: T,
    design: T,
    link: string
}

export const portfolioData: PortfolioType[] = [
    {
        id: '1',
        img: sela.src,
        title: 'Sela',
        request: {title: 'просьба', description: 'Нас попросили добавить страницу "Новинки'},
        deadlines: {title: 'сроки исполнения', description: '14 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Интернет-магазин'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Node.js'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://www.sela.ru'
    }, {
        id: '2',
        img: sky.src,
        title: 'Skysmart Pro',
        request: {title: 'просьба', description: 'Разработать сайт для школы программирования'},
        deadlines: {title: 'сроки исполнения', description: '23 дня разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Node.js'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://skysmart.ru'
    }, {
        id: '3',
        img: group.src,
        title: 'Living Corporate',
        request: {title: 'просьба', description: 'Разработать сайт подкастов'},
        deadlines: {title: 'сроки исполнения', description: '25 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://livingcorporate.workshopbuilt.com'
    }, {
        id: '4',
        img: air.src,
        title: 'Air company',
        request: {title: 'просьба', description: 'Оптимизировать сайт компании'},
        deadlines: {title: 'сроки исполнения', description: '17 дней опитимазиции бэкенда'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Nuxt, Scss, Vue Js'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://www.aircompany.com'
    }, {
        id: '5',
        img: rbt.src,
        title: 'RBT.ru',
        request: {title: 'просьба', description: 'Добавить страницу "Товары для детей"'},
        deadlines: {title: 'сроки исполнения', description: '10 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Интернет-магазин'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Node js'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://www.rbt.ru'
    }, {
        id: '6',
        img: market.src,
        title: 'megamarketbu',
        request: {title: 'просьба', description: 'Разработать интернет-магазин Б/У техники'},
        deadlines: {title: 'сроки исполнения', description: '26 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Интернет-магазин'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Node js'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'http://megamarketbu.ru'
    }, {
        id: '7',
        img: vip.src,
        title: '1VIP',
        request: {title: 'просьба', description: 'Разработать сайт компании 1VIP'},
        deadlines: {title: 'сроки исполнения', description: '23 дня разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'http://1vip.ru'
    }, {
        id: '8',
        img: ice.src,
        title: 'Marcoicecream',
        request: {title: 'просьба', description: 'Cайт компании по созданию мороженого в США'},
        deadlines: {title: 'сроки исполнения', description: '31 день разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Node js'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://www.marcoicecream.com'
    }, {
        id: '9',
        img: color.src,
        title: 'Counter-Print',
        request: {title: 'просьба', description: 'Разработать эксклюзив-книжный интернет-магазин'},
        deadlines: {title: 'сроки исполнения', description: '8 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Интернет-магазин'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Node js'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://www.counter-print.co.uk'
    }, {
        id: '10',
        img: ventriloc.src,
        title: 'Ventriloc',
        request: {title: 'просьба', description: 'Дизайн сайта французкой компании по работе с данными'},
        deadlines: {title: 'сроки исполнения', description: '16 дней дизайна'},
        services: {title: 'услуги', description: 'Дизайн'},
        frontEnd: {title: 'фронтенд', description: ''},
        backEnd: {title: 'бэкенд', description: ''},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ventriloc.ca/en'
    }, {
        id: '11',
        img: halabo.src,
        title: 'Ha-labo',
        request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
        deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ha-labo.co.jp/?ref=httpster.net'
    }, {
        id: '12',
        img: halabo.src,
        title: 'Ha-labo',
        request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
        deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ha-labo.co.jp/?ref=httpster.net'
    }, {
        id: '13',
        img: halabo.src,
        title: 'Ha-labo',
        request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
        deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ha-labo.co.jp/?ref=httpster.net'
    },
    {
        id: '14',
        img: halabo.src,
        title: 'Ha-labo',
        request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
        deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ha-labo.co.jp/?ref=httpster.net'
    }, {
        id: '15',
        img: halabo.src,
        title: 'Ha-labo',
        request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
        deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ha-labo.co.jp/?ref=httpster.net'
    }, {
        id: '16',
        img: halabo.src,
        title: 'Ha-labo',
        request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
        deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
        services: {title: 'услуги', description: 'Корпоративный сайт'},
        frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
        backEnd: {title: 'бэкенд', description: 'Java'},
        design: {title: 'Дизайн', description: 'Figma'},
        link: 'https://ha-labo.co.jp/?ref=httpster.net'
    },
]