import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import AauthLayout from "./Layout/AuthLayout"
import Login from "./components/Login"
import Signup from "./components/Signup"
import MainLayout from "./Layout/MainLayout"
import Home from "./components/Home"
import AddNew from "./components/AddNew"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

      <Route path="/" element={<AauthLayout/>}>
          {/* <Route index element ={<Index/>}/> */}
          {/* <Route path="/sign-up" element ={<Signup/>}/> */}
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
      </Route>

      <Route path="/" element={<MainLayout/>}>
          {/* <Route path="/index" element={<Index/>} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/add" element={<AddNew/>} />

      </Route>
      </>
      )
    )
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App

