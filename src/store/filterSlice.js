import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orientation: 'all',
    size: 'all',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSizeFilter: (state, action) => {
            state.size = action.payload;
        },
        setOrientationFilter: (state, action) => {
            state.orientation = action.payload;
        },
        clearFilters: (state) => {
            state.size = '';
            state.orientation = '';
        },
    },
});

export const { setSizeFilter, setOrientationFilter, clearFilters } =
    filterSlice.actions;

export default filterSlice.reducer;
