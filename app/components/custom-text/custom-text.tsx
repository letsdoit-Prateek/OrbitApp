import React from 'react';
import { Text as RNText } from 'react-native';

/**
 * Describe your component here
 */
export const CustomText = ({ style, ...props }): JSX.Element => {

  return (
    <RNText
      {...props}
      style={[
        { fontFamily: 'normal'},
        style,
      ]}
    />
  );
};
