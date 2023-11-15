import { createAsyncThunk } from "@reduxjs/toolkit";
import {API_BASE_URL} from '../../../shared/API'
import axios from "axios";



export const getSuggest = createAsyncThunk("getSuggest", async () => {
    try {
      const data = await axios.get(`${API_BASE_URL}/suggets/allsuggets`);
      return data;
    } catch (error) {
        console.log(error)
    }
  });