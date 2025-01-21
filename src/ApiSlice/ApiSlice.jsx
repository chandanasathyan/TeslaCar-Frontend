import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiDatas = createAsyncThunk("api/apiDatas", async () => {
  try {
    const response = await axios.get("http://localhost:5000/cars");
    return response.data;
  } catch (error) {

    return console.log(error, "tttt")
  }
});

export const selectedCarApi = createAsyncThunk("api/selectedCar", async (id) => {
  const response = await axios.get(`http://localhost:5000/cars/${id}`)
  return response.data
})

const initialState = {
  loading: false,
  apiData: [],
  selectedCar: {},
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(apiDatas.fulfilled, (state, action) => {
        state.loading = false;
        state.apiData = action.payload;
      })
      .addCase(apiDatas.rejected, (state) => {
        state.loading = false;
      })
      .addCase(selectedCarApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectedCarApi.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(selectedCarApi.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;
