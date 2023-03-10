import * as scroll from "react-scroll";

export const scrollToElement = (target: string, offset: number) => {
    scroll.scroller.scrollTo(target, {
        duration: 700,
        smooth: true,
        offset,
    })
}
