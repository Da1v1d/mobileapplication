import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../styles";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { AuthApi } from "../../api/auth";
import { useUser } from "../../hooks/useUser";
import { router } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { UserType } from "../../types/UserTypes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { fetchData, data, error } = useFetch<UserType>();
  const { setUserData } = useUser();

  const login = async () => {
    await fetchData(() => AuthApi.login(username, password));
  };

  // TODO  CHANGE THIS
  useEffect(() => {
    if (data) {
      setUserData(data);
      router.back();
    }
  }, [data]);

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

      <View style={styles.form}>
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
