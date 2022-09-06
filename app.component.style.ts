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
    // PaddingBottom: 16,
    paddingLeft: 16,
    // FlexGrow: 1,
  },
  header: {
    paddingBottom: 16,
    flexDirection: 'row',
    paddingLeft: 4,
  },
});

export default styles;
