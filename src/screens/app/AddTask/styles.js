import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    // flex: 1,
  },

  backContainer: {
    padding: 24,
  },
  icon: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 13,
    marginHorizontal: 24,
    fontWeight: '500',
    color: colors.black,
    marginTop: 10,
  },
});
