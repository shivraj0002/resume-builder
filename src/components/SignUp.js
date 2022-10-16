import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userAuthServices from '../firebase/firebase-Auth';
import {userAuthActions} from '../store/userAuthSlice';
import { alertActions } from "../store/alertSlice";
import classes from './Login.module.css';

const Login = () => {
  const [userEmail , setUserEmail] = useState('')
  const [userPassword , setUserPassword] = useState('')
  const [confirmUserPassword , setConfirmUserPassword] = useState('')
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector(state=>state.userAuth)
  const dispatch = useDispatch()
  
  const emailChangeHandler = (event) =>{
        setUserEmail(event.target.value)
  }
  
  const passwordChangeHandler = (event) =>{
        setUserPassword(event.target.value)
  }
  const confirmPasswordChangeHandler = (event) =>{
    setConfirmUserPassword(event.target.value)
}
  
  const inputBlurHandler = (e) =>{
    console.log(e.target.type)
  }
  const loginSubmitHandler = async (event) =>{
      event.preventDefault()
      if(isLoggedIn){
        dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'You are aleready logged In'}))
        return
      }
      try {
         await userAuthServices.createUser(userEmail,userPassword)
        // dispatch(userAuthActions.setUser(user))
        dispatch(userAuthActions.userLoginStatus(true))
        dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Logged In Successfully'}))
        navigate('/home')
        // console.log(user)
      } catch (error) {
        console.error(error.message)
        dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Invalid! Credentials'}))

      }
 
  }
  return (
    <div className={classes["form-main"]}>
    <div className={classes["login-form-container"]}>
      <h1>Sign Up!</h1>
      <form className={classes["login-form"]} onSubmit={loginSubmitHandler}>
        <div>
          <label className={classes["login-labels"]} >Email :</label>
          <input type={"email"} className={classes["login-inputs"]} value={userEmail} onChange={emailChangeHandler} onBlur={inputBlurHandler} />
        </div>
        <div>
          <label className={classes["login-labels"]} >Password :</label>
          <input type={"password"} className={classes["login-inputs"]} value={userPassword} onChange={passwordChangeHandler} onBlur={inputBlurHandler} />
        </div>
        <div>
          <label className={classes["login-labels"]} >Confirm Password :</label>
          <input type={"password"} className={classes["login-inputs"]} value={confirmUserPassword} onChange={confirmPasswordChangeHandler} onBlur={inputBlurHandler} />
        </div>
        <button>Sign Up</button>
        <section>
        <small>Already have accoount!</small>
        <Link to={'/login'} > Sign_In </Link>
        </section>
      </form>
    </div> 
  </div>
  );
};

export default Login;
