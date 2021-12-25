import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
// type
import { CalendarDateType } from 'src/types/index';
import { RootStackParamList } from 'src/types/navigation';
import { CalendarChild } from '../atoms/Calendar';
type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
};
export const CalendarContainer: React.FC<Props> = ({ navigation }) => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  const today = `${year}-${month}-${date}`;

  const money = 1000;
  const moneyStyle = money > 0 ? '#3CB371' : '#dc143c';

  return (
    <Calendar
      monthFormat={'yyyy年 MM月'}
      enableSwipeMonths={true}
      dayComponent={({ date }: { date: CalendarDateType }) => {
        return (
          <CalendarChild
            dateData={date}
            limitMoney={3000}
            spendMoney={2000}
            navigation={navigation}
          />
        );
      }}
    />
  );
};

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
