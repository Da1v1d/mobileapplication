import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 215,
    width: 164,
    justifyContent: "space-between",
  },
  image: {
    borderRadius: 10,
  },
  title: {
    textTransform: "uppercase",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  price: {
    fontWeight: "bold",
  },
  favourite: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 16,
  },
});
