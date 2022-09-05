import {StyleSheet} from 'react-native';
import common from './common.style';
import theme from './theme.style';

export default StyleSheet.create({
  titleHeading: {
    ...common.headingText,
  },
  searchForm: {
    flexGrow: 0,
    flexShrink: 0,
    paddingBottom: 16,
  },
  searchFormSection: {
    paddingBottom: 10,
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
  },
  searchFormControl: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: 'space-between',
  },
  searchFormTitle: {
    ...common.formTitle,
    flexGrow: 0,
    flexShrink: 0,
    paddingBottom: 4,
  },
  searchFormSwitch: {
    flexGrow: 0,
    flexShrink: 0,
  },
  searchFormTextInput: {
    ...common.formTextInput,
    flexGrow: 0,
    flexShrink: 0,
    padding: 6,
  },
  searchResults: {
    flexGrow: 3,
    flexShrink: 3,
  },
  searchResultsTitle: {
    ...common.headingText,
    paddingBottom: 12,
  },
  searchResult: {
    paddingBottom: 8,
  },
  searchResultCell: {
    //
  },
});
