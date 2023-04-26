import React, {useEffect, useState} from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import CardModal from "@/components/06_Projects/ourProjects/CardModal";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import {useWindowSize} from "@/hooks/useWindowSize";
import LinkBtn from "@/components/common/buttons/LinkBtn";

const Cards: React.FC<{ portfolio: PortfolioType[], setIdCallBack: (id: string) => void, id: string, setPageSize: (size: number) => void, pageSize:number}> = ({
                                                                                                                                                                     portfolio,
                                                                                                                                                                     setIdCallBack,
                                                                                                                                                                     id,
                                                                                                                                                                     setPageSize,
    
                                                                                                                                                                 }) => {
    const size = useWindowSize();
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (size.width !== undefined) {
            if (size.width > 1440) {
                setPageSize(12)
            }
            if (size.width < 1440 && size.width > 965) {
                setPageSize(8)
            }
            if (size.width < 965) {
                setPageSize(4)
            }
        }
    }, [size])

    const onItemHandler = (id: string) => {
        setIdCallBack(id)
    }
    const showModalHandler = (open: boolean) => {
        setShowModal(open)
    }

    return (
        <>
            {portfolio.map((el, i) =>
                <div key={i} className={style.item}>
                    <img src={el.img}
                         alt="image"
                         onMouseEnter={() => onItemHandler(el.id)}
                         className={style.img}
                    />
                    <div className={style.glass}>
                        <h5>{el.title}</h5>
                        <p>{el.services.description}</p>
                        <LinkBtn onClick={() => showModalHandler(true)} className={style.linkBtn}>Подробнее</LinkBtn>
                        <LinkBtn className={style.linkBtnMobile}><a href={el.link}>Перейти на страницу</a></LinkBtn>
                    </div>
                    {showModal && id === el.id &&
                        <div className={style.wrapperModal}
                             onClick={(e) => (e.currentTarget === e.target) && showModalHandler(false)}
                        >
                            <img src={el.img}
                                 alt="image"
                                 className={style.imgModal}
                            />
                            <CardModal el={el} closeModal={() => showModalHandler(false)}/>
                        </div>}
                </div>
            )}
        </>
    );
};

export default Cards;