import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {gamesAPI} from "../../api/gamesAPI";

const initialState = {
  theme: 'dark',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    set_theme: (state, action) => {
      state.theme = action.payload
    },
  },
});

export const { set_theme } = configSlice.actions;


export const select_theme = (state) => state.config.theme;

export default configSlice.reducer;
