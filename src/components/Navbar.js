import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userAuthServices from "../firebase/firebase-Auth";
import { userAuthActions } from "../store/userAuthSlice";
import classes from "./Navbar.module.css";
import resumeLogo from "../UI/Icons/resumeLogo.png";
const Navbar = () => {
  const { isLoggedIn, userEmail } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch()
  
  const logOutHandler = async () => {
    try {
      
      await userAuthServices.logOutUser();
      dispatch(userAuthActions.userLoginStatus(false))
      dispatch(userAuthActions.setUserEmail(""))
      dispatch(userAuthActions.setUserId(''))

    } catch (error) {
      console.error(error.message)
    }
  };
  return (
    <header className={classes["nav-header"]}>
      <div className={classes["nav-logo"]}>
        <img src={resumeLogo} alt='logo' />
        <h1>Resume Builder</h1>
      </div>
      <ul className={classes["nav-List"]}>
        <li className={classes["nav-list-items"]}>
          <Link to="/home"><button className={classes.signInbtn}>Home</button></Link>
        </li>

        {isLoggedIn && (
          <li className={classes["nav-list-items"]}>
            loggedIn as: {userEmail && userEmail}
          </li>
        )}

        {!isLoggedIn ? (
          <li className={classes["nav-list-items"]}>
            <Link to={'/login'} ><button className={classes.signInbtn} >
              Login
            </button></Link>
          </li>
        ) : (
          <li className={classes["nav-list-items"]}>
            <button onClick={logOutHandler} className={classes.logOutBtn}>
              logOut
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
