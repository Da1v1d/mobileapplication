import { FC, useEffect, useState } from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import { addOrRemoveFromWhishlist, generateFavoriteIcon } from "../../../utils";
import { Product } from "../../../types/ProductTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../../../provider/UserProvider";

export const FavoriteButton: FC<Product> = (product) => {
  const [favoriteIcon, setFavoriteIcon] = useState<ImageSourcePropType>();
  const { userData } = useUser();

  const handlePressFavoriteButton = async () => {
    await addOrRemoveFromWhishlist(product);
    const icon = await generateFavoriteIcon(product.id);
    setFavoriteIcon(icon);
  };

  useEffect(() => {
    (async () => {
      const icon = await generateFavoriteIcon(product.id);
      setFavoriteIcon(icon);
    })();
  }, []);

  return (
    // if user is not logged in don't show add to whishlist favorite button
    userData.username && (
      <Pressable onPress={handlePressFavoriteButton}>
        <Image source={favoriteIcon} />
      </Pressable>
    )
  );
};
