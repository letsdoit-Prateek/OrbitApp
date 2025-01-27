/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigationContext } from '@app-contexts/navigation.context';
import Colors from '@app-experience/colors';
import Metrics from '@app-experience/metrics';
import Containers from './containers';
import HomeContainer from '@app-containers/home/home-container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchContainer from '@app-containers/search/search-container';
import CreateContainer from '@app-containers/create/create-container';
import CommunityContainer from '@app-containers/community/community-container';
import ProfileContainer from '@app-containers/profile/profile-container';

const Main = createBottomTabNavigator();

const TabLabel = ({ color, children }) => {
  return <Text style={{ color }}>{children}</Text>;
};

const MainNavigation = () => {
  const insets = useSafeAreaInsets();
  console.log(insets.bottom)
  const { initialRoute } = useNavigationContext();
  console.log(initialRoute);
  console.log('I came to this screen');
  return (
    <>
      <Main.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          tabBarActiveTintColor: Colors.primary.darkest,
          tabBarStyle: { height: 55 + insets.bottom },
          tabBarLabelStyle: style.tabBarLabel,
          tabBarLabel: TabLabel,
        }}
      >
        <Main.Screen
          name={Containers.HomeScreen}
          component={HomeContainer}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) =>
                <Ionicons name={`home${focused ? '' : '-outline'}`} color={color} size={size} />,

          }}
        />
        <Main.Screen
          name={Containers.SearchScreen}
          component={SearchContainer}
          options={{
            headerShown: false,
            headerTitle: '',
            tabBarLabel: 'Discover',
            tabBarIcon: ({ focused, color, size }) =>
              <Ionicons name={`search${focused ? '' : '-outline'}`} color={color} size={size} />,
          }}
        />
        <Main.Screen
          name={Containers.CreateScreen}
          component={CreateContainer}
          options={{
            headerShown: false,
            headerTitle: '',
            tabBarLabel: 'Create',
            tabBarIcon: ({ focused, color, size }) =>
              <Ionicons name={`add-circle${focused ? '' : '-outline'}`} color={color} size={size} />,
          }}
        />
        <Main.Screen
          name={Containers.CommunityScreen}
          component={CommunityContainer}
          options={{
            headerShown: false,
            headerTitle: '',
            tabBarLabel: 'Community',
            tabBarIcon: ({ focused, color, size }) =>
              <Ionicons name={`people${focused ? '' : '-outline'}`} color={color} size={size} />,
          }}
        />
        <Main.Screen
          name={Containers.ProfileScreen}
          component={ProfileContainer}
          options={{
            headerShown: false,
            headerTitle: '',
            tabBarLabel: 'Me',
            tabBarIcon: ({ focused, color, size }) =>
              <Ionicons name={`person-circle${focused ? '' : '-outline'}`} color={color} size={size} />,
          }}
        />
      </Main.Navigator>
    </>
  );
};

const style = StyleSheet.create({
  tabBarLabel: {
    color: Colors.secondary.darkest,
    fontSize: Metrics.size.s1 * 3,
    fontWeight: '400',
    marginBottom: Metrics.size.s1,
  } as TextStyle,
});

export default MainNavigation;
