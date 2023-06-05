import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({ outlined, ...props }) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.midGrey}
      style={[styles.input, outlined ? styles.outlined : {}]}
    />
  );
};

export default React.memo(Input);
