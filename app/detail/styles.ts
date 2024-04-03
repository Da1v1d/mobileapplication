import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  paragraph: {},
  title: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  rating: {
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    gap: 5,
  },
  details: { fontSize: 14, alignItems: "center", display: "flex" },
  detail: { fontWeight: "300" },
  description: {
    borderWidth: 1,
    borderColor: "rgba(120, 103, 190, 0.3)",
    padding: 10,
    color: "rgba(120, 103, 190, 0.5)",
  },
});
