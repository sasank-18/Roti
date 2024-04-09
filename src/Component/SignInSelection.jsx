import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSignIn_Selection } from "../ReduxStore/toggleSignInSelection";

const SignInSelection = () => {
  const dispatch = useDispatch();
  const toggleSignIn = useSelector(
    (state) => state.signInSelection.SignInSelection
  );

  useEffect(() => {
    if(toggleSignIn)
     return () => {
       dispatch(toggleSignIn_Selection());
    };

  }, []);



  return (
    toggleSignIn && (
      <div className="w-[50vw] rounded-2xl h-[70vh] bg-red-400 absolute left-[25%]  top-[15vh]  ">
        <div className="w-full flex-col font-bold font  h-full flex  justify-center gap-14 md:flex-row  items-center ">
          <Link to="/sign-in-user">
            <button className="px-3 rounded-lg py-3 bg-slate-300">
              Sign-In as User
            </button>
          </Link>
          <Link to="/sign-in-business">
            <button className="px-2 rounded-lg py-3 bg-slate-300">
              Sign-In as business
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default SignInSelection;
