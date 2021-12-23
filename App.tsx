import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Calender } from './src/components/molecules/Calendar';
import { Header } from './src/components/atoms/Header';
import { LimitInput } from './src/components/atoms/LimitInput';

export default function App() {
  const [text, setText] = useState('');
  console.log(text);
  return (
    <ScrollView>
      <Header text="ホーム"/>
      <LimitInput onChangeText={(text) => setText(text)} />
      <Calender />
    </ScrollView>
  );
}