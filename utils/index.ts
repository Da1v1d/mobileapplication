import { ImageSourcePropType } from "react-native";
import { CATEGORY_IMAGES } from "../constants/CategoryImage";
import { CategoryType } from "../types/CategoryTypes";
import { WishlistType } from "../types/WishlistTypes";

export const generateBackground = (index: number): ImageSourcePropType => {
  return index === 0
    ? require("../assets/images/banner1.jpg")
    : index === 1
    ? require("../assets/images/banner2.jpg")
    : index === 2
    ? require("../assets/images/banner3.jpg")
    : null;
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
