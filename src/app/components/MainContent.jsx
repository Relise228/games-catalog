import React, {useEffect, useState} from "react";
import s from "./styles/main-content.module.scss";
import Slider from "./Slider";

export default (props) => {

    // useEffect(() => {}, props.)

    return <div className={s.main_content}>
        <Slider sliderGame={props.sliderGame} setNum={props.setNum}/>
    </div>
}