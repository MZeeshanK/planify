import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  outlined: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey,
    marginHorizontal: 24,
  },
  text: {
    color: colors.black,
    fontSize: 15,
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default styles;
