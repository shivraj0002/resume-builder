import { configureStore } from "@reduxjs/toolkit";
import userPersonalDetailReducer from "./userPersonalDslice";
import userEducationalDetailReducer from "./userEduDslice";
import userAuthReducer from "./userAuthSlice";
import alertSlice from "./alertSlice";

const store = configureStore({
  reducer: {
    userPersonalDetails: userPersonalDetailReducer,
    userEductionalDetails: userEducationalDetailReducer,
    userAuth: userAuthReducer,
    alertBox: alertSlice,
  },
});

export default store;
