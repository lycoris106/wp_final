import { useState, useRef, useEffect } from "react";

const useUser = () => {
  const initUser = {
    username: "testUserName",
    password: "testPassword",
    recipeIds: [],
    signed: false,
  }

  const [UserData, setUserData] = useState(initUser);

  return {
    UserData,
  };
};

export default useUser;