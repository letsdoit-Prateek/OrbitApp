import AppScreen from '@app-components/app-screen/app-screen';
import { Version } from '@app-components/version/version';
import NavigationHelper from '@app-helpers/navigation';
import Containers from '@app-navigations/containers';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { style } from './splash-container.styles';
import { useGlobalContext } from '@app-contexts/global.context';
import { useNavigation } from '@react-navigation/native';

function SplashContainer() {
    const { isLoggedIn } = useGlobalContext();
    const navigation = useNavigation();
    useEffect(() => {
        console.log('Navigating to MainScreen...');
        console.log(isLoggedIn);
        // NavigationHelper.reset(Containers.HomeScreen as never);
        navigation.navigate(Containers.MainScreen as never);
    }, [isLoggedIn]);
  return (
    <AppScreen preset="fixed" absoluteView={() => <Version containerStyle={style.versionStyle} />}>
        <View>
            <Text>
                Splash Container
            </Text>
        </View>
    </AppScreen>
  );
}

export default SplashContainer;
