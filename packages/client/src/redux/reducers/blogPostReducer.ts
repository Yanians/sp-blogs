import { createSlice } from "@reduxjs/toolkit";
export interface blogState {
    items?:blogState[],
    [key:string]:any,
};

const initialState:blogState = {
    items:[],
};

const blogSlice = createSlice({
  name:'post',
  initialState,
  reducers:{},
});

export default blogSlice.reducer;