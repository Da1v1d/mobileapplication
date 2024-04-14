import { Text, View } from "react-native";
import { styles } from "./styles";

type DotsType<T> = {
  data: T[];
  currentIndex: number;
};

export const Dots = <T,>({ data, currentIndex }: DotsType<T>) => {
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
