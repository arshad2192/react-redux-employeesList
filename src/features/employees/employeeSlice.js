import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "./employeeAPI";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await api.get("/users");
    return response.data;
  },
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, 
        (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, 
        (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default employeeSlice.reducer;
