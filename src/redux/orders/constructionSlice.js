import { createSlice } from '@reduxjs/toolkit';
import { constructionsData } from '../../data/constructionsData'

const initialState = constructionsData

export const constructionSlice = createSlice({
    name: 'constructiions',
    initialState,
    reducers: {
        // setConstruction: (state, action) => { action.payload } //action.payload - новый (измененный объект)
    }
})

export const selectConstructions = (state) => state.constructions

export default constructionSlice.reducer