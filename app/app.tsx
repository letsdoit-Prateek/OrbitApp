/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { PaperProvider, configureFonts, adaptNavigationTheme } from 'react-native-paper';
import AppTheme from '@app-experience/theme';
import { NavigationContainer } from '@react-navigation/native';
import NavigationHelper from '@app-helpers/navigation';
import AppNavigation from '@app-navigations/app.navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GlobalProvider } from '@app-contexts/global.context';


function Wrapper(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { navigationRef } = NavigationHelper;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: AppTheme });
  const fontConfig = {
    fontFamily: 'DM Sans',
  };
  return (
    <ErrorBoundary>
        <PaperProvider
            theme={{
                ...LightTheme,
                fonts: configureFonts({ config: fontConfig }),
            }}
            settings={{
                icon: (props) => <Ionicons {...props} />,
            }}
        >
            <NavigationContainer
                ref={navigationRef}
            >
                <SafeAreaProvider>
                    <GlobalProvider>
                        <AppNavigation/>
                    </GlobalProvider>
                </SafeAreaProvider>
            </NavigationContainer>
        </PaperProvider>
    </ErrorBoundary>
  );
}

let App = Wrapper

const HeadlessApp = (): null => {
    useEffect(() => {
      SplashScreen.hide()
    }, [])
  
    return null
  }
  
  const Application = { HeadlessApp, App }
  
  export default Application
  

