import { Dispatch, SetStateAction } from "react";
import { Products } from "./ProductTypes";

export type WishlistType = Products["products"];

export type WishlistContextType = {
  wishlist: WishlistType;
  setWishlist: Dispatch<SetStateAction<WishlistType>>;
};
