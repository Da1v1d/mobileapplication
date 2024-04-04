import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { WishListContext } from "../context/WishlistContext";
import { WishlistType } from "../types/WishlistTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../hooks/useUser";

export const WishlistProvider: FC<PropsWithChildren> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistType>([]);
  const { userData } = useUser();

  useEffect(() => {
    (async () => {
      // get wishlist from asyncstorage in first mount if
      const wishlist = await AsyncStorage.getItem("wishlist");
      if (wishlist && userData.username) setWishlist(JSON.parse(wishlist));
    })();
  }, []);

  return (
    <WishListContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
