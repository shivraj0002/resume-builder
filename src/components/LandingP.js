import React from 'react'
import { useNavigate } from "react-router-dom";
import classes from './LandingPage.module.css'
const LandingP = () => {
  const navigate = useNavigate()
  const resumeBuildFormNavigationHandler = () =>{
         console.log('started')
           navigate('/form-personal')
  }
  return (
    
    <div className={classes["landing-page"]} >
      <h2>Kick start your career</h2>
      <h3>with good resume</h3>
      <div >
        
      </div>

      <button onClick={resumeBuildFormNavigationHandler}>Build Now!</button>

    </div>
  )
}

export default LandingP