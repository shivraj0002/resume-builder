import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userFirstName: "",
  userLastName: "",
  userEmail: "" ,
  userPhone: "" ,
  userLinkedInProfile: '',
  userGitHubProfile: '',
  userProfession: '',
  userDepartment: ''
};

const userPesonalDataSlice = createSlice({
  name: "userPersonalDataSlice",

  initialState,

  reducers: {
    firstNameChange(state,action){
      state.userFirstName = action.payload
    },
    lastNameChange(state , action){
      state.userLastName = action.payload
    },
    emailChange(state , action){
      state.userEmail = action.payload
    },
    phoneChange(state,action){
      state.userPhone = action.payload
    },
    linkedInProfileChange(state ,action){
      state.userLinkedInProfile = action.payload
    },
    gitHubProfileChange(state,action){
      state.userGitHubProfile = action.payload
    },
    professionChange(state,action){
      state.userProfession = action.payload
    },
    departmentChange(state,action){
      state.userDepartment = action.payload
    },
    loadedStateUpdate(state, action){
      return state = action.payload
    }
  },
});

export const personalDataActions = userPesonalDataSlice.actions

export default userPesonalDataSlice.reducer
