import { createAsyncThunk } from "@reduxjs/toolkit";
import {API_BASE_URL} from '../../../shared/API'
import axios from "axios";

export const register = createAsyncThunk(
  "register",
  async ({ username, email, password, navigate }) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      navigate("/login");
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return alert(error.response.data.message);
      }
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async ({ email, password, navigate }) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      navigate("/home");
      return res;

   
    } catch (error) {
      if (error.response && error.response.data.message) {
        return alert(error.response.data.message);
      }
    }
  }
);
