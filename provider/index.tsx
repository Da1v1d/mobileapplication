import { FC, PropsWithChildren } from "react";
import { UserProvider } from "./UserProvider";
import { WishlistProvider } from "./WishlistProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </UserProvider>
  );
};
