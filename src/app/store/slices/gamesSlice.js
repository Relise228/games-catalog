import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {gamesAPI} from "../../api/gamesAPI";

const initialState = {
  all_games: {
    games: [],
    count: 0,
  },
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    set_all_games: (state, action) => {
      state.all_games = {
        games: [...action.payload.result],
        count: action.payload.count
    }
    },
  },
});

export const { set_all_games } = gamesSlice.actions;


export const select_all_games = (state) => state.games.all_games.games;
export const select_games_count = (state) => state.games.all_games.count;


export const get_all_games = () => async (dispatch) => {
  const result = await gamesAPI.getAllGames();
  console.log(result)
  dispatch(set_all_games({result: result.results, count: result.count}))
};

export default gamesSlice.reducer;
