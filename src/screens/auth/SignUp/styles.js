import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  termText: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.black,
  },
  termLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
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
