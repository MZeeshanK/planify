import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import styles from './styles';
import categories from '../../../constants/categories';

import Header from '../../../components/Header';
import AddIcon from '../../../components/AddIcon';
import Title from '../../../components/Title';
import CheckBox from '../../../components/CheckBox';
import Categories from '../../../components/Categories';

import firestore from '@react-native-firebase/firestore';

import { useSelector, useDispatch } from 'react-redux';

import { setToUpdate } from '../../../store/tasks';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.data);

  const [category, setCategory] = useState(null);
  const [filteredTask, setFilteredTask] = useState([]);

  useEffect(() => {
    if (category && category !== 'All') {
      const filteredTasks = tasks.filter(task => task?.category === category);
      setFilteredTask(filteredTasks);
    } else {
      setFilteredTask(tasks);
    }
  }, [tasks, category]);

  const ontaskUpdate = item => {
    firestore()
      .collection('Tasks')
      .doc(item?.uid)
      .update({
        checked: !item?.checked,
      })
      .then(() => {
        dispatch(setToUpdate(item));
      });
  };

  const renderTasks = ({ item }) => (
    <View style={styles.row}>
      <CheckBox isChecked={item?.checked} onPress={() => ontaskUpdate(item)} />
      <Text style={[styles.tasktext, item?.checked ? styles.checked : {}]}>
        {item?.title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <FlatList
        data={filteredTask}
        ListHeaderComponent={
          <>
            <Title type="thin" style={{ marginBottom: 24 }}>
              To Do Tasks
            </Title>

            <Categories
              categories={[
                {
                  label: 'All',
                  value: 'All',
                },
                ...categories,
              ]}
              selectedCategory={category}
              onCategoryPress={setCategory}
            />
          </>
        }
        keyExtractor={item => item?.uid}
        renderItem={renderTasks}
      />

      <AddIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
