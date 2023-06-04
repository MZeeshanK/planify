import React from 'react';
import { SafeAreaView, Pressable, Image } from 'react-native';
import styles from './styles';

const AddTask = ({ navigation }) => {
  const handleBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable hitSlop={8} style={styles.backContainer} onPress={handleBack}>
        <Image
          style={styles.icon}
          source={require('../../../assests/back.png')}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
