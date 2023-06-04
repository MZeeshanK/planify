import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import AddIcon from '../../../components/AddIcon';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>

      <AddIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
