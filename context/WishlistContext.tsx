import { createContext } from "react";
import { WishlistContextType } from "../types/WishlistTypes";

export const WishListContext = createContext<WishlistContextType | null>(null);
