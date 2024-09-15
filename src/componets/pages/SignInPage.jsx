import React from "react";
import SignIn from "../auth/SignIn";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/authThunk";
import { useNavigate } from "react-router";

const SignInPage = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("adminToken");
  const navgate = useNavigate();

  const onSubmit = (data) => {
    dispatch(signIn(data));
    navgate("/patients");
  };

  return <SignIn onJonot={onSubmit}></SignIn>;
};

export default SignInPage;
