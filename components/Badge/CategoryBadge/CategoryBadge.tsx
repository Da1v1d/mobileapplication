import { FC } from "react";
import { ImageBackground, Text, View } from "react-native";
import { CategoryBadgeType } from "../../../types/CategoryTypes";
import { generateCategoryBackground } from "../../../utils";
import { styles } from "./styles";

export const CategoryBadge: FC<CategoryBadgeType> = ({ category }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        imageStyle = {{borderRadius:10}}
        source={generateCategoryBackground(category)}
        style={styles.image}
      />
      <Text style={styles.text}>{category}</Text>
    </View>
  );
};
