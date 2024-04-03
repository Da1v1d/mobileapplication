import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
    position: "absolute",
    bottom: 0,
  },
  dot: {
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "white",
    width: 7,
    height: 7,
  },
});
