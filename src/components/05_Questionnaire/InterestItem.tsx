import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState} from 'react';
import style from "@/styles/components/checkbox/checkbox.module.scss"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InterestItemPropsType = DefaultInputPropsType & {
    onChangeChecked: (checked: boolean, children: ReactNode) => void
    interest: Array<{ checked: boolean, title: ReactNode }>
}
const InterestItem: React.FC<InterestItemPropsType> = ({
                                                           type,
                                                           onChange, onChangeChecked,
                                                           className,
                                                           children, interest,
                                                           ...restProps
                                                       }) => {

    const isChecked = interest.findIndex(i => i.title === children && i.checked) !== -1

    const finalInputClassName = `${style.checkboxBtn} ${className ? className : ''}`

    const [checked, setChecked] = useState(isChecked)
    

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
        onChangeChecked(e.currentTarget.checked, children)
    }

    return (
        <label className={finalInputClassName}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                checked={checked}

                {...restProps}
            />
            {children && <span>{children}</span>}
        </label>
    );
};

export default InterestItem;