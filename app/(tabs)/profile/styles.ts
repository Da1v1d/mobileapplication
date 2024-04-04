import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  unauthorized_container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    padding: 10,
    fontWeight: "500",
    color: "rgba(120, 103, 190, 1)",
  },
  image: {
    width: 60,
    height: 60,
  },
  logout: {
    width: "120%",
    padding: 10,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    left: 0,
  },
});
