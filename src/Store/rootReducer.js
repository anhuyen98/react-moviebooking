import { combineReducers } from "@reduxjs/toolkit";
import { bookingMovieReducer } from "./bookingMovie/slice";

export const rootReducer = combineReducers({
    bookingMovie: bookingMovieReducer
})