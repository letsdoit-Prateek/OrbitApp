import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

/**
 * Describe your component here
 */
export const CustomText = ({ style, ...props }): JSX.Element => {
  const getFontFamily = (type: string) => {
    switch (type) {
      case '400':
        return 'DMSans-Medium';
      case '500':
        return 'DMSans-Medium';
      case '600':
        return 'DMSans-SemiBold';
      case '700':
        return 'DMSans-Bold';
      case '800':
        return 'DMSans-Bold';
      default:
        return 'DMSans-Regular';
    }
  };

  const filterFontWeight = (style?: TextStyle | TextStyle[]): TextStyle => {
    if (Array.isArray(style)) {
      return style.map((s) => {
        const { fontWeight, ...rest } = s;

        return rest;
      }) as unknown as TextStyle;
    }

    if (style) {
      const { fontWeight, ...rest } = style;

      return rest;
    }
    return {};
  };

  const filteredStyle = filterFontWeight(style);

  return (
    <RNText
      {...props}
      style={[
        { fontFamily: getFontFamily(style?.fontWeight ? style.fontWeight : 'normal') },
        filteredStyle,
      ]}
    />
  );
};
