import {portfolioData} from "@/components/06_Projects/ourProjects/moc";

export const Api = {
    portfolioAPI() {//fix any
        // return axiosInstance.get<{}>('', data) //example for fetch data
        return new Promise(resolve => {
            resolve(portfolioData)
        }) //need remove after write BackEnd
    },
}