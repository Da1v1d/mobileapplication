import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../styles";
import { styles } from "./styles";
import { useState } from "react";
import { AuthApi } from "../../api/auth";
import { useUser } from "../../hooks/useUser";
import { router } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useUser();

  const login = async () => {
    const user = await AuthApi.login(username, password);
    setUserData(user.data);
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={120}
      style={{
        ...globalStyles.container,
        ...styles.cotnainer,
      }}
    >
      <View style={styles.logo}>
        <Text style={styles.login}>LOG IN</Text>
        <Image source={require("../../assets/icons/big_logo.png")} />
      </View>

      <View style={{ width: "100%", rowGap: 10 }}>
        <Text style={styles.label}>
          UserName <Text style={styles.labelrequired}>*</Text>
        </Text>
        <TextInput
          onChangeText={setUsername}
          aria-label="Username"
          style={styles.input}
        />
        <Text style={{ ...styles.label, marginTop: 10 }}>
          Password <Text style={styles.labelrequired}>*</Text>
        </Text>
        <TextInput
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Pressable style={styles.button} onPress={login}>
        <Text style={{ color: "white" }}>LOG IN</Text>
      </Pressable>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
};

export default Login;
