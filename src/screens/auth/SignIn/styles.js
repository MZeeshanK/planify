import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  footerText: {
    textAlign: 'center',
    color: colors.grey,
    fontSize: 15,
    marginTop: 24,
  },
  footerLink: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});
