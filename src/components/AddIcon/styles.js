import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    margin: 8,
    borderRadius: 100,
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  plus: {
    color: colors.white,
    fontSize: 32,
    marginTop: -4,
    fontWeight: '600',
  },
});
