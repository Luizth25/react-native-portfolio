import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderColor: "#0050A1",
    borderWidth: 2,
  },
  text: {
    color: "#E5E5E5",
    fontSize: 24,
  },
});
