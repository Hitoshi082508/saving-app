import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CalendarDateType } from 'src/types';
import { RootStackParamList } from 'src/types/navigation';
type Props = {
  dateData: CalendarDateType;
  spendMoney: number;
  limitMoney: number;
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
};
export const CalendarChild: React.FC<Props> = ({
  dateData,
  spendMoney,
  limitMoney,
  navigation,
}) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  const today = `${year}-${month}-${date}`;
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail')}>
      {dateData.dateString === today ? (
        <View style={styles.todayContainer}>
          <Text style={styles.today}>{dateData.day}</Text>
        </View>
      ) : (
        <Text style={styles.day}>{dateData.day}</Text>
      )}
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
    width: 59,
    height: 85,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginBottom: -15,
  },
  day: {
    color: '#727272',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  todayContainer: {
    width: 25,
    height: 25,
    borderRadius: 22,
    backgroundColor: '#4594D7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  today: {
    color: '#fff',
    fontSize: 15,
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
