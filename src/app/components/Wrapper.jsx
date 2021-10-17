import React from "react";
import s from './styles/wrapper.module.scss';

export default ({children}) => {
    return <div className={s.wrapper}>{children}</div>
}