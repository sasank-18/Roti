import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signInAuth = async(email, password) => {
  let userData;
 await  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      userData =  userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
     userData = errorCode + errorMessage 
    });

    console.log(userData)
    return userData;
};

export default signInAuth;
