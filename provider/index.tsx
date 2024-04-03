import { FC, PropsWithChildren } from "react";
import { UserProvider } from "./UserProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
