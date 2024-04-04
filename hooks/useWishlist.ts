import { useContext } from "react";
import { WishListContext } from "../context/WishlistContext";

export const useWishlist = () => {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error("useWishlist must be used within UserProvider");
  }
  return context;
};
