import React from "react";
import s from './styles/sidebar.module.scss'
import {Link} from "react-router-dom";
import profileImage from '../img/profile.jpg'
import presentImage from '../img/present.svg'
import folderImage from '../img/folders.svg'
import peopleImage from '../img/people.svg'
import starImage from '../img/star-svgrepo-com.svg'
import fireImage from '../img/fire-svgrepo-com.svg'
import nextImage from '../img/next-svgrepo-com.svg'
import cupImage from '../img/cup-svgrepo-com.svg'
import graphImage from '../img/bar-graph-svgrepo-com.svg'
import crownImage from '../img/crown-svgrepo-com.svg'

export default () => {

    const PROFILE = 'relise228'

    return <div className={s.sidebar} >
        <aside>
            <nav className={s.sidebar_nav}>
                <div className={s.sidebar_nav_main}><Link to='/'>Home</Link></div>
                <div className={s.sidebar_nav_main}><Link to='/reviews'>Reviews</Link></div>
                <div className={s.sidebar_nav_main}>
                    <div className={s.sidebar_nav_sub}>
                        <div className={s.sidebar_nav_sub_header}>
                            <Link to={`@${PROFILE}`}>relise <img className={s.sidebar_nav_sub_profile}
                                                                 src={profileImage}
                                                                 alt="profile image"/></Link>
                        </div>
                        <div className={s.sidebar_nav_sub_list}>
                            <ul>
                                <li><Link to={'/wishlist'}>
                                    <div><img src={presentImage} alt="present"/></div>
                                    Wishlist</Link></li>
                                <li><Link to={'/wishlist'}>
                                    <div><img src={folderImage} alt="folders"/></div>
                                    My library</Link></li>
                                <li><Link to={'/wishlist'}>
                                    <div><img src={peopleImage} alt="people"/></div>
                                    People you follow</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.sidebar_nav_sub}>
                        <div>New Releases</div>
                        <div className={s.sidebar_nav_sub_list}>
                            <ul>
                                <li><Link to={'/last'}>
                                    <div><img src={starImage} alt="star"/></div>
                                    Last 30 days</Link></li>
                                <li><Link to={'/this-week'}>
                                    <div><img src={fireImage} alt="fire"/></div>
                                    This week</Link></li>
                                <li><Link to={'/next-week'}>
                                    <div><img src={nextImage} alt="next"/></div>
                                    Next week</Link></li>
                                <li><Link to={'/video-game-releases'}>
                                    <div><p>31</p></div>
                                    Release calendar</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.sidebar_nav_sub}>
                        <div>Top</div>
                        <div className={s.sidebar_nav_sub_list}>
                            <ul>
                                <li><Link to={'/best-of-the-year'}>
                                    <div><img src={cupImage} alt="cup"/></div>
                                    Best of the year</Link></li>
                                <li><Link to={'/popular-in-2020'}>
                                    <div><img src={graphImage} alt="graph"/></div>
                                    Popular in 2020</Link></li>
                                <li><Link to={'/all-time-top'}>
                                    <div><img src={crownImage} alt="crown"/></div>
                                    All time top 250</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>

    </div>
}