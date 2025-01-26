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

export type ITrackScreenPayload = {
  screen: string
  user_id?: string
  properties?: any
}

export type ITrackClickPayload = {
  event: string
  user_id?: string
  properties?: any
}

export type ITrackExternalLinkPayload = {
  to: string
  user_id?: string
  properties?: any
}

export enum AuthType {
  LOGIN = 'Login',
  REGISTRATION = 'Registration',
  LOGOUT = 'Logout',
}

export type ITrackUserAuthPayload = {
  mode: AuthType
  status: string
}

export enum InputType {
  TEXT = 'Text',
  DATE = 'Date',
  SELECT = 'Select',
  MULTISELECT = 'MultiSelect',
  MULTISELECT_BUTTONS = 'MultiSelectButtons',
  RADIOBUTTON = 'RadioButton',
  SINGLESELECT = 'SINGLESELECT',
}

export enum CardHeader {
  Test = 'Psychometric Test',
  Counselling = 'Career Counselling',
  Journey = 'Education Journey',
  SkillBuilding = 'Skill Building',
  CareerLib = 'Career Library',
  PortfolioAnalyzer = 'Portfolio Analyzer',
  MutualFund = 'Mutual Fund',
  EduCost = 'Edu Cost Calculator',
  EduLoan = 'Education Loan',
  FixedDeposit = 'Fixed Deposit',
  EduLoanCalc = 'EduLoan Calculator',
  SIPCalc = 'SIP Calculator',
  FDCalc = 'FD Calculator',
  LumpSumpCalc = 'Lumpsum Calculator',
  CompareMF = 'Compare MF',
  FilterMF = 'Filter MF',
  Investment = 'Investment Portfolio',
  Basket = 'Suggested Basket',
  College = 'College Listing',
}
