import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EducatonalActions } from "../../store/userEduDslice";
import Database from "../../firebase/firebase-db-services";
import { alertActions } from "../../store/alertSlice";
import classes from "./Form.module.css";
const FillEduData = () => {
  const EducationalData = useSelector((state) => state.userEductionalDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, userId } = useSelector((state) => state.userAuth);
  
  const { SSC, HSC, BatchlorDegree, MasterDegree } = EducationalData;

  // console.log(EducationalData)
  const sscInstituteChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.sscInstiuteChange(value));
  };
  const sscPercentageChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.sscPercentageChange(value));
  };
  const hscInstituteChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.hscInstiuteChange(value));
  };
  const hscPercentageChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.hscPercentageChange(value));
  };
  const batchlorDegreeNameChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.batchlorDegreeNameChange(value));
  };
  const batchlorDegreeCGPAChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.batchlorCGPAChange(value));
  };
  const batchlorDegreeAcademicYearChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.batchloAcademicsChange(value));
  };
  const batchlorDegreeInstituteChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.batchlorInstituteChange(value));
  };
  const masterDegreeNameChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.masterDegreeNameChange(value));
  };
  const masterDegreeCGPAChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.masterCGPAChange(value));
  };
  const masterDegreeAcademicYearChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.masterAcademicsChange(value));
  };
  const masterDegreeInstituteChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(EducatonalActions.masterInstituteChange(value));
  };
  const formPersonalNavigationHandler = () => {
    navigate("/form-personal");
  };
  const educationalDraftsLoadHandler = async () => {
    if (userId === "" || !userId || !isLoggedIn) {
      dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'Make sure that you are logged In'}))
      return;
    }
    try {
      const uploadedData = await Database.getUserData(userId);
      const data = await uploadedData.data().userEductionalDetails;
      // console.log(data);
      dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Drafts fetched successfully!'}))
      dispatch(EducatonalActions.loadedStateUpdate(data))

    } catch (error) {
      dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Something! went wrong'}))
      console.error(error.message);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/resume-actions");
  };

  return (
    <div className={classes["userDataForm-container"]}>
      <div className={classes["userDataForm-box"]}>
        <h1>Educational Details!</h1>
        <form onSubmit={submitHandler} className={classes["userDataForm-form"]}>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>
                10<sup>th</sup> Institute :
              </label>
              <input
                type={"text"}
                onChange={sscInstituteChangeHandler}
                value={SSC.institute}
                placeholder="Enter 10th institute name"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Percentage :</label>
              <input
                type={"number"}
                onChange={sscPercentageChangeHandler}
                value={SSC.percentage}
                placeholder="e.g. 86"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>
                12<sup>th</sup> Institute :
              </label>
              <input
                type={"text"}
                onChange={hscInstituteChangeHandler}
                value={HSC.institute}
                placeholder="Enter 12th institute name"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Percentage :</label>
              <input
                type={"number"}
                onChange={hscPercentageChangeHandler}
                value={HSC.percentage}
                placeholder="e.g. 78"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Batchlor's Degree</label>
              <input
                type={"text"}
                onChange={batchlorDegreeNameChangeHandler}
                value={BatchlorDegree.degreeName}
                placeholder="e.g. Engineering"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>CGPA :</label>
              <input
                type={"number"}
                onChange={batchlorDegreeCGPAChangeHandler}
                value={BatchlorDegree.CGPA}
                placeholder="e.g. 9.5"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Academic Years(Batchlor's) :</label>
              <input
                type={"text"}
                onChange={batchlorDegreeAcademicYearChangeHandler}
                value={BatchlorDegree.academicYears}
                placeholder="e.g. 2020-2023"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Institute(Batchlor's) :</label>
              <input
                type={"text"}
                onChange={batchlorDegreeInstituteChangeHandler}
                value={BatchlorDegree.institute}
                placeholder="Enter Batchlor academic institute"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Master's Degree :</label>
              <input
                type={"text"}
                onChange={masterDegreeNameChangeHandler}
                value={MasterDegree.degreeName}
                placeholder="e.g. Master of Engineering"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>CGPA :</label>
              <input
                type={"number"}
                onChange={masterDegreeCGPAChangeHandler}
                value={MasterDegree.CGPA}
                placeholder="e.g. 9.50"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Academic Years(Master's) :</label>
              <input
                type={"text"}
                onChange={masterDegreeAcademicYearChangeHandler}
                value={MasterDegree.academicYears}
                placeholder="e.g. 2025-2028"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Institute(Master's) :</label>
              <input
                type={"text"}
                onChange={masterDegreeInstituteChangeHandler}
                value={MasterDegree.institute}
                placeholder="Enter master degree academic institute"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes.FormBtns}>
              <button onClick={formPersonalNavigationHandler} type="button">
                &larr; Prev
              </button>
              <button onClick={educationalDraftsLoadHandler} type="button">
                &darr;Load Drafts
              </button>
              <button>Save & Preview &rarr;</button>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillEduData;
