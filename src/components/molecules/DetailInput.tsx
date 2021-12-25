import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
type Props = {
  label: string;
  onChange: (text: string) => void;
};
export const DetailInput: React.FC<Props> = ({ label, onChange }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.container}
        onChangeText={(text) => onChange(text)}
        placeholder="50000円"
        keyboardType="number-pad"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#8D8D8D',
  },
  label: {
    fontSize: 15,
    color: '#7B7B7B',
    marginTop: 15,
    marginBottom: 5,
  },
});
