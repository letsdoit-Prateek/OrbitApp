import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '@app-components/custom-text/custom-text';

import { version } from '../../../package.json';
import { IVersionProps } from './version.interface';
import { style } from './version.styles';

/**
 * Describe your component here
 */
export const Version = (props: IVersionProps): JSX.Element => {


  return (
    <View style={[style.container, props?.containerStyle]}>
      <TouchableOpacity activeOpacity={0.6}>
        <CustomText style={style.versionTextStyle}>App Version v{version}</CustomText>
      </TouchableOpacity>
    </View>
  );
};
