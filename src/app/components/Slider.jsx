import React from "react";
import s from "./styles/slider.module.scss";
import Loader from "./Loader";
import {useSelector} from "react-redux";
import {select_all_games} from "../store/slices/gamesSlice";

export default (props) => {
    const all_games = useSelector(select_all_games)

    const emoji = ['⚡', '🌈', '☀️', '🍄', '💥', '🔥', '🪐', '💫']

    console.log(props.sliderGame)

    return props.sliderGame ? (
        <div style={{backgroundImage: `url(${props.sliderGame.background_image})`}} className={s.slider}>

            <div className={s.slider_description}>
                <h2>{props.sliderGame.name} {emoji[Math.floor(Math.random() * (emoji.length - 1))]}</h2>
                <p>{props.sliderGame.genres.map(g => g.name).slice(0, 3).join(', ')}</p>
                <p className={s.slider_description_platforms}>Platforms: {props.sliderGame.platforms.map(p => p.platform.name).slice(0, 4).join(', ')}</p>
                <p>Released date: {props.sliderGame.released.replaceAll('-', '/')}</p>
                <div style={+props.sliderGame.metacritic > 70 ? {
                    borderColor: 'rgba(109,200,73,.4)',
                    color: '#6dc849'
                } : {color: '#fdca52', borderColor: 'rgba(253,202,82,.4)'}}
                     className={s.slider_description_rating}>{props.sliderGame.metacritic}</div>
            </div>
            <div className={s.slider_buttons}>
                {all_games.map((g, index) => <div onClick={() => props.setNum(index)}
                                                  className={`${s.slider_buttons_dot} ${g.id === props.sliderGame.id ? s.slider_buttons_dot_active : ''} `}></div>)}
            </div>
        </div>) : <Loader/>
}