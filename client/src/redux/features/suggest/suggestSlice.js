import {createSlice} from '@reduxjs/toolkit'
import { getSuggest } from './suggestAction'


const initialState = {
    loading: false,
    error: null,
    suggests:null,
}


const suggestSlice = createSlice({
    name: "suggests",
    initialState : initialState,
    reducers: {},
    extraReducers : (builder) => {
    
        builder.addCase(getSuggest.pending, (state) => {
            state.loading = true;
            state.error = null;
          });
        builder.addCase(getSuggest.fulfilled, (state, {payload}) => {
             state.loading = false;
             state.suggests = payload
          });
        builder.addCase(getSuggest.rejected, (state, {payload}) => {
              state.loading = false;
              state.error = payload
          });
    }

})


export default suggestSlice.reducer