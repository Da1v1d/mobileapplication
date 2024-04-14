import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HomeCarousel } from "../../components/Carousel/HomeCarousel";
import { FlatList, Text, View } from "react-native";
import { globalStyles } from "../styles";
import { useEffect, useState } from "react";
import { ProductsApi } from "../../api/products";
import { ProductsType } from "../../types/ProductTypes";
import { Cards } from "../../components/Cards/Cards";
import { Link } from "expo-router";
import { Loader } from "../../components/Loader";

const Home = () => {
  const [data, setData] = useState<ProductsType["products"][] | null>(null);

  useEffect(() => {
    // ! Byyyyy What's this ? Are you sure about this ?
    (async () => {
      const data = await Promise.all([
        ProductsApi.getProductByCategory("smartphones", 4),
        ProductsApi.getProductByCategory("laptops", 4),
        ProductsApi.getProductByCategory("fragrances", 4),
      ]);
      setData([
        data[0].data.products,
        data[1].data.products,
        data[2].data.products,
      ]);
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      <GestureHandlerRootView>
        <HomeCarousel />
      </GestureHandlerRootView>
      {!data && <Loader />}
      <FlatList
        style={{ marginTop: 30 }}
        data={data}
        contentContainerStyle={{ rowGap: 50, paddingBottom: 30 }}
        renderItem={({ item, index }) => (
          <>
            <View
              style={{
                paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                {item[0].category}
              </Text>
              <Link
                style={{
                  color: "rgba(120, 103, 190, 1)",
                  textDecorationLine: "underline",
                  fontWeight: "500",
                }}
                href={`/catalog/${item[0].category}`}
              >
                SEE ALL
              </Link>
            </View>
            <Cards key={index} products={item}></Cards>
          </>
        )}
      />
    </View>
  );
};

export default Home;
