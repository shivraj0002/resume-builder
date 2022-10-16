import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from './ErrorPage.module.css'
import errorPageImg from '../UI/Icons/errorPageImg.png'
function ErrorPage() {

  const [redirectCounter, setRedirectCounter] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const startCounter = setInterval(
      () =>
        setRedirectCounter((previousState) => {
          return previousState - 1;
        }),
      1000
    );

    return () => {
      clearInterval(startCounter);
    };
  }, []);

  if (redirectCounter === 0) {
    navigate("/home");
  }

  return (
    <div className={classes.container}>
      <img src={errorPageImg} alt="Error Logo" />
      <div>This URL does not exist</div>
      <h1>Redirecting to Home page in {redirectCounter}sec</h1>
    </div>
  );
}

export default ErrorPage;
