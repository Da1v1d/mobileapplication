import { View } from "react-native";
import Carousel, { TCarouselProps } from "react-native-reanimated-carousel";
import { styles } from "./styles";
import { Dots } from "../Dots/Dots";
import { useState } from "react";

export const BasicCarousel = <T extends unknown>(props: TCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        {...props}
      />
      <Dots data={props.data} currentIndex={currentIndex} />
    </View>
  );
};
