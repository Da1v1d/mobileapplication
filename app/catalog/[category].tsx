import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { getProductByCategory } from "../../api/products";
import useFetch from "../../hooks/useFetch";
import { Text, View } from "react-native";
import { Cards } from "../../components/Cards/Cards";
import { globalStyles } from "../styles";
import { Products } from "../../types/ProductTypes";
import { HeaderBack } from "../../components/Header/HeaderBack/HeaderBack";

const Category = () => {
  const { category } = useLocalSearchParams();
  const { fetchData, isLoading, data } = useFetch<Products>();

  useEffect(() => {
    (async () => {
      await fetchData(() => getProductByCategory(category as string));
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          headerTitle: category?.toString().toUpperCase(),
          headerBackTitleVisible: false,
          headerLeft: () => <HeaderBack />,
        }}
      />
      {isLoading && <Text>Loading...</Text>}
      {!!data && <Cards products={data.products} />}
    </View>
  );
};

export default Category;
