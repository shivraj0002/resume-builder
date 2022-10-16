import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./ReactStatusAlert.module.css";
import checkIcon from "../UI/Icons/checkIcon.png";
import errorIcon from "../UI/Icons/errorIcon.png";
import warningIcon from "../UI/Icons/warningIcon.png";
const ReactStatusAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { alertType, alertMessage, alertId } = useSelector((state) => state.alertBox);

  // const alert = document.getElementById("alert");
  useEffect(() => {
    if (alertType !== "") {
      setShowAlert(true);
    }
    const fadeTimer = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [alertType, alertMessage, alertId]);
  let imgUrl;

  if (alertType === "success") {
    imgUrl = (
      <img src={checkIcon} alt="success" width={"40px"} height={"40px"} />
    );
  } else if (alertType === "warning") {
    imgUrl = (
      <img src={warningIcon} alt="warning" width={"40px"} height={"40px"} />
    );
  } else {
    imgUrl = <img src={errorIcon} alt="error" width={"40px"} height={"40px"} />;
  }
  let background;
  let color
  if (alertType === "success") {
    background = "#66ff78";
    color = 'black'
  } else if (alertType === "warning") {
    background = "#ffe229";
    color='black'
  } else {
    background = "#ff3d3d";
    color='white'
  }
  if (showAlert) {
    return (
      <div id="alert" className={classes.AlertboxContainer} style={{backgroundColor: background , color: color}}>
        <section>{imgUrl}</section>
        <section>{alertMessage}</section>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ReactStatusAlert;
