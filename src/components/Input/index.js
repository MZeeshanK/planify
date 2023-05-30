import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({...props}) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.midGrey}
      style={styles.input}
    />
  );
};

export default React.memo(Input);
