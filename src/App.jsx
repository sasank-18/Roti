import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Contact from "./Component/Contact"
import About from "./Component/About"
import SignIn_User from "./Component/SignIn_User"
import SignIn_Business from "./Component/SignIn_Business"

import { Provider } from 'react-redux';
import appStore from "./ReduxStore/appStore"

function ChildComponent(){
  return (
   <div>
    <Navbar/>
    <Outlet/>
   </div>
  )
}

function App() {
  const appRouter = createBrowserRouter([
    {
     path:'/',
     element:<ChildComponent/>,
     children:[{
      path:'/',
      element:<Home/>,
     },
     {
      path:'/contact',
      element:<Contact/>
     },
     {
      path:'/about',
      element:<About/>
     },
    ]
    },
    {
     path:'/sign-in-user',
     element:<SignIn_User/>
    },
    {
     path:'/sign-in-business',
     element:<SignIn_Business/>
    },
  
  ])


  return (
      <>
      <Provider store= {appStore}>
        <div className="relative">
          <RouterProvider router={appRouter}/>
        </div>
        </Provider>
      </>

  )
}

export default App
