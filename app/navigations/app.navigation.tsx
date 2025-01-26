/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from '@app-components/navbar/navbar';
import { NavigationProvider } from '@app-contexts/navigation.context';
import Containers from './containers';
import PublicNavigation from './public.navigation';
import SplashContainer from '@app-containers/splash/splash-container';
import { useGlobalContext } from '@app-contexts/global.context';

const AppStack = createNativeStackNavigator();
const AppNavigation = () => {

  const { setOnboarded } = useGlobalContext();

  const updateUserOnboarding = () => {
    setOnboarded(true);
  };
  useEffect(() => {
    updateUserOnboarding();
  }, []);
  return (
        <NavigationProvider>
          <AppStack.Navigator
            initialRouteName={Containers.SplashScreen}
            screenOptions={{
              gestureDirection: 'horizontal',
              gestureEnabled: true,
              header: (props) => <NavBar {...props} />,
            }}
          >
            <AppStack.Screen
              name={Containers.SplashScreen}
              component={SplashContainer}
              options={{ headerShown: false }}
            />
            {PublicNavigation(AppStack as any)}
          </AppStack.Navigator>
        </NavigationProvider>
  );
};

export default AppNavigation;
