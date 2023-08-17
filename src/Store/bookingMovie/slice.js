import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected: [],
    reserved: [],
    totalSeat: 0
}
const bookingMovieSlice = createSlice({
    name: 'bookingMovie',
    initialState,
    reducers: {
        setSelected (state, action) {
            const index = state.selected.findIndex((s) => s.soGhe === action.payload.soGhe)
            if (index !== -1) {
                state.selected.splice(index, 1);
                state.totalSeat -= 1 
            } else {
                state.selected.push(action.payload);
                state.totalSeat += 1
            }
        },
        setReserved (state) {
            state.reserved = [...state.reserved, ...state.selected]
            state.selected = []
        }
    },
    extraReducers() {

    }
});

export const {reducer: bookingMovieReducer, actions: bookingMovieActions} = bookingMovieSlice