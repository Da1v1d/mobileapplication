import { ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <ActivityIndicator
      style={{ width: "100%", minHeight: "70%" }}
      color={"black"}
    ></ActivityIndicator>
  );
};
