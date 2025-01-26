import React from 'react';
import { Appbar } from 'react-native-paper';

import { getHeaderTitle } from '@react-navigation/elements';

import Colors from '@app-experience/colors';
import { isIOS } from '@app-helpers/functions';

import { INavbarProps } from './navbar.interface';
import { style } from './navbar.styles';

const NavBar = ({ navigation, route, options, back }: INavbarProps) => {
  let title = getHeaderTitle(options, route.name);

  title = title.replace(/([a-z])([A-Z])/g, '$1 $2');
  const RightComponent = options.headerRight;
  const isModal = options.presentation === 'modal';

  return (
    <Appbar.Header
      mode={'center-aligned'}
      style={[style.headerStyle, options.headerStyle, isIOS && isModal && style.headerModalStyle]}
      elevated={isModal ? true : options.headerShadowVisible}
    >
      {back ? (
        <Appbar.Action
          icon={'chevron-back-outline'}
          isLeading
          iconColor={Colors.ink.darker}
          onPress={navigation.goBack}
        />
      ) : null}
      <Appbar.Content title={title} titleStyle={style.titleStyle} style={style.navTitle} />
      {options.headerRight && <RightComponent canGoBack={false} />}
    </Appbar.Header>
  );
};

export default NavBar;
