import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// navigators
import { HomeStackNavigator } from 'src/navigation/HomeStackNavigator';
// screens
import { DetailScreen } from 'src/screens/DetailScreen';
import { AddScreen } from 'src/screens/AddScreen';
// types
import { RootStackParamList } from 'src/types/navigation';
const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarLabel: '収支を追加',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: false,
          tabBarLabel: '詳細',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="dots-three-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
