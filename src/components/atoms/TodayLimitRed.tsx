import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
type Props = {
  text: string;
};
export const TodayLimitRed: React.FC<Props> = ({ text }) => {
  return (
    <LinearGradient
      colors={['#fff', '#fff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.subText}>残りの利用可能金額</Text>
      <Text style={styles.text}>3000円</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 65,
    margin: '5%',
    marginTop: -10,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FF1919',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF1919',
  },
  subText: {
    fontSize: 12,
    color: '#FF1919',
  },
});
