import { createSlice } from "@reduxjs/toolkit";

export const searchParamSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchParamSlice.actions;
export default searchParamSlice.reducer;
