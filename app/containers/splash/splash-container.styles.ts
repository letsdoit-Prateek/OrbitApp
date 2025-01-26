import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import Colors from '@app-experience/colors';
import Metrics from '@app-experience/metrics';

export const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  image: {
    height: Metrics.size.s15 * 3,
    width: Metrics.size.s15 * 3,
  } as ImageStyle,
  versionStyle: {
    bottom: Metrics.size.s15,
    display: 'flex',
    alignItems: 'center',
  } as ViewStyle,
});
