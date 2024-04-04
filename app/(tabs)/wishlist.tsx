import { View } from "react-native";
import { globalStyles } from "../styles";
import { useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { router } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useWishlist } from "../../hooks/useWishlist";

const Whishlist = () => {
  const { wishlist } = useWishlist();
  const {
    userData: { username },
  } = useUser();


  useEffect(() => {
    if (!username) {
      router.push("/login");
    }
  }, []);

  return (
    <View style={globalStyles.container}>
      {wishlist && <Cards products={wishlist}></Cards>}
    </View>
  );
};

export default Whishlist;
