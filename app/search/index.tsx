import { Stack } from "expo-router";
import { HeaderBack } from "../../components/Header/HeaderBack/HeaderBack";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { HeaderSearch } from "../../components/Header/HeaderSearch/HeaderSearch";
import useFetch from "../../hooks/useFetch";
import { Products } from "../../types/ProductTypes";
import { ProductsApi } from "../../api/products";
import { Cards } from "../../components/Cards/Cards";
import { globalStyles } from "../styles";
import { Loader } from "../../components/Loader/Loader";
import { debounce } from "../../utils";

const SearchPage = () => {
  const [searchValue, onChangeText] = useState("");
  const { data, isLoading, fetchData } = useFetch<Products>();

  const handleChange = async (text: string) => {
    onChangeText(text);

    const debouncedFetch = debounce(fetchData, 300);

    debouncedFetch(() => ProductsApi.getAllProducts(text));
  };

  useEffect(() => {
    (async () => {
      await fetchData(() => ProductsApi.getAllProducts());
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerLeft: () => <HeaderBack />,
          headerRight: () => (
            <HeaderSearch
              searchValue={searchValue}
              handleChange={handleChange}
            />
          ),
        }}
      />
      {isLoading && <Loader />}
      {!!data && <Cards products={data.products} />}
    </View>
  );
};

export default SearchPage;
