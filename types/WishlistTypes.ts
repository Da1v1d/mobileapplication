import { Dispatch, SetStateAction } from "react";
import { ProductsType } from "./ProductTypes";

export type WishlistType = ProductsType["products"];

export type WishlistContextType = {
  wishlist: WishlistType;
  setWishlist: Dispatch<SetStateAction<WishlistType>>;
};
