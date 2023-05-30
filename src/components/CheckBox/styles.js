import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 3,
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  checkedBox: {
    borderWidth: 2,
  },
  innerSquare: {
    backgroundColor: colors.purple,
    borderRadius: 1,
    height: 10,
    width: 10,
  },
});

export default styles;
