import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
type Props = {
  text?: string;
};
export const TodayLimitBlueSub: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>残りの利用可能額</Text>
      <Text style={styles.text}>900円</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 65,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#4594D7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4594D7',
  },
  subText: {
    fontSize: 12,
    color: '#4594D7',
  },
});
