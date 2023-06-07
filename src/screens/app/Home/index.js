import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';

import Header from '../../../components/Header';
import AddIcon from '../../../components/AddIcon';
import Title from '../../../components/Title';
import StatusCard from '../../../components/StatusCard';

import firestore from '@react-native-firebase/firestore';

import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from '../../../store/tasks';

import moment from 'moment';

const Home = ({ navigation }) => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);

  const [counts, setCounts] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('user', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = [];

        querySnapshot.forEach(documentSnapshot => {
          tasksList.push({
            uid: documentSnapshot.id,
            ...(documentSnapshot.data() || {}),
          });
        });

        dispatch(setTasks(tasksList));
      });
  }, [user, dispatch]);

  useEffect(() => {
    if (tasks?.length) {
      const highPriority = tasks.filter(
        task => task?.category === 'urgent' || task?.category === 'important',
      );

      const today = moment(new Date()).format('YYYY-MM-DD');
      const dueDeadline = tasks.filter(task => {
        const deadline = task?.deadline?.seconds * 1000;
        const formattedDeadline = moment(deadline).format('YYYY-MM-DD');

        return moment(formattedDeadline).isBefore(today);
      });

      const quickWin = tasks.filter(task => task?.category === 'quick_task');

      setCounts({
        highPriority: highPriority?.length,
        dueDeadline: dueDeadline?.length,
        quickWin: quickWin?.length,
      });
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>

        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts.highPriority} />
          <StatusCard
            label="Deadline"
            type="error"
            count={counts.dueDeadline}
          />
          <StatusCard label="Quick Win" count={counts.quickWin} />
        </View>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.title}>Check All my tasks</Text>
          <Text style={styles.subtitle}>
            See all tasks and filter them by category that you have selected
            when creating them.
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <AddIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
