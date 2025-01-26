import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import Colors from '@app-experience/colors';
import Metrics from '@app-experience/metrics';

export const style = StyleSheet.create({
  container: {
    bottom: 25,
  } as ViewStyle,
  versionTextStyle: {
    fontFamily: Metrics.fontFamily.Medium,
    fontSize: Metrics.size.s4,
    color: Colors.lightgray.darkest,
  } as TextStyle,
});
