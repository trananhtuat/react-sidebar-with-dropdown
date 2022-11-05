import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
};

const initialState: appState = {
  appState: ""
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    }
  }
});

export const {
  setAppState
} = appStateSlice.actions;

export default appStateSlice.reducer;