import React, {useState} from "react";
import s from './styles/header.module.scss'
import {useSelector} from "react-redux";
import {select_games_count} from "../store/slices/gamesSlice";
import {number_formatter} from "../util/utils";
import {BrowserRouter, Link} from "react-router-dom";
import profile_img from '../img/profile.jpg'
import plus from '../img/plus.svg'
import search from '../img/search.svg'
import notification from '../img/notification.svg'


export default () => {
    const [hoverSearch, setHoverSearch] = useState(false);

    const count = useSelector(select_games_count)

    return <div className={s.header}>
        <div className={s.header_logo}>
            <BrowserRouter>
                <Link to={'/'}>GAMES</Link>
            </BrowserRouter>
        </div>
        <div className={s.header_search}>
            <input placeholder={`Search ${number_formatter(count)} games`} type="text" onMouseEnter={() => setHoverSearch(true)}/>
            <img className={`${s.header_search_icon} ${hoverSearch && s.header_search_icon_dark}`} src={search} alt="search"/>
        </div>
        <div className={s.header_buttons}>
            <img className={s.header_profile} src={profile_img} alt=""/>
            <p>My library</p>
            <img className={s.header_plus_notification} src={notification} alt="notification"/>
            <img className={s.header_plus_notification} src={plus} alt="plus"/>
            <p>API</p>
            <p style={{fontWeight: 500, letterSpacing: 0.2 + 'rem'}}>···</p>
        </div>
    </div>
}