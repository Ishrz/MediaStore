import {configureStore} from '@reduxjs/toolkit'
import search from './features/searchSlice'
export const store=configureStore({
    reducer:{
        search,
    },
})