import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
type Props = {
  item: string;
  money: number;
};
export const Item: React.FC<Props> = ({ item, money }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item}</Text>
      <Text style={styles.money}>{`-${money}円`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    paddingRight: '5%',
    paddingLeft: '5%',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  money: {
    fontSize: 15,
    color: '#4594D7',
  },
});
