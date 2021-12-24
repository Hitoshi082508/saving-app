import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import { HomeScreen } from 'src/screens/HomeScreen';
import { DetailScreen } from 'src/screens/DetailScreen';
// types
import { RootStackParamList } from 'src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
