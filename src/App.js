import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {gamesAPI} from "./app/api/gamesAPI";
import {useDispatch, useSelector} from "react-redux";
import {get_all_games, select_all_games} from "./app/store/slices/gamesSlice";
import {select_theme} from "./app/store/slices/configSlice";
import Header from "./app/components/Header";
import Sidebar from "./app/components/Sidebar";
import {Route, Switch} from "react-router-dom";
import MainContent from "./app/components/MainContent";
import Wrapper from "./app/components/Wrapper";

function App() {
    const dispatch = useDispatch();
    const all_games = useSelector(select_all_games)
    const theme = useSelector(select_theme)

    const [sliderGame, setSliderGame] = useState(undefined);
    const [num, setNum] = useState(0);

    useEffect(() => {
        dispatch(get_all_games())
    }, [])


    useEffect(() => {
        let interval = undefined;
        if (all_games.length > 0) {
            if (!sliderGame) setSliderGame(all_games[0])
            interval = setInterval(() => {
                if (num + 1 > all_games.length - 1) {
                    setNum(0)
                } else {
                    setNum(num + 1)
                }
            }, 5000)
        }

        return () => clearInterval(interval)
    }, [all_games, num])

    useEffect(() => {
        console.log(num)
        setSliderGame(all_games[num])
    }, [num])


    return (
        <div style={theme === 'dark' ? {backgroundColor: '#151515', color: '#fff'} : {
            backgroundColor: '#fff',
            color: '#000'
        }} className={s.app}>
            <Wrapper>
                <Header/>
                <div className={s.content}>
                    <Sidebar/>
                    <Switch>
                        <Route path={'/'} render={() => <MainContent sliderGame={sliderGame} setNum={setNum}/>}/>
                    </Switch>
                </div>
            </Wrapper>
        </div>
    );
}

export default App;
