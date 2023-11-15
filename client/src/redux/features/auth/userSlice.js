import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./userAction";


const initialState = {
  loading: false,
  error: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    });
    builder.addCase(register.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default userSlice.reducer;
