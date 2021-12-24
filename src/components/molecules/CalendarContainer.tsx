import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
// type
import { CalendarDateType } from '../../types';
type Props = {
  className?: string;
};
export const CalendarContainer: React.FC<Props> = ({ className }) => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1
  const date = currentDate.getDate();

  const today = `${year}-${month}-${date}`;

  const money = 1000;
  const moneyStyle = money > 0 ? '#3CB371' : '#dc143c'

  return (
    <Calendar
      monthFormat={'yyyy年 MM月'}
      enableSwipeMonths={true}
      style={styles.calendarContainer}
      dayComponent={({ date }: { date: CalendarDateType }) => {
        return (
          <TouchableOpacity style={styles.container}>
            <Text
              style={{
                textAlign: 'center',
                color:
                  today === date.dateString ? '#67AEDF' : date.month === month ? '#000' : '#CCC',
              }}
            >
              {date.day}
            </Text>
            <Text style={[styles.money, { color: moneyStyle }]}>{money}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: 100
  },
  container: {
    height: 35,
  },
  day: {
    textAlign: 'center',
  },
  money: {
    fontSize: 11,
    marginTop: 4,
  },
});

LocaleConfig.locales.jp = {
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  monthNamesShort: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
};
LocaleConfig.defaultLocale = 'jp';
