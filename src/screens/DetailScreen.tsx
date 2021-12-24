import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// type
import { RootStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
};

export const DetailScreen: React.FC<Props> = () => {
  const [text, setText] = useState('');
  console.log(text);
  return (
    <ScrollView>
      <Text>詳細ページだよ</Text>
    </ScrollView>
  );
};
