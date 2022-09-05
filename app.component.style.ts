import {StyleSheet} from 'react-native';
import theme from './theme.style';
import common from './common.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorGray,
    // AlignItems: 'center',
    // justifyContent: 'center',
    color: theme.colorWhite,
  },
  app: {
    backgroundColor: theme.colorGray,
    color: theme.colorWhite,
    flex: 1,
  },
  pageTitle: {
    ...common.headingText,
    paddingTop: 8,
    paddingBottom: 16,
  },
});

export default styles;
