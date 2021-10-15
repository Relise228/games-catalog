import React, {useEffect} from 'react';
import s from './App.module.scss';
import {gamesAPI} from "./app/api/gamesAPI";
import {useDispatch, useSelector} from "react-redux";
import {get_all_games, select_all_games} from "./app/store/slices/gamesSlice";
import {select_theme} from "./app/store/slices/configSlice";
import Header from "./app/components/Header";

function App() {
  const dispatch = useDispatch();
  const all_games = useSelector(select_all_games)
  const theme = useSelector(select_theme)

  useEffect(()=> {
      dispatch(get_all_games())
  }, [])

  useEffect(() => {
    console.log(all_games)
  }, [all_games])
  return (
    <div style={theme === 'dark' ? {backgroundColor: '#151515', color: '#fff'} : {backgroundColor: '#fff', color: '#000'}}  className={s.app}>
      <Header/>
    </div>
  );
}

export default App;
