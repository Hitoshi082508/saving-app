import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Item } from 'src/components/atoms/Item';
type Props = {
  item: string;
  money: number;
};
export const ItemList: React.FC<Props> = ({ item, money }) => {
  return (
    <>
      <Item item={item} money={money} />
      <Item item={item} money={money} />
      <Item item={item} money={money} />
      <Item item={item} money={money} />
      <Item item={item} money={money} />
      <Item item={item} money={money} />
      <Item item={item} money={money} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
});
