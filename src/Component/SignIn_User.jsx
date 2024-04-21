import { useRef, useState } from "react";
import credentialValidation from "../utils/credentialValidation";
import signUpAuth from "../utils/firebase/signUpAuth";
import signInAuth from "../utils/firebase/signInAuth";
import updateUserProfile from "../utils/firebase/updateUserProfile";
import { useNavigate } from "react-router-dom";
import useOnAuthStateChanged from "../utils/firebase/useOnAuthStateChanged";
import signUpPostApi from "../utils/DatabaseApi/signUpPostApi";


const SignIn_User = () => {
  const navigate = useNavigate();
  useOnAuthStateChanged();
  const [toggleLogin, setToggleLogin] = useState(true);
  const [authError, setAuthError] = useState("");

  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const Phone = useRef(null);

  const handleSignIn = async () => {
    const result = credentialValidation(
      Email?.current?.value,
      Password?.current?.value,
      Phone?.current?.value
    );

    setAuthError(result);

    if (result) return;

    if (toggleLogin === false) {
      // sign up authentication
      const value = await signUpAuth(Email.current.value, Password.current.value);

      if (typeof value === "object") {
        navigate("/");
        // updateuserProfile
        updateUserProfile(Name.current.value, Phone.current.value);
        signUpPostApi(Name.current.value,Phone.current.value )
      } else setAuthError(value);
    } else {
      //sign In
      const userData = await signInAuth(
        Email.current.value,
        Password.current.value
      );
      
      if (typeof userData === "object") {
        navigate("/");
      } 
      else setAuthError(userData);
    }
  };

  const toggleSignIn = () => {
    setToggleLogin(!toggleLogin);
  };

  return (
    <div className="bg-white flex justify-center items-center w-[100vw] h-[100vh]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col rounded-xl  bg-green-400   py-14 pt-8 pb-20 px-10 w-[23rem]"
      >
        <h1 className="font-bold text-3xl mb-3 text-black">
          {toggleLogin ? "Login" : "Signup"}
        </h1>

        {toggleLogin ? null : (
          <input
            ref={Name}
            className="p-2 mb-3 text-black shadow-md rounded-md outline-none "
            type="text"
            placeholder="name"
          />
        )}

        <input
          ref={Email}
          className="p-2 mb-3 text-black shadow-md rounded-md outline-none"
          type="email"
          placeholder="Email"
        />
        {toggleLogin ? null : (
          <input
            ref={Phone}
            className="p-2 mb-3 text-black shadow-md rounded-md outline-none"
            type="tel"
            placeholder="Phone Number"
          />
        )}
        <input
          ref={Password}
          className="p-2 mb-3 text-black shadow-md rounded-md  outline-none"
          type="password"
          placeholder="Password"
        />

        <span className="mb-2 text-xs text-red-600 font-bold leading-normal tracking-wider px-1">{authError}</span>

        <button
          onClick={handleSignIn}
          className="text-white shadow-md active:bg-zinc-900   cursor-pointer text-xl font-semibold active:border-[0.1px] active:border-zinc-400 border border-black   bg-black rounded-md mb-4 p-2"
        >
          {toggleLogin ? "Login" : "Signup"}
        </button>

        <span
          onClick={toggleSignIn}
          className="text-black font-semibold  cursor-pointer text-base"
        >
          <span className="text-slate-700">
            {toggleLogin ? "New to VidiWave?" : "Already have an account?"}
          </span>{" "}
          {toggleLogin ? "Sign up" : "Login"}
        </span>
      </form>
    </div>
  );
};

export default SignIn_User;
