import {StyleSheet} from 'react-native';
import common from './common.style';
import theme from './theme.style';

export default StyleSheet.create({
  // Container: {
  //   flex: 1,
  //   paddingVertical: theme.CONTAINER_PADDING,
  //   alignItems: 'center'
  // },
  titleHeading: {
    ...common.headingText,
  },
  searchForm: {
    flexGrow: 0,
    // FlexShrink: 1,
    paddingBottom: 8,
  },
  searchFormControl: {
    // Flex: 1,
    flexDirection: 'row',
  },
  searchFormSection: {
    paddingBottom: 10,
    // Flex: 0,
  },
  searchFormTitle: {
    ...common.formTitle,
    flexGrow: 0,
    paddingRight: 10,
  },
  searchFormSwitch: {
    flexGrow: 1,
  },
  searchFormTextInput: {
    ...common.formTextInput,
    flexGrow: 1,
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
  // TitleTextInput: {
  //   padding: theme.TEXT_INPUT_PADDING,
  //   backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  //   alignSelf: 'stretch'
  // },
  // textAreaTitle: {
  //   fontSize: theme.FONT_SIZE_MEDIUM,
  //   alignSelf: 'flex-start',
  //   padding: 10,
  //   fontWeight: theme.FONT_WEIGHT_LIGHT,
  //   fontStyle: 'italic'
  // },
  // textArea: {
  //   padding: theme.TEXT_INPUT_PADDING,
  //   backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  //   alignSelf: 'stretch',
  //   flex: 1
  // }
});
