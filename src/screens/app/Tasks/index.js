import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from './styles';

import Header from '../../../components/Header';
import AddIcon from '../../../components/AddIcon';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <ScrollView>
        <Text>Tasks</Text>
      </ScrollView>

      <AddIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
