import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';
// components
import { LimitInput } from 'src/components/atoms/LimitInput';
type Props = {
  onChangeText: (text: string) => void;
};
export const MonthLimitContainer: React.FC<Props> = ({ onChangeText }) => {
  return (
    <LinearGradient
      colors={['#4594D7', '#4594D7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.text}>先月の目標は達成できましたか？</Text>
      <Text style={styles.text}>今月の目標を教えてください😊</Text>
      <LimitInput onChangeText={onChangeText} />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 130,
    borderRadius: 5,
    margin: '5%',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
