import type {ColorValue, TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import theme from './theme.style';

// Type CommonStyle = {};

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
    fontWeight: theme.fontWeightBold as 'bold',
  },
  formTextInput: {
    color: theme.colorWhite,
    borderColor: theme.colorLightGray,
    borderWidth: theme.borderThick,
    borderRadius: theme.radiusNormal,
  },
  textBold: {
    fontWeight: theme.fontWeightExtraBold as 'bold',
  },
});

export default commonStyle;
