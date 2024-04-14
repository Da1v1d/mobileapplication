import { FC } from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { ProductType } from "../../types/ProductTypes";
import { styles } from "./styles";
import { BasicCarousel } from ".";

export const DetailCarousel: FC<{ images: ProductType["images"] }> = ({
  images,
}) => {
  const width = Dimensions.get("window").width;

  return (
    <BasicCarousel
      height={343}
      width={width - 30} // paddingLeft + paddingRigth = 30
      data={images}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <ImageBackground
            resizeMode="cover"
            width={200}
            style={styles.item}
            imageStyle={styles.image}
            source={{ uri: item }}
          />
        </View>
      )}
    />
  );
};
