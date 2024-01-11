import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../feature/Cartslice'

export const store = configureStore({
    reducer:{
        Cart:cartReducer
    }
})