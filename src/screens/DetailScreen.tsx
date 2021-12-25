import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// component
import { Header } from 'src/components/atoms/Header';
// type
import { RootStackParamList } from 'src/types/navigation';
import { TodayLimitBlue } from 'src/components/atoms/TodayLimitBlue';
import { ItemList } from 'src/components/molecules/ItemList';
import { Modal } from 'src/components/molecules/Modal';
import { TotalPrice } from 'src/components/atoms/TotalPrice';
import { TodayLimitBlueSub } from 'src/components/atoms/TodayLimitBlueSub';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
};

export const DetailScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header text="詳細" back={() => navigation.navigate('Home')} icon />
        <TodayLimitBlue text="aa" />
        <ItemList item="ケーキ" money={1000} />
        <Modal />
        <TotalPrice totalPrice="1000" />
        <TodayLimitBlueSub />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
    minHeight: '100%',
  },
});
