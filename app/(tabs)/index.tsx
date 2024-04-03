import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HomeCarousel } from "../../components/Carousel/HomeCarousel/HomeCarousel";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import { globalStyles } from "../styles";
import { useEffect, useState } from "react";
import { getProductByCategory } from "../../api/products";
import { Products } from "../../types/ProductTypes";
import { Cards } from "../../components/Cards/Cards";
import { Link } from "expo-router";

const Home = () => {
  const [data, setData] = useState<Products["products"][] | null>(null);
  useEffect(() => {
    (async () => {
      const data = await Promise.all([
        getProductByCategory("smartphones", 4),
        getProductByCategory("laptops", 4),
        getProductByCategory("fragrances", 4),
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
      <FlatList
        style={{ marginTop: 20 }}
        data={data}
        contentContainerStyle={{ rowGap: 50 }}
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
