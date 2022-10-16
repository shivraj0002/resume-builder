import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SSC: { institute: "", percentage: '' },
  HSC: { institute: "", percentage: '' },
  BatchlorDegree: { degreeName: "", CGPA: '', academicYears: "", institute: "" },
  MasterDegree: { degreeName: "", CGPA: '', academicYears: "", institute: "" },
};

const userEducationalDetails = createSlice({
  name: "userEducationalDetails",
  initialState,
  reducers: {
    //ssc data handling
    sscInstiuteChange(state, action) {
      state.SSC.institute = action.payload;
    },
    sscPercentageChange(state, action) {
      state.SSC.percentage = action.payload;
    },
    //hsc data handling
    hscInstiuteChange(state, action) {
      state.HSC.institute = action.payload;
    },
    hscPercentageChange(state, action) {
      state.HSC.percentage = action.payload;
    },
    //batchlor's degree data handling
    batchlorDegreeNameChange(state, action) {
      state.BatchlorDegree.degreeName = action.payload;
    },
    batchlorCGPAChange(state, action) {
      state.BatchlorDegree.CGPA = action.payload;
    },
    batchloAcademicsChange(state, action) {
      state.BatchlorDegree.academicYears = action.payload;
    },
    batchlorInstituteChange(state, action) {
      state.BatchlorDegree.institute = action.payload;
    },
    //master degree data handling
    masterDegreeNameChange(state, action) {
      state.MasterDegree.degreeName = action.payload;
    },
    masterCGPAChange(state, action) {
      state.MasterDegree.CGPA = action.payload;
    },
    masterAcademicsChange(state, action) {
      state.MasterDegree.academicYears = action.payload;
    },
    masterInstituteChange(state, action) {
      state.MasterDegree.institute = action.payload;
    },
    loadedStateUpdate(state , action){
      return state = action.payload
    }
  },

  
});
 

 export const EducatonalActions = userEducationalDetails.actions
 export default userEducationalDetails.reducer

