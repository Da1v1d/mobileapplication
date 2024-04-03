import { Stack, router } from "expo-router";
import { Providers } from "../provider";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
const RootLayout = () => {
  return (
    <Providers>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login/index"
          options={{
            headerTitle: "Login",
            presentation: "modal",
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <Ionicons name="close" size={26} color="black" />
              </Pressable>
            ),
          }}
        />
      </Stack>
    </Providers>
  );
};

export default RootLayout;
