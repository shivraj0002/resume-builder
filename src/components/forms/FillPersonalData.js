import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { personalDataActions } from "../../store/userPersonalDslice";
import Database from "../../firebase/firebase-db-services";
import { alertActions } from "../../store/alertSlice";
import classes from "./Form.module.css";

const FillPersonalData = () => {
  const userPersonalData = useSelector((state) => state.userPersonalDetails);
  const { userId, isLoggedIn } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPhone,
    userLinkedInProfile,
    userGitHubProfile,
    userProfession,
    userDepartment,
  } = userPersonalData;
  const firstNameChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.firstNameChange(value));
  };
  const lastNameChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.lastNameChange(value));
  };
  const emailChangehandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.emailChange(value));
  };
  const phoneChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.phoneChange(value));
  };
  const linkedInProfileChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.linkedInProfileChange(value));
  };
  const gitHubProfileChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.gitHubProfileChange(value));
  };
  const professionChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.professionChange(value));
  };
  const departmentChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(personalDataActions.departmentChange(value));
  };
  const homeNavigationHandler = () => {
    navigate("/home");
  };
  const loadPersonalDataHandler = async () => {
    if (userId === "" || !userId || !isLoggedIn) {
      dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'Make sure that you are logged In'}))
      return;
    }
    try {
      const uploadedData = await Database.getUserData(userId);
      const data = await uploadedData.data().userPersonalDetails;
      // console.log(data);
      dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Drafts fetched successfully!!'}))
      dispatch(personalDataActions.loadedStateUpdate(data));
    } catch (error) {
      dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Something! went wrong.'}))
      console.error(error.message);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/form-educational");
  };
  return (
    <div className={classes["userDataForm-container"]}>
      <div className={classes["userDataForm-box"]}>
        <h1>Personal Details!</h1>
        <form onSubmit={submitHandler} className={classes["userDataForm-form"]}>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>First Name :</label>
              <input
                type={"text"}
                onChange={firstNameChangeHandler}
                value={userFirstName}
                placeholder="Enter first name"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Last Name :</label>
              <input
                type={"text"}
                onChange={lastNameChangeHandler}
                value={userLastName}
                placeholder="Enter last name"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Email Address :</label>
              <input
                type={"email"}
                onChange={emailChangehandler}
                value={userEmail}
                placeholder="e.g. xyz@gmail.com"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Phone Number :</label>
              <input
                type={"text"}
                onChange={phoneChangeHandler}
                value={userPhone}
                placeholder="Enter phone number"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>LinkedIn Profile</label>
              <input
                type={"text"}
                onChange={linkedInProfileChangeHandler}
                value={userLinkedInProfile}
                placeholder="Enter LinkedIn profile link"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>GitHub Profile :</label>
              <input
                type={"text"}
                onChange={gitHubProfileChangeHandler}
                value={userGitHubProfile}
                placeholder="Enter gitHub profile link"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Profession :</label>
              <input
                type={"text"}
                onChange={professionChangeHandler}
                value={userProfession}
                placeholder="e.g. Softwere Engineer"
              />
            </section>
            <section className={classes["userDataForm-inputSections"]}>
              <label>Department :</label>
              <input
                type={"text"}
                onChange={departmentChangeHandler}
                value={userDepartment}
                placeholder="e.g. IT"
              />
            </section>
          </div>
          <div className={classes["userDataForm-inputContainer"]}>
            <section className={classes.FormBtns}>
              <button type="button" onClick={homeNavigationHandler}>
                &larr; Back
              </button>
              <button type="button" onClick={loadPersonalDataHandler}>
                &darr;Load Drafts
              </button>
              <button>Next &rarr;</button>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillPersonalData;
