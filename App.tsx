import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Calender } from './src/components/molecules/Calendar';
import { Header } from './src/components/atoms/Header';
import { LimitContainer } from './src/components/molecules/LimitContainer';

export default function App() {
  const [text, setText] = useState('');
  console.log(text);
  return (
    <ScrollView>
      <Header text="ホーム"/>
      <LimitContainer onChangeText={(text) => setText(text)}/>
      <Calender />
    </ScrollView>
  );
}