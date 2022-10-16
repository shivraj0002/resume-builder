import { db } from "./firebase-config";

import {
  collection,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  setDoc
} from "firebase/firestore";


const userCollectionRef = collection(db , "users")

class userDataServices {
   
    

    addUserData = (id,userData) =>{
        // return addDoc(userCollectionRef , userData)
        // return setDoc(doc(userCollectionRef , userData))
        return setDoc(doc(db , "users" , id) , userData)

    }
    updateUserData = (id , newUserData) => {
        const currentDatabaseData = doc(db , "users" , id)
        return updateDoc(currentDatabaseData,  newUserData)
    }
    getUserData = (id) =>{
        const data = doc(db , "users" , id)
        return getDoc(data)
    }
}
export default new userDataServices()