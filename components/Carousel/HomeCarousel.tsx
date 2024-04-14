import { Dimensions, ImageBackground, View } from "react-native";
import { generateBackground } from "../../utils";
import { styles } from "./styles";
import { BasicCarousel } from ".";

export const HomeCarousel = () => {
  const width = Dimensions.get("window").width;

  return (
    <BasicCarousel
      height={215}
      width={width - 30}
      data={[...new Array(3)]}
      renderItem={({ index }) => (
        <View style={styles.item}>
          <ImageBackground
            resizeMode="cover"
            width={200}
            style={styles.item}
            imageStyle={styles.image}
            source={generateBackground(index)}
          />
        </View>
      )}
    />
  );
};
