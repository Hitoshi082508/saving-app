import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type Props = {
  totalPrice: string;
};
export const TotalPrice: React.FC<Props> = ({ totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.total}>合計</Text>
      <Text style={styles.price}>{`-${totalPrice}円`}</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 15,
    color: '#7B7B7B',
  },
  price: {
    fontSize: 20,
    color: '#4594D7',
    fontWeight: 'bold',
  },
});
