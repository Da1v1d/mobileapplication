import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { UserType } from "../types/UserTypes";
import { AuthApi } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<UserType>({
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
  });

  useEffect(() => {
    (async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken) {
        const user = await AuthApi.getUser();

        const { username, firstName, email, gender, image, lastName } =
          user.data;

        setUserData({
          username,
          firstName,
          email,
          gender,
          image,
          lastName,
        });
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
