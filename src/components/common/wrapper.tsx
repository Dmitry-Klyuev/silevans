import React from 'react';
import style from '../../styles/components/wrapper.module.scss'

const Wrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({children, className}) => {

    const finalClass = className ? `${style.wrapper} ${className}` : style.wrapper

    return (
        <section className={finalClass}>
            {children}
        </section>
    );
};

export default Wrapper;