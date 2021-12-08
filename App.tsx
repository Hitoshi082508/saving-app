import React from 'react';
import { ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function App() {

  const day = [{date: 1}, {date: 2}, {date: 3}]

  return (
    <ScrollView>
      <Calendar
        monthFormat={'yyyy年 MM月'}
        enableSwipeMonths={true}
        style={{ marginTop: 100 }}
        onDayPress={(day) => {console.log('selected day', day)}}
      />
    </ScrollView>
  )
}

LocaleConfig.locales.jp = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
};
LocaleConfig.defaultLocale = 'jp';