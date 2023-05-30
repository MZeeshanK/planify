import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 16,
  },
  blueBg: {
    backgroundColor: colors.blue,
  },
});

export default styles;
