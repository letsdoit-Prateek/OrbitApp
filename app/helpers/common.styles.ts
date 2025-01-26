import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import Colors from '@app-experience/colors'
import Metrics from '@app-experience/metrics'

export const style = StyleSheet.create({
  actionItem: {
    height: Metrics.size.s15,
    justifyContent: 'center',
  } as ViewStyle,
  actionItemBorder: {
    borderBottomWidth: Metrics.borderWidth.s1,
    borderColor: Colors.sky.light,
  } as ViewStyle,
  actionItemText: {
    color: Colors.ink.darkest,
  } as TextStyle,
  amountSeparator: {
    gap: Metrics.size.s3,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  amountText: {
    color: Colors.black,
    fontSize: Metrics.size.s4,
    fontWeight: '500',
  } as TextStyle,

  amountTimeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Metrics.size.s1,
  } as ViewStyle,

  avtarText: {
    color: Colors.white,
    fontSize: Metrics.size.s3 + 2,
    fontWeight: '500',
  } as TextStyle,

  calculateGuidelinesText: {
    color: Colors.black,
    fontSize: Metrics.size.s3,
    fontWeight: '400',
    lineHeight: Metrics.size.s4,
  } as TextStyle,

  calculatorAmountTitle: {
    color: Colors.black,
    fontSize: Metrics.size.s3 * 1.1,
    fontWeight: '500',
  } as TextStyle,
  calculatorBase: {
    padding: Metrics.size.s2,
    flex: 1,
    backgroundColor: Colors.lightgray.dark,
  } as ViewStyle,
  calculatorGuidelinesContainer: {
    gap: Metrics.size.s3,
    flexDirection: 'row',
    paddingRight: Metrics.size.s1,
  } as ViewStyle,

  calculatorGuidelinesPoint: {
    color: Colors.black,
    fontSize: Metrics.size.s3,
    fontWeight: '400',
  } as TextStyle,

  calculatorText: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: Metrics.size.s3,
    lineHeight: Metrics.size.s5,
    textAlign: 'justify',
  } as TextStyle,
  cardHeading: {
    fontSize: Metrics.size.s3 + 2,
    fontWeight: '600',
    color: Colors.black,
  } as TextStyle,
  contTwo: {
    backgroundColor: Colors.white,
    flex: 1,
  } as ViewStyle,
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  } as ViewStyle,
  defaultAvatar: {
    backgroundColor: Colors.primary.base,
    borderColor: Colors.sky.base,
    borderWidth: Metrics.borderWidth.s2,
    width: Metrics.size.s4 * 2,
    height: Metrics.size.s4 * 2,
    borderRadius: Metrics.borderRadius.FULL,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  gainText: { fontSize: 16, color: Colors.black, fontWeight: 'bold' } as TextStyle,

  header: {
    backgroundColor: Colors.primary.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Metrics.size.s2,
    paddingBottom: Metrics.size.s3,
    borderBottomLeftRadius: Metrics.borderRadius.XXXL,
    borderBottomRightRadius: Metrics.borderRadius.XXXL,
    paddingHorizontal: Metrics.size.s5,
  } as ViewStyle,

  headerText: {
    color: Colors.white,
    fontSize: Metrics.size.s4,
    fontWeight: '600',
  } as TextStyle,
  icon: {
    width: Metrics.size.s8,
    height: Metrics.size.s8,
    marginRight: Metrics.size.s1,
    borderRadius: (Metrics.size.s10 + 2) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  } as ImageStyle,

  iconContainer: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.whiteSmoke.lightest,
  } as ViewStyle,

  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  } as ImageStyle,

  imageView: {
    // borderRadius: Metrics.size.s2,
    // borderColor: Colors.blue.base,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: Metrics.size.s18,
    // width: Metrics.size.s18,
    // borderWidth: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.FULL,
    borderColor: Colors.gray,
    justifyContent: 'center',
    height: Metrics.size.s15,
    overflow: 'hidden',
    marginBottom: Metrics.size.s1,
    padding: Metrics.size.s3 - 2,
    width: Metrics.size.s15,
  } as ViewStyle,

  pieDataAlignment: { justifyContent: 'center', alignItems: 'center' } as ViewStyle,

  serviceComponent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: Metrics.size.s1 / 2,
  } as ViewStyle,

  serviceContainer: {
    padding: Metrics.size.s1,
    // elevation: Metrics.elevation.e2,
    // borderRadius: Metrics.borderRadius.N,
    backgroundColor: Colors.white,
  } as ViewStyle,

  space: {
    marginBottom: Metrics.size.s3,
    gap: Metrics.size.s2,
  } as ViewStyle,

  spaceAdjustment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  spaceContainer: {
    gap: Metrics.size.s3,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  subTitle: {
    fontSize: Metrics.size.s3 + 2,
    fontWeight: '600',
    color: Colors.black,
    paddingLeft: Metrics.size.s2,
  } as TextStyle,

  tailStyle: {
    marginTop: Metrics.size.s1,
  } as ViewStyle,

  textContent: {
    fontSize: Metrics.size.s3,
    fontWeight: '400',
    color: Colors.black,
    lineHeight: Metrics.size.s4,
  } as TextStyle,

  textHeading: {
    fontSize: Metrics.size.s4 + 2,
    fontWeight: '700',
    color: Colors.black,
  } as TextStyle,

  textSideHeading: {
    fontSize: Metrics.size.s4,
    fontWeight: '600',
    color: Colors.black,
  } as TextStyle,

  tileHeader: {
    fontSize: Metrics.size.s2 + 3,
    fontWeight: '500',
    color: Colors.black,
    marginTop: Metrics.size.s1,
    textAlign: 'center',
    width: '100%',
  } as TextStyle,

  tileView: {
    width: '21%',
    paddingBottom: Metrics.size.s2,
    marginRight: '2%',
    marginLeft: '2%',
    display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: Metrics.size.s2,
  } as ViewStyle,

  warningText: {
    fontSize: Metrics.size.s3,
    fontWeight: '400',
    color: Colors.danger.dark,
  } as TextStyle,
})
