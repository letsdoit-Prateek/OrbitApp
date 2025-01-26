import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import Colors from '@app-experience/colors';
import Metrics from '@app-experience/metrics';

export const style = StyleSheet.create({
  headerModalStyle: {
    marginTop: -Metrics.size.s13,
  } as ViewStyle,
  headerStyle: {
    backgroundColor: Colors.white,
    paddingRight: Metrics.size.s4,
  } as ViewStyle,
  navTitle: {
    alignItems: 'flex-start',
  } as ViewStyle,
  titleStyle: {
    color: Colors.primary.darkest,
    fontWeight: '500',
    fontSize: 20,
  } as TextStyle,
});
