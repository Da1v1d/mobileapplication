import { router } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderBack = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <Ionicons
        style={{ marginLeft: -5 }}
        name="chevron-back"
        size={28}
        color="black"
      />
    </Pressable>
  );
};
