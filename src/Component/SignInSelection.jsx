import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSignIn_Selection } from "../ReduxStore/toggleSignInSelection";

const SignInSelection = () => {
  const dispatch = useDispatch();
  const toggleSignIn = useSelector(
    (state) => state.signInSelection.SignInSelection
  );
  const currentUser = useSelector((state)=> state.currentUser.User);

  useEffect(() => {
    if(toggleSignIn)
     return () => {
       dispatch(toggleSignIn_Selection());
    };

  }, []);



  return (
    toggleSignIn && !currentUser &&(
      <div className="w-[50vw] rounded-2xl h-[60vh] bg-green-400 absolute left-[25%]  top-[15vh]  ">
              <h1>Let's Get Started!!</h1>

        <div className="w-full flex-col font-bold text-xl  h-full flex  justify-center gap-8 md:flex-row  items-center ">
          <Link to="/sign-in-user">
            <button className="px-8 rounded-full shadow-lg bg-white py-4 ">
              Login as User
            </button>
          </Link>
          <Link to="/sign-in-business">
            <button className="px-8 rounded-full border shadow-lg border-black py-[0.95rem]">
            Login as Business
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default SignInSelection;
