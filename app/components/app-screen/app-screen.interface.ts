import { NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from 'react-native';

import Colors from '@app-experience/colors';

type IStatusBarProps = {
  color?: string
  barstyle?: 'dark-content' | 'light-content'
  transluent?: boolean
}

export const AppScreenPresets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      flex: 1,
      height: '100%',
      backgroundColor: Colors.white,
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   */
  scroll: {
    outer: {
      flex: 1,
      height: '100%',
      backgroundColor: Colors.white,
    } as ViewStyle,
    inner: { justifyContent: 'flex-start', alignItems: 'stretch' } as ViewStyle,
  },

  main: {
    flex: 1,
    backgroundColor: Colors.white,
    position: 'relative',
  } as ViewStyle,
};

export interface AppScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * One of the different types of presets.
   */
  preset?: keyof typeof AppScreenPresets

  /**
   * An optional background color
   */
  backgroundColor?: string

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean

  /**
   * Should show Navigation Bar or not
   */
  showsNavigationBar?: boolean

  /**
   * indicates the absolute view
   */
  absoluteView?: () => JSX.Element

  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  /**
   * indicates whether keyboard should persist on tap, default is "never"
   */
  keyboardShouldPersistTaps?: 'always' | 'handled' | 'never'

  statusbar?: IStatusBarProps
}

export function isFixed(preset: keyof typeof AppScreenPresets | undefined) {
  // any of these things will make you scroll
  return preset == null || !preset.length || AppScreenPresets[preset] == null || preset === 'fixed';
}
