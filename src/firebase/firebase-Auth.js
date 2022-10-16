import {auth} from './firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


class userAuthServices{
     createUser = (email,password)=>{
        return createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
    }
    logInUser = (email,password)=>{
        return signInWithEmailAndPassword(
            auth,
            email,
            password
        )
    }
    logOutUser = () =>{
       return signOut(auth)
    }
   
}

export default new userAuthServices()