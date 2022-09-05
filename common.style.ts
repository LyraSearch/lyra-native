import type {ColorValue, TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import theme from './theme.style';

const commonStyle = StyleSheet.create({
  text: {
    fontSize: theme.fontSizeMedium,
    color: theme.colorWhite,
  },
  headingText: {
    color: theme.colorWhite,
    fontSize: theme.fontSizeLarge,
    fontWeight: theme.fontWeightBold as 'bold',
  },
  formTitle: {
    color: theme.colorWhite,
    fontSize: theme.fontSizeMedium,
    fontWeight: theme.fontWeightBold as 'bold',
  },
  formTextInput: {
    fontSize: theme.fontSizeMedium,
    color: theme.colorWhite,
    borderColor: theme.colorLightGray,
    borderWidth: theme.borderThick,
    borderRadius: theme.radiusNormal,
    backgroundColor: theme.colorGray,
  },
  textBold: {
    fontSize: theme.fontSizeMedium,
    fontWeight: theme.fontWeightExtraBold as 'bold',
  },
});

export default commonStyle;
