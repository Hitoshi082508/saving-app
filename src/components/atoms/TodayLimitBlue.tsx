import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
type Props = {
  text: string;
};
export const TodayLimitBlue: React.FC<Props> = ({ text }) => {
  return (
    <LinearGradient
      colors={['#4594D7', '#4594D7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.subText}>本日の利用可能金額</Text>
      <Text style={styles.text}>3000円</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 65,
    margin: '5%',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 12,
    color: '#fff',
  },
});
