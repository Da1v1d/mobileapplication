import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Type = {
  data: number[];
  currentIndex: number;
};

export const Dots: FC<Type> = ({ data, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <Text
          key={index}
          style={{
            ...styles.dot,
            color: currentIndex === index ? "white" : "black",
            borderColor: currentIndex === index ? "black" : "white",
          }}
        ></Text>
      ))}
    </View>
  );
};
