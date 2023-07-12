import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    liked: [],
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addLike: (state, action) => {
            localStorage.setItem(
                'likes',
                JSON.stringify(state.liked.concat(action.payload))
            );

            state.liked = state.liked.concat(action.payload);
        },
        removeLike: (state, action) => {
            state.liked = state.liked.filter((id) => id !== action.payload);
            localStorage.setItem('likes', JSON.stringify(state.liked));
        },
        initLikes: (state) => {
            state.liked = JSON.parse(localStorage.getItem('likes') ?? '[]');
        },
    },
});

export const { addLike, removeLike, initLikes } = counterSlice.actions;

export default counterSlice.reducer;
