import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import "./index.css";
import appRoute from "./App";
createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRoute}></RouterProvider>
  </Provider>
);
