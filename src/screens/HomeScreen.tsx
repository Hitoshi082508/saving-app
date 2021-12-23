import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// component
import { CalendarContainer } from '../components/molecules/CalendarContainer';
import { Header } from '../components/atoms/Header';
import { LimitContainer } from '../components/molecules/LimitContainer';
// type
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Header text="ホーム" />
      <LimitContainer onChangeText={(text) => setText(text)} />
      <TouchableOpacity onPress={() => navigation.navigate('Detail') }>
        <CalendarContainer />
      </TouchableOpacity>
    </ScrollView>
  );
};