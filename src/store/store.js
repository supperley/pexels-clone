import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photosSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
    reducer: {
        photos: photosReducer,
        filter: filterReducer,
    },
});
