import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signUpAuth = async(email, password) => {
    
  let data ;
 
 await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.phoneNumber);
      auth.currentUser.phoneNumber = '6547845698';
      data =  userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      data = errorCode + errorMessage;
    });

    return data ;
};

export default signUpAuth;
