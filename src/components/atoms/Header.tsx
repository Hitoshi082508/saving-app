import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
type Props = {
  text: string;
  icon?: boolean;
  back?: () => void;
};
export const Header: React.FC<Props> = ({ text, icon, back }) => {
  const aa = false;
  return (
    <LinearGradient
      colors={['#74D9FF', '#26ABFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <TouchableOpacity>
        {icon ? (
          <AntDesign name="left" size={24} style={styles.icon} onPress={back} />
        ) : (
          <MaterialCommunityIcons size={24} style={styles.noneIcon} />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.margin}></View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  margin: {
    width: 40,
  },
  icon: {
    color: '#FFF',
    paddingLeft: 15,
    marginBottom: 12,
  },
  noneIcon: {
    width: 40,
  },
});
