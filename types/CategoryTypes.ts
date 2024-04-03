import { CATEGORY_IMAGES } from "../constants/CategoryImage";

export type CategoryType = keyof typeof CATEGORY_IMAGES;

export type CategoryBadgeType = {
  category: CategoryType;
};
