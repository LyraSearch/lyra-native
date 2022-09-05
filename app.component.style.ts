import {StyleSheet} from 'react-native';
import theme from './theme.style';
import common from './common.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorBlack,
    color: theme.colorWhite,
    padding: 10,
  },
  iosSafeArea: {
    backgroundColor: theme.colorBlack,
    flex: 1,
  },
  pageTitle: {
    ...common.headingText,
    fontSize: theme.fontSizeHuge,
    paddingBottom: 16,
  },
});

export default styles;
