import { createBrowserRouter,Navigate } from "react-router-dom";
import SignIn from "./component/SignIn";
import Home from "./component/Home";
import AdminSignIn from "./component/Admin/SignIn"
import DashBoard from "./component/Admin/DashBoard";

function App() {
  
  return (
    <>
      <h1>hello</h1>
      <h1 className="bg-yellow-300 text-blue-600">{data}</h1>
    </>
  );
}

const checkAuth = () => {
 return localStorage.getItem('token') !== null ? true:false
};
const checkIsAdmin=()=>{
  
  return localStorage.getItem("adminToken")
}
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: checkAuth() ? <Navigate to="/home" /> : <SignIn />,
  },
  {
    path: "/home",
    element: checkAuth()? <Home /> : <Navigate to="/" />,
  },
  {
    path: "/admin",
    element:  checkIsAdmin() ? <Navigate to="/admin-dashboard" /> : <AdminSignIn />,
  },
  {
    path: "/admin-dashboard",
    element: checkIsAdmin() ? <DashBoard /> : <Navigate to="/admin" />,
  },
]);
export default appRoute;
