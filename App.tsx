import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Calender } from './src/components/molecules/Calendar';
import { Header } from './src/components/atoms/Header';

export default function App() {
  return (
    <ScrollView>
      <Header text="ホーム"/>
      <Calender />
    </ScrollView>
  );
}