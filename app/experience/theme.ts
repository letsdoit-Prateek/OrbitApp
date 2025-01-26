// import { DefaultTheme } from '@react-navigation/native'
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

import Colors from './colors';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary.base,
    background: Colors.white,
    text: Colors.ink.darkest,
    border: Colors.sky.light,
  },
};

export default AppTheme;
