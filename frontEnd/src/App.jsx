import { createBrowserRouter } from "react-router-dom";
import SignIn from "./component/SignIn";
import AuthComponent from './component/new'

function App() {



  return (
    <> 
    <h1>hello</h1>
      <h1 className="bg-yellow-300 text-blue-600">{data}</h1>
    </>
  );
}

const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<SignIn/>
  }
])
export default appRoute;
