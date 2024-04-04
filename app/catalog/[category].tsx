import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ProductsApi } from "../../api/products";
import useFetch from "../../hooks/useFetch";
import { View } from "react-native";
import { Cards } from "../../components/Cards/Cards";
import { globalStyles } from "../styles";
import { Products } from "../../types/ProductTypes";
import { HeaderBack } from "../../components/Header/HeaderBack/HeaderBack";
import { Loader } from "../../components/Loader/Loader";

const Category = () => {
  const { category } = useLocalSearchParams();
  const { fetchData, isLoading, data } = useFetch<Products>();

  useEffect(() => {
    (async () => {
      await fetchData(() =>
        ProductsApi.getProductByCategory(category as string)
      );
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
      {isLoading && <Loader />}
      {!!data && <Cards products={data.products} />}
    </View>
  );
};

export default Category;
