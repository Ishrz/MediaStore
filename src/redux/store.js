import {configureStore} from '@reduxjs/toolkit'
import searchRedu from './features/searchSlice'
import collectionRedu from './features/collectionSlice'
export const store=configureStore({
    reducer:{
        searchRedu,
        collectionRedu,
    },
})