/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';

import Application from './app/app';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
      // App has been launched in the background by iOS, ignore
      return <Application.HeadlessApp />;
    }

    return <Application.App />;
  }



  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  AppRegistry.registerComponent(appName, () => HeadlessCheck);

