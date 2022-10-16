import React from 'react'
import { useSelector } from 'react-redux'

import classes from './ResumeFirst.module.css'

function ResumeFirst() {
    const userPersonalData = useSelector(state=>state.userPersonalDetails)
    const userEducationalData = useSelector(state=>state.userEductionalDetails)
    const {
        userFirstName,
        userLastName,
        userEmail,
        userPhone,
        userLinkedInProfile,
        userGitHubProfile,
        userProfession,
        userDepartment,
      } = userPersonalData
      const { SSC, HSC, BatchlorDegree, MasterDegree } = userEducationalData
  return (
    <div id='resume' className={classes.Resume}>
        <div className={classes["resume-heading"]}>
         <section>
            <h1>{userFirstName + ' ' + userLastName}</h1>
            <h4>{userProfession}</h4>
         </section>
         </div>
         <h2 className={classes["sections-heading"]}>Personal Details</h2>
        <div className={classes["personal-details"]}>
         <section>
            <p>Email : {userEmail}</p>
            <p>Contact no. : {userPhone}</p>
         </section>
         <section>
            <p>LinkedIn Pro. : {userLinkedInProfile}</p>
            <p>GitHub Pro. : {userGitHubProfile}</p>
         </section>
         <section>
            <p>Department : {userDepartment}</p>
            <p>Profession : {userProfession}</p>
         </section>
        </div>
        <h2 className={classes["sections-heading"]}>Educational Details</h2>
        <div className={classes["educational-details"]}>
        <section className={classes.section}>
            <p>SSC : {SSC.institute}</p>
            <p>Percentages : {SSC.percentage}%</p>
         </section>
         <section className={classes.section}>
            <p>HSC : {HSC.institute}</p>
            <p>Percentages : {HSC.percentage}%</p>
         </section>
         <section className={classes["section-graduation"]}>
            <p>Batchlor Degree:</p>
           <div className={classes["graduation-details"]}>
            <p>{BatchlorDegree.degreeName}</p>
            <p>CGPA : {BatchlorDegree.CGPA}</p>
            <p>Academic Years : {BatchlorDegree.academicYears}</p>
            <p>Institute: {BatchlorDegree.institute}</p>
           </div>
         </section>
         <section className={classes["section-graduation"]}>
            <p>Master Degree:</p>
           <div className={classes["graduation-details"]}>
            <p>{MasterDegree.degreeName}</p>
            <p>CGPA : {MasterDegree.CGPA}</p>
            <p>Academic Years: {MasterDegree.academicYears}</p>
            <p>Institute: {MasterDegree.institute}</p>
           </div>
         </section>
        </div>
        <div className={classes.resumeFooter}>

        </div>
    </div>
  )
}

export default ResumeFirst