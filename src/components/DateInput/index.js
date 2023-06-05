import React, { useState } from 'react';
import { Button, TouchableOpacity, Text, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import styles from './styles';

const DateInput = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const onDateOpen = () => {
    setOpen(true);
  };

  const dateValue = moment(value).format('DD/MM/YYYY');

  return (
    <>
      <TouchableOpacity onPress={onDateOpen} style={styles.outlined}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('../../assests/calendar.png')}
        />
        <Text style={styles.text}>{dateValue || 'Select Date'}</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={value => {
          setOpen(false);
          onChange(value);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(DateInput);
