import { FlatList, Pressable, Text, View } from "react-native";
import { CategoryBadge } from "../../components/Badge/CategoryBadge/CategoryBadge";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { getProductCategories } from "../../api/products";
import { globalStyles } from "../styles";
import { CategoryType } from "../../types/CategoryTypes";

const Categories = () => {
  const router = useRouter();
  const { fetchData, isLoading, data: categories } = useFetch<CategoryType[]>();

  useEffect(() => {
    (async () => {
      router.push("/login");
      await fetchData(() => getProductCategories());
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading && <Text>Loading...</Text>}
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
