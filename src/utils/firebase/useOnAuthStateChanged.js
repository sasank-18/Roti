import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../../ReduxStore/currentUserSlice";

const useOnAuthStateChanged = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        dispatch(UpdateUser(user))

      } else {
        // User is signed out
      }
    });
  }, []);
};

export default useOnAuthStateChanged;
