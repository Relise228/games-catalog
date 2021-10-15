import {configureStore} from '@reduxjs/toolkit';
import games from '../store/slices/gamesSlice';
import config from '../store/slices/configSlice';

export const store = configureStore({
    reducer: {
        config,
        games
    },
});
