import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResumeFirst from "../reseme_Templates/ResumeFirst";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Database from "../firebase/firebase-db-services";
import { alertActions } from "../store/alertSlice";
import classes from "./ResumeActions.module.css";
const ResumeActions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { isLoggedIn, userId } = useSelector((state) => state.userAuth);
  const Data = useSelector((state) => state);
  const userData = {
    userPersonalDetails: { ...Data.userPersonalDetails },
    userEductionalDetails: { ...Data.userEductionalDetails },
  };

  const editClickHandler = () => {
    navigate("/form-educational");
  };
  const pdfDownloadHandler = () => {
    //  console.log('pdf save')
    const input = document.getElementById("resume");
    // console.log(input)
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Downloading... PDF'}))
        pdf.save("resume.pdf");
        
      })
      .catch((error) => {
        dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Something! went wrong'}))
        console.log(error);
      });
  };
  const saveAsDraftsHandler = async () => {
    if (!isLoggedIn) {
      dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'Please, make sure that you logged-In!'}))
      return;
    }
    // console.log('drafts save')
    // console.log(userId)
    if (userId === "" || !userId) {
      dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'Please, make sure that you logged-In'}))
      return;
    }
    // console.log(userId)
    // console.log(userData)
    try {
      await Database.addUserData(userId, userData);
      // await Database.updateUserData(userId , userData)
      //  const data= await Database.getUserData(userId)
      //   console.log(data.data())
      dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Drafts has been saved!'}))

    } catch (error) {
      dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Something! went wronge.'}))

      console.error(error.message);
    }
  };
  const updateDraftsHandler = async () => {
    if (!isLoggedIn) {
      dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'Please, make sure that you logged-In'}))
      return;
    }

    if (userId === "" || !userId) {
      dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'Please, make sure that you logged-In.'}))
      return;
    }
    try {
      await Database.updateUserData(userId, userData);
      dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Drafts has been updated!'}))

    } catch (error) {
      dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Something! went wrong'}))

      console.error(error.message);
    }
  };

  return (
    <div className={classes["resume-Actions-container"]}>
      <ResumeFirst />
      <div>
        <button className={classes.resumeActionsBtn} onClick={editClickHandler}>
          &larr; Edit
        </button>
        <button
          className={classes.resumeActionsBtn}
          onClick={pdfDownloadHandler}
        >
          Download as PDF
        </button>
        <button
          className={classes.resumeActionsBtn}
          onClick={saveAsDraftsHandler}
        >
          Save as Drafts
        </button>
        <button
          className={classes.resumeActionsBtn}
          onClick={updateDraftsHandler}
        >
          Update Drafts
        </button>
      </div>
    </div>
  );
};

export default ResumeActions;
