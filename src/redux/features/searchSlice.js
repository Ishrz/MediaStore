import { createSlice } from "@reduxjs/toolkit";
let initialState={
    query:'',
    activeTab:'Photos',
    results:[],
    isLoading:false,
    error:null,
}
const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setQuery(state,action){
            state.query=action.payload;
        },
        setActiveTab(state,action){
            state.activeTab=action.payload;
        },
        setLoading(state,action){
            state.error=null;
            state.isLoading=action.payload;
        },
        setResults(state,action){
            state.isLoading=false;
            state.results=action.payload;
            state.error=null;
        },
        setError(state,action){
            state.error=action.payload;
            state.isLoading=null;
        },
        clearresults(state,action){
            state.results=[];
        }

    }
})


export const{setQuery,setActiveTab,setLoading,setError,setResults,clearresults} =searchSlice.actions;

export default searchSlice.reducer