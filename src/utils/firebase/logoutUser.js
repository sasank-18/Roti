import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const logoutUser = () => {
  let data;
  signOut(auth)
    .then(() => {
      data = null;
    })
    .catch((error) => {
      data =  error;
    });
    return data;
};

export default logoutUser;
