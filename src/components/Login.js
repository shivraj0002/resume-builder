import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userAuthServices from '../firebase/firebase-Auth';
import {userAuthActions} from '../store/userAuthSlice';
import { alertActions } from "../store/alertSlice";
import classes from './Login.module.css';

const Login = () => {
  const [userEmail , setUserEmail] = useState('')
  const [userPassword , setUserPassword] = useState('')
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector(state=>state.userAuth)
  const dispatch = useDispatch()


  const emailChangeHandler = (event) =>{
        setUserEmail(event.target.value)
  }
  
  const passwordChangeHandler = (event) =>{
        setUserPassword(event.target.value)
  }
  
  const inputBlurHandler = (e) =>{
    // console.log(process.env.REACT_APP_API_KEY)
    // console.log(e.target.type)
  }
  const loginSubmitHandler = async (event) =>{
      event.preventDefault()
      if(isLoggedIn){
        dispatch(alertActions.showAlert({alertType: 'warning' , alertMessage:'You are alerady logged In'}))
        return
      }
      // console.log('submit clicked')
      try{
         await userAuthServices.logInUser(userEmail , userPassword)
        //  dispatch(userAuthActions.setUser(user))
         dispatch(userAuthActions.userLoginStatus(true))
        //  console.log(user)
        dispatch(alertActions.showAlert({alertType: 'success' , alertMessage:'Logged In Successfully'}))
        navigate('/home')
      }catch(error){
        console.error(error.message)
        dispatch(alertActions.showAlert({alertType: 'error' , alertMessage:'Invalid! credentials'}))
      }

  }
  
  return (
    <div className={classes["form-main"]}>
    <div className={classes["login-form-container"]}>
      <h1>Login!</h1>
      <form className={classes["login-form"]} onSubmit={loginSubmitHandler}>
        <div>
          <label className={classes["login-labels"]} >Email :</label>
          <input type={"email"} className={classes["login-inputs"]} value={userEmail} onChange={emailChangeHandler} onBlur={inputBlurHandler} />
        </div>
        <div>
          <label className={classes["login-labels"]} >Password :</label>
          <input type={"password"} className={classes["login-inputs"]} value={userPassword} onChange={passwordChangeHandler} onBlur={inputBlurHandler} />
        </div>
        <button>Sign In</button>
        <section>
        <small>Don't have account!</small>
        <Link to={'/sign-up'} > Sign_Up </Link>
        </section>
      </form>
    </div> 
  </div>
  );
};

export default Login;
