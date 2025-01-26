import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Colors from '@app-experience/colors';
import { AppScreenPresets, AppScreenProps, isFixed } from './app-screen.interface';

const isIos = Platform.OS === 'ios';

const ScrollWrapper = ({ children, onScroll, scrollable = false, style = {}, statusbar }) => {
  let preset = AppScreenPresets.fixed;

  if (scrollable) {
    preset = AppScreenPresets.scroll;
    return (
      <KeyboardAvoidingView behavior={isIos ? 'padding' : 'height'} style={preset.outer}>
        <StatusBar
          translucent={statusbar?.translucent ?? false}
          barStyle={statusbar?.barstyle ?? 'dark-content'}
          backgroundColor={statusbar?.color ?? Colors.white}
        />
        <ScrollView
          scrollEnabled
          overScrollMode={'auto'}
          scrollEventThrottle={6}
          style={[preset.outer, { ...StyleSheet.flatten(style) }]}
          contentContainerStyle={[preset.outer, preset.inner]}
          onScroll={(event) => {
            onScroll && onScroll(event);
          }}
          bounces={false}
          keyboardShouldPersistTaps={'handled'}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  return (
    <KeyboardAvoidingView behavior={isIos ? 'padding' : 'height'} style={preset.outer}>
      <StatusBar
        barStyle={statusbar?.barstyle ?? 'dark-content'}
        backgroundColor={statusbar?.color ?? Colors.white}
      />
      <View style={[preset.outer, { ...StyleSheet.flatten(style) }]}>{children}</View>
    </KeyboardAvoidingView>
  );
};

export const AppScreen = (props: AppScreenProps) => {
  return (
    <SafeAreaView style={AppScreenPresets.main}>
      <ScrollWrapper
        scrollable={!isFixed(props.preset)}
        onScroll={props.onScroll}
        style={props.style}
        statusbar={props.statusbar}
      >
        {props.children}
      </ScrollWrapper>
      {props.absoluteView && <props.absoluteView />}
    </SafeAreaView>
  );
};

export default AppScreen;
