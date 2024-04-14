import { FC, useEffect, useState } from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import { generateFavoriteIcon } from "../../utils";
import { ProductType } from "../../types/ProductTypes";
import { useUser } from "../../hooks/useUser";
import { useWishlist } from "../../hooks/useWishlist";
import { addOrRemoveFromWishlist } from "../../utils/wishlist";

export const FavoriteButton: FC<ProductType> = (product) => {
  const [favoriteIcon, setFavoriteIcon] = useState<ImageSourcePropType>();
  const {
    userData: { username },
  } = useUser();
  const { wishlist, setWishlist } = useWishlist();

  useEffect(() => {
    const icon = generateFavoriteIcon(product.id, wishlist);
    setFavoriteIcon(icon);
  }, [wishlist]);

  const handlePressFavoriteButton = async () => {
    await addOrRemoveFromWishlist(product, wishlist, setWishlist);
  };

  return (
    // if user is not logged in don't show add to whishlist favorite button
    username && (
      <Pressable onPress={handlePressFavoriteButton}>
        <Image source={favoriteIcon} />
      </Pressable>
    )
  );
};
