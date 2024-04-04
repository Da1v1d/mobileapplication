import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cotnainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  login: {
    fontSize: 24,
    lineHeight: 28.8,
    fontWeight: "500",
  },
  logo: {
    width: "100%",
    rowGap: 30,
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    height: 52,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    borderColor: "rgba(230, 230, 230, 1)",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
  },
  labelrequired: {
    color: "red",
  },
  button: {
    backgroundColor: "rgba(120, 103, 190, 1)",
    width: "100%",
    borderRadius: 10,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});
