import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { FC } from "react";
import { CardType } from "../../types/CardTypes";
import { FavoriteButton } from "../Button/FavoriteButton/FavoriteButton";

export const Card: FC<CardType> = ({ product }) => {
  const { rating, thumbnail, price, title } = product;
  return (
    <View style={styles.container}>
      <Image
        height={164}
        style={styles.image}
        source={{ uri: thumbnail }}
      ></Image>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.section}>
        <View style={styles.rating}>
          <Image source={require("../../assets/icons/star.png")} />
          <Text>{rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.price}>{price}$</Text>
      </View>
      <Pressable style={styles.favourite}>
        <FavoriteButton {...product} />
      </Pressable>
    </View>
  );
};
