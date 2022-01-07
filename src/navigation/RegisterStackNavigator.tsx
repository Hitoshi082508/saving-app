import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import { LoginScreen } from 'src/screens/LoginScreen';
import { RegisterScreen } from 'src/screens/RegisterScreen';
import { SelectScreen } from 'src/screens/SelectScreen';
// types
import { RootStackParamList } from 'src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Select" component={SelectScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
