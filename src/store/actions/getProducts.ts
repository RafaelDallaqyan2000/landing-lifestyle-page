import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts: any = createAsyncThunk("getProducts", (): any => {
  return axios
    .get(`https://cloud.codesupply.co/endpoint/react/data.json`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
});
