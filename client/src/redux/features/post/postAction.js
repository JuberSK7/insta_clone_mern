import { createAsyncThunk } from "@reduxjs/toolkit";
import {API_BASE_URL} from '../../../shared/API'
import axios from "axios";


export const createPost = createAsyncThunk(
  "createPost",
  async ({image, discription, likes}) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/posts/create`,
        { image, discription, likes }
      );
      return res.data;
    } catch (error) {}
  }
);

export const getPosts = createAsyncThunk("getPosts", async () => {
  try {
    const data = await axios.get(`${API_BASE_URL}/posts/all`);
    return data;
  } catch (error) {}
});
