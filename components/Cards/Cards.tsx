import { FlatList, Pressable } from "react-native";
import { Card } from "../Card/Card";
import { styles } from "./styles";
import { CardsType } from "../../types/CardTypes";
import { FC } from "react";
import { useRouter } from "expo-router";

export const Cards: FC<CardsType> = ({ products }) => {
  const router = useRouter();
  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={styles.container}
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`detail/${item.id}`)}>
          <Card product={item} />
        </Pressable>
      )}
      keyExtractor={({ id }) => id.toString()}
    />
  );
};
