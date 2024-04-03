import { ImageSourcePropType } from "react-native";
import { CATEGORY_IMAGES } from "../constants/CategoryImage";
import { CategoryType } from "../types/CategoryTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../types/ProductTypes";

export const generateBackground = (index: number): ImageSourcePropType => {
  return index === 0
    ? require("../assets/images/banner1.jpg")
    : index === 1
    ? require("../assets/images/banner2.jpg")
    : index === 2
    ? require("../assets/images/banner3.jpg")
    : null;
};

export const addOrRemoveFromWhishlist = async (product: Product) => {
  let whishlist: Product[] = JSON.parse(
    (await AsyncStorage.getItem("whishlist")) as string
  );
  if (whishlist && whishlist.some(({ id }) => id === product.id)) {
    whishlist = whishlist.filter((list) => list.id !== product.id);
    await AsyncStorage.setItem("whishlist", JSON.stringify(whishlist));
    console.log("deleted");
    return;
  }
  if (!whishlist) {
    await AsyncStorage.setItem("whishlist", JSON.stringify([product]));
    return;
  }
  whishlist.push(product);
  await AsyncStorage.setItem("whishlist", JSON.stringify([product]));
};

export const generateFavoriteIcon = async (productId: number) => {
  const whishlist: Product[] = JSON.parse(
    (await AsyncStorage.getItem("whishlist")) as string
  );
  if (whishlist && whishlist.some(({ id }) => id === productId)) {
    return require("../assets/icons/favorite_active.png");
  } else {
    return require("../assets/icons/favorite.png");
  }
};

export const generateCategoryBackground = (category: CategoryType) => {
  return CATEGORY_IMAGES[category];
};
