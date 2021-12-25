import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// component
import { CalendarContainer } from 'src/components/molecules/CalendarContainer';
import { Header } from 'src/components/atoms/Header';
import { MonthLimitContainer } from 'src/components/molecules/MonthLimitContainer';
// type
import { RootStackParamList } from 'src/types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Header text="ホーム" />
      <MonthLimitContainer onChangeText={(text) => setText(text)} />
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <CalendarContainer />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
});
