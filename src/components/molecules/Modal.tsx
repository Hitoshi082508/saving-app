import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { DetailInput } from './DetailInput';
import { Button } from 'src/components/atoms/Button';
export const Modal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      height: height.value,
      opacity: opacity.value,
    };
  });

  const changeModalState = () => {
    setModalVisible(!modalVisible);
  };

  const openModal = () => {
    setTimeout(changeModalState, 310);
    height.value = withTiming(300, { duration: 1000 });
    opacity.value = withTiming(1, { duration: 700 });
  };

  const closeModal = async () => {
    height.value = withTiming(0, { duration: 1000 });
    opacity.value = withTiming(0, { duration: 500 });
    setTimeout(changeModalState, 1000);
  };

  return (
    <>
      {modalVisible === false ? (
        <TouchableOpacity onPress={openModal}>
          <Ionicons name="add-circle" size={60} color="#4594D7" style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <Animated.View style={[styles.modalContainer, style]}>
          <TouchableOpacity onPress={closeModal}>
            <AntDesign name="downcircle" size={40} color="#4594D7" style={styles.icon} />
          </TouchableOpacity>
          <DetailInput label="支払い内容" onChange={(item) => setItem(item)} />
          <DetailInput label="使用金額" onChange={(price) => setPrice(price)} />
          <Button text="この内容で登録する" />
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 20,
  },
  modalContainer: {
    width: '90%',
    height: 0,
    margin: '5%',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    width: 1000,
    height: 50,
    backgroundColor: 'red',
  },
});
