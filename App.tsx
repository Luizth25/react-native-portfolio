import { StyleSheet, View } from "react-native";
import MainScreen from "./src/screen/MainScreen";
import { SkillScreen } from "./src/screen/SkillScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainScreen /> */}
      <SkillScreen />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    backgroundColor: "#000709",
  },
});
