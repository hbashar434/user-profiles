import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { userApi } from "./redux/features/userApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={userApi}>
        <RouterProvider router={router} />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
