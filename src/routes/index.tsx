import { NavigationContainer } from "@react-navigation/native";
import BottomTabsRoutes from "./bottom-tabs.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer>
  );
};

export default Routes;
