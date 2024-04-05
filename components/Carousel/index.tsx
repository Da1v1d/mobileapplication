import { Dimensions, ImageBackground, View } from "react-native";
import Carousel, { TCarouselProps } from "react-native-reanimated-carousel";
import { styles } from "./HomeCarousel/styles";
import { Dots } from "../Dots/Dots";
import { generateBackground } from "../../utils";
import { useState } from "react";

export const BasicCarousel = <T,>({ data }: TCarouselProps<T>) => {
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        scrollAnimationDuration={1000}
        width={width - 30} // paddingLeft + paddingRigth = 30
        height={215}
        onSnapToItem={(index) => setCurrentIndex(index)}
        data={data}
        renderItem={({ index }) => (
          <View style={styles.item}>
            <ImageBackground
              resizeMode="cover"
              width={200}
              style={styles.item}
              imageStyle={styles.image}
              source={generateBackground(index)}
            ></ImageBackground>
          </View>
        )}
      />
      <Dots data={data} currentIndex={currentIndex} />
    </View>
  );
};
