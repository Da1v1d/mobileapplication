import { FC, useState } from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Product } from "../../../types/ProductTypes";
import { Dots } from "../../Dots/Dots";

export const DetailCarousel: FC<{ images: Product["images"] }> = ({
  images,
}) => {
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{ height: 343 }}>
      <Carousel
        scrollAnimationDuration={1000}
        width={width - 30} // paddingLeft + paddingRigth = 30
        height={343}
        onSnapToItem={(index) => setCurrentIndex(index)}
        data={images}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <ImageBackground
              resizeMode="cover"
              width={200}
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: item }}
            ></ImageBackground>
          </View>
        )}
      />
      <Dots data={[...new Array(images.length)]} currentIndex={currentIndex} />
    </View>
  );
};
