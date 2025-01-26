import * as React from 'react';

import { NavigationState } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

import Containers from '@app-navigations/containers';

const isMountedRef = React.createRef<any>();
const navigationRef = React.createRef<any>();

const navigate = (name: string, params?: any, resetStack: boolean = false) => {
  console.log('i came herre as well');
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
    if (resetStack) {
      navigationRef.current.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: Containers.MainScreen }, { name, params }],
        }),
      );
    } else {
      navigationRef.current.navigate(name, params);
    }
  }
};

const goBack = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
};

const reset = (screenName: string, params?: any) => {
  console.log('i came herre as well 2');

  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screenName, params }],
      }),
    );
  }
};

const resetWithRoutes = (navigatingList: Array<any>) => {
  if (isMountedRef.current && navigationRef.current) {
    const routes = navigatingList.map((navigating) => ({
      name: navigating.screen,
      params: navigating.params,
    }));

    navigationRef.current.dispatch(
      CommonActions.reset({
        index: navigatingList.length - 1,
        routes,
      }),
    );
  }
};

const resetWithState = (state: NavigationState) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.reset(state));
  }
};

const getActiveRouteName = (state: NavigationState): string => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state as never);
  }

  return route.name;
};


const NavigationHelper = {
  navigate,
  goBack,
  reset,
  resetWithRoutes,
  resetWithState,
  getActiveRouteName,
  navigationRef,
  isMountedRef,
};

export default NavigationHelper;
