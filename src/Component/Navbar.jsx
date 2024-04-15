import { Link, useNavigate } from "react-router-dom";
import { navElements } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignIn_Selection } from "../ReduxStore/toggleSignInSelection";
import SignInSelection from "./SignInSelection";
import logoutUser from "../utils/firebase/logoutUser";
import useOnAuthStateChanged from "../utils/firebase/useOnAuthStateChanged";
import { UpdateUser } from "../ReduxStore/currentUserSlice";

const Navbar = () => {
  const currentUser = useSelector((state)=> state.currentUser.User);
  console.log(currentUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useOnAuthStateChanged();
  const handleLogout = (e) => {
    console.log(e)
   const value =  logoutUser();
   dispatch(UpdateUser(null));
   if(value === null){
    navigate('/sign-in-user')
    
   }
  };
  return (
    <div className=" flex bg-slate-300 relative py-5   w-full item-center px-8 lg:px-12   justify-between  ">
      <div className="flex items-center">Logo</div>
      <div className="flex items-center  gap-5">
        {navElements.map((element) => {
          if (element.label === "Sign-In") {
            return (
              <>
                {currentUser ? (
                  <div
                    onClick={handleLogout}
                    className="px-3 py-1 bg-green-500 rounded-full"
                  >
                    Logout
                  </div>
                ) : (
                  <div
                    className="px-3 py-1 bg-green-500 rounded-full"
                    onClick={() => {
                      dispatch(toggleSignIn_Selection());
                    }}
                    key={element.label}
                  >
                    {element.label}
                  </div>
                )}
              </>
            );
          }
          return (
            <Link to={element?.route} key={element.label}>
              {element.label}
            </Link>
          );
        })}
      </div>
      <SignInSelection />
    </div>
  );
};

export default Navbar;
