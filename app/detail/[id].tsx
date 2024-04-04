import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ProductsApi } from "../../api/products";
import useFetch from "../../hooks/useFetch";
import { Image, Text, View } from "react-native";
import { globalStyles } from "../styles";
import { Product } from "../../types/ProductTypes";
import { DetailCarousel } from "../../components/Carousel/DetailCarousel/DetailCarousel";
import { HeaderBack } from "../../components/Header/HeaderBack/HeaderBack";
import { styles } from "./styles";
import { FavoriteButton } from "../../components/Button/FavoriteButton/FavoriteButton";
import { Loader } from "../../components/Loader/Loader";

const Category = () => {
  const { id } = useLocalSearchParams();
  const { fetchData, isLoading, data: product } = useFetch<Product>();

  useEffect(() => {
    (async () => {
      await fetchData(() => ProductsApi.getProductById(id as string));
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          headerTitle: product ? product.title.toString().toUpperCase() : "",
          headerBackTitleVisible: false,
          headerLeft: () => <HeaderBack />,
          headerRight: () => product && <FavoriteButton {...product} />,
        }}
      />
      {isLoading && <Loader />}
      {!!product && (
        <View style={{ rowGap: 15 }}>
          <DetailCarousel images={product.images} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.title}>{product.price}$</Text>
          <View style={styles.rating}>
            <Text>Rating</Text>
            <Text style={styles.detail}>
              <Image source={require("../../assets/icons/star.png")} />
              {product.rating.toFixed(1)}
            </Text>
          </View>
          <Text style={styles.details}>
            ID: <Text style={styles.detail}>{product.id}</Text>
          </Text>
          <Text style={styles.details}>
            Category <Text style={styles.detail}>{product.category}</Text>
          </Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      )}
    </View>
  );
};

export default Category;
