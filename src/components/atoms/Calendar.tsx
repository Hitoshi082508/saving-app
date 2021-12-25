import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CalendarDateType } from 'src/types';
type Props = {
  dateData: CalendarDateType;
  spendMoney: number;
  limitMoney: number;
};
export const CalendarChild: React.FC<Props> = ({ dateData, spendMoney, limitMoney }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.day}>{dateData.day}</Text>
      <View style={styles.limitContainer}>
        <Text style={styles.limitMoney}>{`${limitMoney}円`}</Text>
      </View>
      <View style={styles.spendContainer}>
        <Text style={styles.spendMoney}>{`-${spendMoney}円`}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 61,
    height: 90,
    paddingLeft: 3,
    paddingRight: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  day: {
    color: '#727272',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  limitContainer: {
    width: 50,
    height: 20,
    backgroundColor: '#4594D7',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  limitMoney: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  spendContainer: {
    width: 50,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#4594D7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spendMoney: {
    color: '#4594D7',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
