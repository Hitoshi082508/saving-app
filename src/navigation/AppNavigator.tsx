import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// navigator
import { HomeStackNavigator } from './HomeStackNavigator';
//recoil
import { selector, useRecoilValue } from 'recoil';
import { userState } from 'src/recoil';
import { RegisterStackNavigator } from './RegisterStackNavigator';

const userData = selector({
  key: 'user',
  get: ({ get }) => {
    const user = get(userState);
    return user;
  },
});

export const AppNavigator = () => {
  const user = useRecoilValue(userData);

  return (
    <NavigationContainer>
      {user ? <HomeStackNavigator /> : <RegisterStackNavigator />}
    </NavigationContainer>
  );
};
