import { FC, PropsWithChildren, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { UserType } from "../types/UserTypes";

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<UserType>({
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
