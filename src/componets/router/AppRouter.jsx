import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import {SignUpPage} from "../pages/SignUpPage";
import Patients from "../pages/Patients";

const router = createBrowserRouter([
  { path: "/", element: <SignInPage /> },
  { path: "signUp", element: <SignUpPage /> },
  { path: "/patients", element: <Patients /> },
]);
export default router;
