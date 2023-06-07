import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  box: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 22,
    marginHorizontal: 24,
    marginVertical: 72,
  },
  title: {
    color: colors.purple,
    fontSize: 16,
  },
  subtitle: {
    color: 'rgba(64,53,115,.5)',
    fontSize: 12,
    marginTop: 8,
  },
});
