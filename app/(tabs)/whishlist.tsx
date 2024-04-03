import { Text, View } from "react-native";
import { globalStyles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Product } from "../../types/ProductTypes";

const Whishlist = () => {
  const [wishlist, setWhishlist] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const whishlist = await AsyncStorage.getItem("wishlist");
      if (whishlist) setWhishlist(JSON.parse(whishlist));
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Whishlist Page</Text>
    </View>
  );
};

export default Whishlist;
