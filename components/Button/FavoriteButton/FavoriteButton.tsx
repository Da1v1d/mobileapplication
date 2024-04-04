import { FC, useEffect, useState } from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import { addOrRemoveFromWishlist, generateFavoriteIcon } from "../../../utils";
import { Product } from "../../../types/ProductTypes";
import { useUser } from "../../../hooks/useUser";
import { useWishlist } from "../../../hooks/useWishlist";

export const FavoriteButton: FC<Product> = (product) => {
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
