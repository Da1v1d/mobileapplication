import { Image, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../styles";
import { useEffect } from "react";
import { Link, router } from "expo-router";
import { useUser } from "../../../hooks/useUser";
import { AuthApi } from "../../../api/auth";
import { styles } from "./styles";

const Profile = () => {
  const {
    userData: { username, image, gender },
    setUserData,
  } = useUser();

  useEffect(() => {
    if (!username) {
      router.push("/login");
      return;
    }
  }, []);

  return (
    <View style={globalStyles.container}>
      {!username ? (
        <View style={styles.unauthorized_container}>
          <Link style={styles.link} href={"/login"}>
            LOGIN
          </Link>
        </View>
      ) : (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: image! }} />
          <View style={{ gap: 10 }}>
            <Text>{username}</Text>
            <Text>{gender}</Text>
          </View>
        </View>
      )}
      {username && (
        <Pressable
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 1.2 : 1 }] },
            styles.logout,
          ]}
          onPress={() => {
            setUserData({
              username: null,
              email: null,
              firstName: null,
              lastName: null,
              gender: null,
              image: null,
            });
            AuthApi.logout();
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Profile;
