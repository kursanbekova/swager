import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import SignUp from "../auth/SignUp";
import { postUser } from "../../store/authThunk";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addUser = (data) => {
    dispatch(postUser(data));
    navigate("/patients");
  };

  return <SignUp onSubmitFunction={addUser} />;
};
