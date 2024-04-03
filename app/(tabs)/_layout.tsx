import { Tabs, useRouter } from "expo-router";
import { Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const TabsLayout = () => {
  const router = useRouter();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "Home",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/home.png")} />
          ),
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
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerTitle: "CATEGORIES",
          title: "Categories",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/categories.png")} />
          ),

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
      />
      <Tabs.Screen
        name="whishlist"
        options={{
          headerTitle: "WHISHLIST",
          title: "Whishlist",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/whishlist.png")} />
          ),
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
            <Pressable onPress={() => router.push("/search")}>
              <Feather
                name="search"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "PROFILE",
          title: "Profile",
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/profile.png")} />
          ),
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
      />
    </Tabs>
  );
};

export default TabsLayout;
