import {StyleSheet, Platform} from 'react-native';
import theme from './theme.style';
import common from './common.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorBlack,
    color: theme.colorWhite,
    padding: 10,
    paddingTop: Platform.OS === 'web' ? 10 : 4,
  },
  iosSafeArea: {
    backgroundColor: theme.colorBlack,
    flex: 1,
  },
  pageTitle: {
    ...common.headingText,
    fontSize: theme.fontSizeHuge,
    paddingLeft: 16,
  },
  header: {
    paddingBottom: 16,
    flexDirection: 'row',
    paddingLeft: 4,
  },
});

export default styles;
