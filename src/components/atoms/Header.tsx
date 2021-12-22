import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
type Props = {
  className?: string;
  text: string;
};
export const Header: React.FC<Props> = ({ className, text }) => {
  return (
    <LinearGradient
      colors={['#74D9FF', '#26ABFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 45,
    color: '#fff',
  },
});
