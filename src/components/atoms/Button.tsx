import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
type Props = {
  text: string;
};
export const Button: React.FC<Props> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#4594D7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
