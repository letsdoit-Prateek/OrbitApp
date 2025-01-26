import React from 'react';

import { NativeStack } from '@app-helpers/interfaces';

import Containers from './containers';
import HomeContainer from '@app-containers/home/home-container';
import SearchContainer from '@app-containers/search/search-container';
import MainNavigation from './main.navigation';
import CommunityContainer from '@app-containers/community/community-container';
import CreateContainer from '@app-containers/create/create-container';
import ProfileContainer from '@app-containers/profile/profile-container';

const PublicNavigation = (PublicStack: NativeStack) => {
  console.log('I came here');
  return (
    <PublicStack.Group>
      <PublicStack.Screen
        name={Containers.MainScreen}
        component={MainNavigation}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name={Containers.HomeScreen}
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name={Containers.SearchScreen}
        component={SearchContainer}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name={Containers.CommunityScreen}
        component={CommunityContainer}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name={Containers.CreateScreen}
        component={CreateContainer}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name={Containers.ProfileScreen}
        component={ProfileContainer}
        options={{ headerShown: false }}
      />
    </PublicStack.Group>
  );
};

export default PublicNavigation;
