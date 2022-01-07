import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// type
import { RootStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<Props> = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text>ログインページ</Text>
    </ScrollView>
  );
};
