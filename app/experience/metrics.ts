import { Platform } from 'react-native';

const rootSize = 16;
const baseSize = Math.sqrt(rootSize);
const calculateBorderWidth = () => {
  let thickness;

  if (Platform.OS === 'ios') {
    thickness = 1;
  } else if (Platform.OS === 'android') {
    thickness = 1.1;
  } else {
    thickness = 0.8;
  }
  return (baseSize / 4) * thickness;
};
const Metrics = {
  rootSize,
  baseUnit: baseSize,
  scale: 1.125,
  // This is for font size root "N"
  baseScaleNumber: 4,
  size: {
    shalf: baseSize * 0.5,
    s1: baseSize * 1,
    s2: baseSize * 2,
    s3: baseSize * 3,
    s4: baseSize * 4,
    s5: baseSize * 5,
    s6: baseSize * 6,
    s7: baseSize * 7,
    s8: baseSize * 8,
    s9: baseSize * 9,
    s10: baseSize * 10,
    s11: baseSize * 11,
    s12: baseSize * 12,
    s13: baseSize * 13,
    s14: baseSize * 14,
    s15: baseSize * 15,
    s16: baseSize * 16,
    s17: baseSize * 17,
    s18: baseSize * 18,
    s19: baseSize * 19,
    s20: baseSize * 20,
    s21: baseSize * 21,
    s22: baseSize * 22,
    s23: baseSize * 23,
    s24: baseSize * 24,
  },
  elevation: {
    e0: 0,
    e1: 1,
    e2: 2,
    e4: 4,
    e6: 6,
    e8: 8,
    e12: 12,
    e16: 16,
    e24: 24,
  },
  borderRadius: {
    none: baseSize * 0,
    S: baseSize * 1,
    N: baseSize * 2,
    L: baseSize * 3,
    XL: baseSize * 4,
    XXL: baseSize * 5,
    XXXL: baseSize * 10,
    FULL: baseSize * 50,
  },
  borderWidth: {
    s1: 1 * calculateBorderWidth(),
    s2: 2 * calculateBorderWidth(),
  },
  fontFamily: {
    Bold: 'DMSans-Bold',
    SemiBold: 'DMSans-SemiBold',
    Medium: 'DMSans-Medium',
    Light: 'DMSans-Light',
    Regular: 'DMSans-Regular',
  },
};

export default Metrics;
