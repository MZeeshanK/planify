import React from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';

const CheckBox = ({isChecked, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isChecked ? styles.checkedBox : {}]}>
      {isChecked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

export default React.memo(CheckBox);
