import { Tabs, useRouter } from "expo-router";
import { Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const TabsLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontWeight: "500" },
        tabBarActiveTintColor: "rgba(120, 103, 190, 1)",
        tabBarInactiveTintColor: "rgba(120, 103, 190, 0.5)",
        headerLeft: () => (
          <Image
            style={{ marginLeft: 15 }}
            width={20}
            source={require("../../assets/icons/logo.png")}
          />
        ),
        headerRight: () => (
          <Pressable onPress={() => router.push("search")}>
            <Feather
              name="search"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "Home",

          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerTitle: "CATEGORIES",
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          headerTitle: "WISHLIST",
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          headerTitle: "PROFILE",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user" size={24} color={color} />
          ),
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
