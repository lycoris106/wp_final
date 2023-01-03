import { useState, useRef, useEffect } from "react";
import {
  SIGNUP_MUTATION,
  LOGIN_MUTATION,
  UPDATE_MUTATION,
} from "../graphql/mutations";
import { useMutation } from '@apollo/client';
import { useLocation, useNavigate } from "react-router-dom";

const LOCALSTORAGE_KEY = "save-me";

const useUser = () => {
  // const [SignupMutation] = useMutation(SIGNUP_MUTATION);
  // const [LoginMutation] = useMutation(LOGIN_MUTATION);
  // const [UpdateMutation] = useMutation(UPDATE_MUTATION);

  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);

  const navigate = useNavigate();
  const location = useLocation();


  const initUser = {
    username: savedMe || "testUserName",
    password: "testPassword",
    recipeIds: [],
    signed: false,
  }

  const [UserData, setUserData] = useState(initUser);

  useEffect(() => {
    console.log(location.pathname);
    if (!UserData.signed && location.pathname !== "/register") {
      navigate(`/`);
    }
  }, []);

  // const handleChangeUserData = (key, value) => {
  //   // setDisplayError(false);
  //   if (key === "username" || key === "password") {
  //     setUserData({
  //       ...UserData,
  //       [key]: value,
  //     });
  //   } else {
  //     setUserData({
  //       ...UserData,
  //       scores: { ...UserData.scores, [key]: value },
  //     });
  //   }
  // };

  // after click sign up button
  // const handleCreate = () => {
  //   if (Object.values(UserData).some((v) => !v)) {
  //     setDisplayError(true);
  //     return;
  //   }
  //   SignupMutation({
  //     variables: {
  //       name: UserData.username,
  //       password: UserData.password,
  //     },
  //     onCompleted: () => {
  //       setUserData(initUser);
  //       navigate("/login");
  //       // handleClose();
  //     },
  //   });
  // };

  const handleLogout = async () => {
    await localStorage.clear();
    await setUserData(initUser);
    navigate("/login");
  };

  const handleSignUp = async () => {
    await localStorage.clear();
    await setUserData(initUser);
    navigate("/register");
  };

  return {
    UserData,
    setUserData,
    handleLogout,
    handleSignUp,
  };
};

export default useUser;