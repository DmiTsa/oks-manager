import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    constructions: ''
};

export const filterOrderSlice = createSlice({
    name: 'filterOrder',
    initialState,
    reducers: {
        setFilterConstructions: (state, action) => { state.constructions = action.payload },
    },
});

export const { setFilterConstructions } = filterOrderSlice.actions;

export const selectFilterConstructions = (state) => state.filter.constructions

export default filterOrderSlice.reducer;
