import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Calender } from './src/components/molecules/Calendar';

export default function App() {
  return (
    <ScrollView>
      <Calender />
    </ScrollView>
  )
}