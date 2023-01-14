import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {
  isOpenMenu: boolean;
} = {
  isOpenMenu: false
}

export const headerSlice = createSlice({
  name: "header", 
  initialState,
  reducers: {
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenu = action.payload;
    }
  }
});

export const {setOpenMenu} = headerSlice.actions;