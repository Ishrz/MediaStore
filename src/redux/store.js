import {configureStore} from '@reduxjs/toolkit'
import searchRedu from './features/searchSlice'
export const store=configureStore({
    reducer:{
        searchRedu,
    },
})