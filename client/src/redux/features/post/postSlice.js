import {createSlice} from '@reduxjs/toolkit'
import { createPost, getPosts } from './postAction'

const initialState = {
    loading: false,
    error: null,
    posts:null,
}

const postSlice = createSlice({
    name: "posts",
    initialState : initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(createPost.pending, (state) => {
          state.loading = true;
          state.error = null;
        });
        builder.addCase(createPost.fulfilled, (state, {payload}) => {
           state.loading = false;
           state.posts = payload
        });
        builder.addCase(createPost.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload
        });

        builder.addCase(getPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
          });
        builder.addCase(getPosts.fulfilled, (state, {payload}) => {
             state.loading = false;
             state.posts = payload
          });
        builder.addCase(getPosts.rejected, (state, {payload}) => {
              state.loading = false;
              state.error = payload;
          });
    }
})


export default postSlice.reducer