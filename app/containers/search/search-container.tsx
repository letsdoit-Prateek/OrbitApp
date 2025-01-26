import AppScreen from '@app-components/app-screen/app-screen';
import Colors from '@app-experience/colors';
import React from 'react';
import { Platform, Text, View } from 'react-native';

function SearchContainer() {
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
                Search Container
            </Text>
        </View>
    </AppScreen>
  );
}

export default SearchContainer;
