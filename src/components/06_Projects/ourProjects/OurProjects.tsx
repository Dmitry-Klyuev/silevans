import React, {useEffect, useState} from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import MainTitle from "@/components/common/Titles/MainTitle";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import ReactPaginate from "react-paginate";
import Cards from "@/components/06_Projects/ourProjects/Cards";
import {useWindowSize} from "@/hooks/useWindowSize";
import arrow from "@/assets/img/ArrowPaginate.webp"


const OurProjects: React.FC<{ portfolio: PortfolioType[] }> = ({portfolio}) => {
    const [id, setId] = useState('')
    const [slice, setSliced] = useState(portfolio)
    const [pageSize, setPageSize] = useState(12)
    const pagesCount = pageSize && Math.ceil(portfolio.length / pageSize);
    const size = useWindowSize();

    useEffect(() => {
        if (size.width !== undefined) {
            if (size.width > 1440) {
                paginate(portfolio, 1, pageSize)
            }
            if (size.width < 1440 && size.width > 965) {
                paginate(portfolio, 1, pageSize)
            }
            if (size.width < 965) {
                paginate(portfolio, 1, pageSize)
            }
        }
    }, [size, pageSize])


    const paginate = (portfolio: PortfolioType[], pageNumber: number, pageSize: number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const slice = portfolio.slice(startIndex, startIndex + pageSize);
        setSliced(slice)
    };

    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.content}>
                <Cards id={id} portfolio={slice}
                       setIdCallBack={(id) => setId(id)}
                       setPageSize={setPageSize}
                       pageSize={pageSize}
                />
            </div>
            {slice.length !== portfolio.length &&
                <LinkBtn className={style.button} onClick={() => setPageSize(pageSize + 4)}>Загрузить еще</LinkBtn>}
            <ReactPaginate
                pageCount={pagesCount}
                onPageChange={(selectedItem) => paginate(portfolio, selectedItem.selected + 1, pageSize)}
                containerClassName={style.pagination}
                activeClassName={style.activeBtn}
                pageClassName={style.btn}
                pageLinkClassName={style.linkBtn}
                previousLabel={<img src={arrow.src} alt=""/>}
                nextLabel={<img src={arrow.src} alt="" style={{rotate: '180deg'}}/>}
            />
        </Wrapper>
    );
};

export default OurProjects;