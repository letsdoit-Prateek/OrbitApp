import React from 'react';
import { Platform, Text, View } from 'react-native';
import Colors from '../../experience/colors';
import { AppScreen } from '@app-components/app-screen/app-screen'

function CommunityContainer() {
    console.log('Home Screen')
  return (
    <AppScreen
      style={{ flex: 1 }}
      preset="scroll"
      statusbar={{
        color: Colors.primary.base,
        barstyle: Platform.OS === 'android' ? 'light-content' : 'dark-content',
        transluent: false,
      }}
    >
        <View>
            <Text style={{ color: Colors.blue.base }}>
                Community Container
            </Text>
        </View>
    </AppScreen>
  );
}

export default CommunityContainer;
