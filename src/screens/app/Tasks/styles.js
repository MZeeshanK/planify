import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 8,
  },
  tasktext: {
    color: colors.black,
    marginLeft: 8,
  },
  checked: {
    textDecorationLine: 'line-through',
  },
});
