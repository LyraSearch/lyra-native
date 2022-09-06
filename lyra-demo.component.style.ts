import {StyleSheet, Platform} from 'react-native';
import common from './common.style';
import theme from './theme.style';

export default function createStyles(dimensions) {
  const compact = Platform.OS !== 'web' || dimensions.width < 480;
  console.log('D', dimensions, compact);
  return StyleSheet.create({
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
      flexDirection: compact ? 'column' : 'row',
      flexGrow: 0,
      flexShrink: 0,
    },
    searchFormControl: {
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: compact ? 'row' : 'column',
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4,
      paddingBottom: 4,
      justifyContent: compact ? 'space-between' : 'flex-start',
    },
    searchFormLabel: {
      justifyContent: compact ? 'center' : 'flex-start',
      flexDirection: compact ? 'column' : 'row',
      flexGrow: 0,
      flexShrink: 0,
      // FlexBasis: 'content',
      // FlexWrap: 'nowrap',
    },
    searchFormTitle: {
      ...common.formTitle,
      // TODO: these didn't exist in mobile
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 4,
      paddingRight: 6,
      // PaddingLeft: 2,
      // paddingRight: 2,
    },
    searchFormSwitch: {
      flexDirection: compact ? 'row' : 'column',
      justifyContent: compact ? 'flex-end' : 'center',
      flexGrow: 1,
    },
    searchFormSwitchInput: {
      flexGrow: 0,
      flexShrink: 0,
    },
    searchFormTextInput: {
      ...common.formTextInput,
      flexGrow: compact ? 1 : 0,
      flexShrink: 0,
      padding: 6,
      marginLeft: compact ? 12 : 0,
    },
    searchFormNumberInput: {
      ...common.formTextInput,
      flexGrow: 0,
      flexShrink: 0,
      padding: 6,
      width: compact ? 100 : undefined, // TODO not on web
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
}
