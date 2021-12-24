import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
type Props = {
  onChangeText: (text: string) => void;
};
export const LimitInput: React.FC<Props> = ({ onChangeText }) => {
  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => onChangeText(text)}
      placeholder="50000円"
      keyboardType="number-pad"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    shadowColor: '#00000029',
    shadowOpacity: 6,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    marginTop: 15,
  },
});
