import { createSlice } from '@reduxjs/toolkit';
import { constructionsData } from '../../data/constructionsData'

const initialState = constructionsData

export const constructionSlice = createSlice({
    name: 'constructiions',
    initialState,
    reducers: {

    }
})

export const selectConstructions = (state) => state.constructions

export default constructionSlice.reducer