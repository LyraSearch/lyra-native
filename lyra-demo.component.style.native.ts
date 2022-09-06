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
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0,
  },
  searchFormControl: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
    justifyContent: 'space-between',
  },
  searchFormLabel: {
    justifyContent: 'center',
  },
  searchFormTitle: {
    ...common.formTitle,
  },
  searchFormSwitch: {
    flexGrow: 0,
    flexShrink: 0,
  },
  searchFormTextInput: {
    ...common.formTextInput,
    flexGrow: 1,
    flexShrink: 0,
    padding: 6,
    marginLeft: 12,
  },
  searchFormNumberInput: {
    ...common.formTextInput,
    flexGrow: 0,
    flexShrink: 0,
    padding: 6,
    width: 100,
    textAlign: 'right',
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
