import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

import Header from '../../../components/Header';
import AddIcon from '../../../components/AddIcon';
import Title from '../../../components/Title';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
      </ScrollView>

      <AddIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
