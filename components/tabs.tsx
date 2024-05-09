import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home/home";

const Tab = createBottomTabNavigator();

function Tabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute' }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;