import { ParamListBase, StackNavigationState, TypedNavigator } from '@react-navigation/native'
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types'

export type NativeStack = TypedNavigator<
  never,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ({
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NativeStackNavigatorProps) => JSX.Element
>

export type Nomads = {
  image: string;
  name: string;
  followerCount: number;
}

export type Community = {
  image: string;
  postCount: number,
  firstHeading: string,
  secondHeading: string
}

export type HashTags = {
  image: string,
  type: string,
  count: number
}