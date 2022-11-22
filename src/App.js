import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingP from "./components/LandingP";
import ErrorPage from "./pages/ErrorPage";
import FillPersonalData from "./components/forms/FillPersonalData";
import FillEducationalData from "./components/forms/FillEducationalData";
// import Resume_first from "./reseme_Templates/Resume_first";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { userAuthActions } from "./store/userAuthSlice";
import Navbar from "./components/Navbar";
import ResumeActions from "./components/ResumeActions";
import ReactStatusAlert from "./components/ReactStatusAlert";
function App() {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('in app js useeffect')
      if (currentUser?.email) {
        dispatch(userAuthActions.userLoginStatus(true))
        dispatch(userAuthActions.setUserId(user?.uid))
        dispatch(userAuthActions.setUserEmail(user?.email))
      }
    })

  }, [user, dispatch])
  //  const handleThis = () =>{
  //   console.log(user?.email)
  //   console.log(user?.uid)
  //  }

  return (
    <>
      <Navbar />
      <ReactStatusAlert />
      <Routes>
        <Route exact path="/" element={<LandingP />} />
        <Route path="/resume-actions" element={<ResumeActions />} />
        <Route path="/home" element={<LandingP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/form-personal" element={<FillPersonalData />} />
        <Route path="/form-educational" element={<FillEducationalData />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
