import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductType } from "../types/ProductTypes";
import { WishlistContextType, WishlistType } from "../types/WishlistTypes";

const getWishlist = async (): Promise<WishlistType> => {
  return JSON.parse((await AsyncStorage.getItem("wishlist"))!);
};

export const addOrRemoveFromWishlist = async (
  product: ProductType,
  wishlist: WishlistType,
  setWishlist: WishlistContextType["setWishlist"]
) => {
  let storedWishlist: WishlistType = await getWishlist();
  if (!storedWishlist) {
    await AsyncStorage.setItem("wishlist", JSON.stringify([product]));
  }
  if (
    storedWishlist &&
    wishlist &&
    wishlist.some(({ id }) => id === product.id)
  ) {
    setWishlist((prev) => prev.filter((list) => list.id !== product.id));
    storedWishlist = storedWishlist.filter((list) => list.id !== product.id);
    await AsyncStorage.setItem("wishlist", JSON.stringify(storedWishlist));
  } else {
    setWishlist((prev) => [...prev, product]);
    await AsyncStorage.setItem(
      "wishlist",
      JSON.stringify([storedWishlist, product])
    );
  }
};
