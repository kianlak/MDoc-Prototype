import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Gear, House, Stack } from "phosphor-react-native";

import { TabMap } from './types/tab-types';
import HomeScreen from "../screens/home/home";
import RecordingsScreen from '../screens/recordings/recordings';
import SettingsScreen from '../screens/settings/settings';

const Tab = createBottomTabNavigator<TabMap>();

const screenOptions = ({ route }: { route: { name: keyof TabMap } }) => ({
  tabBarIcon: ({ focused, color, size }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    const icons: { [key in keyof TabMap]: React.ReactNode } = {
      Home: <House size={size} color={color} weight={focused ? 'fill' : 'regular'} />,
      Recordings: <Stack size={size} color={color} weight={focused ? 'fill' : 'regular'} />,
      Settings: <Gear size={size} color={color} weight={focused ? 'fill' : 'regular'} />,
    };
    
    return icons[route.name];
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});

function Tabs(): React.ReactElement {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recordings" component={RecordingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;