import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./componets/router/AppRouter.jsx";
import { injectStore } from "./config/axiosInstance.js";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

injectStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
