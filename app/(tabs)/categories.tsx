import { FlatList, Pressable, View } from "react-native";
import { CategoryBadge } from "../../components/Badge/CategoryBadge/CategoryBadge";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { ProductsApi } from "../../api/products";
import { globalStyles } from "../styles";
import { CategoryType } from "../../types/CategoryTypes";
import { Loader } from "../../components/Loader";

const Categories = () => {
  const router = useRouter();
  const { fetchData, isLoading, data: categories } = useFetch<CategoryType[]>();

  useEffect(() => {
    (async () => {
      await fetchData(ProductsApi.getProductCategories);
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading && <Loader />}
      <FlatList
        data={categories}
        contentContainerStyle={{ rowGap: 20 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`catalog/${item}`)}>
            <CategoryBadge category={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Categories;
