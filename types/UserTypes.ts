import { Dispatch, SetStateAction } from "react";

export type UserType = {
  username: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  image: string | null;
  token?: string;
};

export type UserContextType = {
  userData: UserType;
  setUserData: Dispatch<SetStateAction<UserType>>;
} | null;
