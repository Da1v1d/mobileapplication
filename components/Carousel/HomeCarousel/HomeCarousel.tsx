import { Dimensions, ImageBackground, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { generateBackground } from "../../../utils";
import { useState } from "react";
import { styles } from "./styles";
import { Dots } from "../../Dots/Dots";

export const HomeCarousel = () => {
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Carousel
        scrollAnimationDuration={1000}
        loop
        width={width - 30} // paddingLeft + paddingRigth = 30
        height={215}
        onSnapToItem={(index) => setCurrentIndex(index)}
        data={[...new Array(3).fill(1)]}
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
      <Dots data={[0, 1, 2]} currentIndex={currentIndex} />
    </View>
  );
};
