import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// component
import { Header } from 'src/components/atoms/Header';
// type
import { RootStackParamList } from 'src/types/navigation';
import { TodayLimitBlue } from 'src/components/atoms/TodayLimitBlue';
import { TodayLimitRed } from 'src/components/atoms/TodayLimitRed';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
};

export const DetailScreen: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  console.log(text);
  return (
    <ScrollView>
      <Header text="詳細" back={() => navigation.navigate('Home')} icon />
      <TodayLimitBlue text="aa" />
      <TodayLimitRed text="aa" />
    </ScrollView>
  );
};
