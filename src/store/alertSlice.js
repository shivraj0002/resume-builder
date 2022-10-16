import { createSlice } from "@reduxjs/toolkit";

const initialState = {alertType: '' , alertMessage:'' , alertId:0};

const alertSlice = createSlice({
  name: "alertBox",
  initialState,
  reducers: {
    showAlert(state , action){
        return state = {alertType:action.payload.alertType , alertMessage:action.payload.alertMessage , alertId:Math.random()}
    }
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice.reducer;
