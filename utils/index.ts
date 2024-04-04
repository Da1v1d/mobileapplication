import { ImageSourcePropType } from "react-native";
import { CATEGORY_IMAGES } from "../constants/CategoryImage";
import { CategoryType } from "../types/CategoryTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../types/ProductTypes";
import { WishlistContextType, WishlistType } from "../types/WishlistTypes";

export const generateBackground = (index: number): ImageSourcePropType => {
  return index === 0
    ? require("../assets/images/banner1.jpg")
    : index === 1
    ? require("../assets/images/banner2.jpg")
    : index === 2
    ? require("../assets/images/banner3.jpg")
    : null;
};

export const addOrRemoveFromWishlist = async (
  product: Product,
  wishlist: WishlistType,
  setWishlist: WishlistContextType["setWishlist"]
) => {
  let storedWishlist: WishlistType = JSON.parse(
    (await AsyncStorage.getItem("wishlist"))!
  );
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

export const generateFavoriteIcon = (
  productId: number,
  wishlist: WishlistType
) => {
  if (wishlist && wishlist.some(({ id }) => id === productId)) {
    return require("../assets/icons/favorite_active.png");
  } else {
    return require("../assets/icons/favorite.png");
  }
};

export const generateCategoryBackground = (category: CategoryType) => {
  return CATEGORY_IMAGES[category];
};

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
