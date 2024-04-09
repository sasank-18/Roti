import { Link } from "react-router-dom";
import { navElements } from "../constants";
import { useDispatch,useSelector } from 'react-redux';
import { toggleSignIn_Selection } from "../ReduxStore/toggleSignInSelection";
import SignInSelection from "./SignInSelection";

const Navbar = () => {
  const dispatch = useDispatch()
  
  
  // const toggleSignIn = useSelector((state)=> state.signInSelection.SignInSelection);

  return (
    <div className=" flex bg-slate-300 relative  w-full item-center px-8 lg:px-12  justify-between  py-6 ">
      <div className="">Logo</div>
      <div className="flex gap-5">
        {navElements.map((element)=>{
         if(element.label === 'Sign-In'){
            
            return <div onClick={()=>{dispatch(toggleSignIn_Selection())}} to={element?.route} key={element.label}>{element.label}</div>  
         }
         return <Link to={element?.route} key={element.label}>{element.label}</Link>  
        })}
      </div>
      <SignInSelection/>
    </div>
  );
};

export default Navbar;
