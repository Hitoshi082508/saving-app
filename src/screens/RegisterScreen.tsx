import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// type
import { RootStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
  route: RouteProp<RootStackParamList, 'Register'>;
};

export const RegisterScreen: React.FC<Props> = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text>サインアップページ</Text>
    </ScrollView>
  );
};
