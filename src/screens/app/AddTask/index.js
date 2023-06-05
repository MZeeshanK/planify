import React, { useState } from 'react';
import {
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import categories from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';

import firestore from '@react-native-firebase/firestore';

import moment from 'moment';

const AddTask = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBack = () => navigation.goBack();

  const onSubmit = () => {
    if (!title) {
      Alert.alert('Please describe the task');
      return;
    }

    if (moment(deadline).isBefore(new Date())) {
      Alert.alert('Dealine cannot be in the past');
      return;
    }
    setLoading(true);

    firestore()
      .collection('Tasks')
      .doc('ABC')
      .set({
        title,
        deadline,
        category,
      })
      .then(() => {
        setLoading(false);
        console.log('Task added!');
        navigation.navigate('Tasks');
        setTitle('');
        setDeadline(new Date());
        setCategory(null);
      })
      .catch(e => {
        console.log('Error adding task', e);
        setLoading(false);
        Alert.alert(e.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable hitSlop={8} style={styles.backContainer} onPress={handleBack}>
        <Image
          style={styles.icon}
          source={require('../../../assests/back.png')}
        />
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title type="thin">Add New Task</Title>

        <Text style={styles.label}>Describe the task</Text>
        <Input
          value={title}
          onChangeText={setTitle}
          outlined
          placeholder="Type here..."
        />

        <Text style={styles.label}>Type</Text>
        <Categories
          style={{ marginHorizontal: -24, marginTop: 24 }}
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />

        <Text style={styles.label}>Deadline</Text>
        <DateInput value={deadline} onChange={setDeadline} />

        <Button onPress={onSubmit} type="blue" style={{ marginHorizontal: 24 }}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text>Add Task</Text>}
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
