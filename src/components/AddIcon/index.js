import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const AddIcon = () => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('AddTask');

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default React.memo(AddIcon);
