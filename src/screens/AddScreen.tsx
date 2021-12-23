import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// type
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Add'>;
  route: RouteProp<RootStackParamList, 'Add'>;
};

export const AddScreen: React.FC<Props> = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text>追加ページだよ</Text>
    </ScrollView>
  );
};