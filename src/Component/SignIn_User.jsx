import { useRef, useState } from "react";
import credentialValidation from "../utils/credentialValidation";

const SignIn_User = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const [authError, setAuthError] = useState("");

  
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);

  const handleSignIn = () => {
 const result = credentialValidation(Email.current.value, Password.current.value)
   setAuthError(result);
  }


 const toggleSignIn = () => {
    setToggleLogin(!toggleLogin);
  };



  return (
    <div className="bg-yellow-100 flex justify-center items-center w-[100vw] h-[100vh]">
    
     <div className="w-[25%] h-[65%] bg-yellow-400">
       

     <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col bg-yellow-400 h-96 rounded-lg py-5 px-12 w-96"
        >
          <h1 className="font-bold text-3xl mb-3 text-teal-950">
            {toggleLogin ? "Login" : "Signup"}
          </h1>

          {toggleLogin ? null : (
            <input
              ref={Name}
              className="p-2 mb-3 text-black border border-teal-950
              rounded-md outline-none "
              type="text"
              placeholder="name"
            />
          )}

          <input
            ref={Email}
            className="p-2 mb-3 text-black rounded-md border border-teal-950 outline-none"
            type="email"
            placeholder="Email"
          />

          <input
            ref={Password}
            className="p-2 mb-3 text-black rounded-md border border-teal-950 outline-none"
            type="password"
            placeholder="Password"
          />

          <span className="mb-2 text-red-600 font-bold">{authError}</span>

          <button
            onClick={handleSignIn}
            className="font-semibold text-2xl  bg-teal-950 rounded-md mb-4 p-2"
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
    </div>
  )
}

export default SignIn_User