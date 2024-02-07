import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "../screen/MainScreen";
import SkillScreen from "../screen/SkillScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

const BottomTabsRoutes = () => {
  return (
    <Navigator>
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="#E5E5E5" size={size} />
          ),
          headerStyle: {
            backgroundColor: "#001424",
            borderBottomColor: "#0050A1",
            borderWidth: 1,
          },
          title: "Main",
          headerTintColor: "#E5E5E5",
          tabBarStyle: {
            backgroundColor: "#001424",
            borderTopColor: "#004D99",
            borderWidth: 1,
          },
        }}
        name="home"
        component={MainScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color="#E5E5E5" size={size} />
          ),
          headerStyle: {
            backgroundColor: "#001424",
            borderBottomColor: "#0050A1",
            borderWidth: 1,
          },
          title: "Skill",
          headerTintColor: "#E5E5E5",
          tabBarStyle: {
            backgroundColor: "#001424",
            borderTopColor: "#004D99",
            borderWidth: 1,
          },
        }}
        name="skills"
        component={SkillScreen}
      />
    </Navigator>
  );
};

export default BottomTabsRoutes;
