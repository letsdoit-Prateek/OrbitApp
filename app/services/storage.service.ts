import Storage from '@app-helpers/storage';

const enum STORAGE_KEYS {
  USER_ONBOARDED = 'user_onboarded',
  USER_ID = 'user_id',
  USER_PROFILE = 'user_profile',
  HAS_NOTIFICATION = 'new_notification',
  FCM_TOKEN = 'fcm_token',
  DECRYPTED_TEXT = 'decrypted_text',
  JWT_TOKEN = 'jwt_token',
  FAILEDOTP_ATTEMPTS = 'failedotp_attempts',
  TOTALOTP_ATTEMPTS = 'totalotp_attempts',
  STUDENT_PROFILE = 'student_profile',
  STUDENT_PROFILE_ID = 'student_profile_id',
  PAYMENT_STATUS = 'payment_status',
  SUBSCRIPTION_ENABLED = 'subscription_enabled',
  IS_PROFILE_AVAILABLE = 'is_profile_available',
  INVESTOR_ID = 'investor_id',
  SCHEME_LIST = 'scheme_list',
  GROUPED_LIST = 'grouped_list',
  BIOMETRIC_KEY = 'biometric_key',
  ASK_BIOMETRIC = 'ask_biometric',
}

const check = {
  userOnboarded: async (): Promise<boolean | null> => {
    return await Storage.get(STORAGE_KEYS.USER_ONBOARDED);
  },
  getUserId: async (): Promise<string | null> => {
    return await Storage.get(STORAGE_KEYS.USER_ID);
  },
  getUserProfile: async (): Promise<any | null> => {
    return await Storage.get(STORAGE_KEYS.USER_PROFILE);
  },
  hasNewNotifications: async (): Promise<boolean> => {
    return await Storage.get(STORAGE_KEYS.USER_PROFILE);
  },
  getDecryptedText: async (): Promise<boolean> => {
    return await Storage.get(STORAGE_KEYS.DECRYPTED_TEXT);
  },
  getAuthToken: async (): Promise<string | null> => {
    return await Storage.get(STORAGE_KEYS.JWT_TOKEN);
  },
  getFailedOtpAttempts: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.FAILEDOTP_ATTEMPTS);
  },
  getStudentProfile: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.STUDENT_PROFILE);
  },
  getStudentProfileID: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.STUDENT_PROFILE_ID);
  },
  getPaymentStatus: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.PAYMENT_STATUS);
  },
  getSubscriptionStatus: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.SUBSCRIPTION_ENABLED);
  },

  getProfileAvailable: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.IS_PROFILE_AVAILABLE);
  },

  getInvestorId: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.INVESTOR_ID);
  },

  getSchemeList: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.SCHEME_LIST);
  },

  getGroupedList: async (): Promise<any> => {
    return await Storage.get(STORAGE_KEYS.GROUPED_LIST);
  },
  getBiometricStatus: async (): Promise<boolean> => {
    return await Storage.get(STORAGE_KEYS.BIOMETRIC_KEY);
  },
  getAskBiometric: async (): Promise<boolean> => {
    return await Storage.get(STORAGE_KEYS.ASK_BIOMETRIC);
  },
  getUserOnboard: async (): Promise<boolean> => {
    return await Storage.get(STORAGE_KEYS.USER_ONBOARDED);
  },
};

const save = {
  setUserOnboard: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.USER_ONBOARDED, value);
  },
  setUserId: async (value: string): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.USER_ID, value);
  },
  setUserProfile: async (profile: any): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.USER_PROFILE, profile);
  },
  setHasNewNotifications: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.HAS_NOTIFICATION, value);
  },
  saveFCMToken: async (value: string): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.FCM_TOKEN, value);
  },
  saveDecryptedText: async (text: string): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.DECRYPTED_TEXT, text);
  },
  setAuthToken: async (text: any): Promise<boolean> => {
    const result = await Storage.set(STORAGE_KEYS.JWT_TOKEN, text);

    return result;
  },
  saveFailedOtpAttempts: async (text: string): Promise<any> => {
    return await Storage.set(STORAGE_KEYS.FAILEDOTP_ATTEMPTS, text);
  },
  setStudentProfile: async (profile: any): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.STUDENT_PROFILE, profile);
  },
  setStudentProfileID: async (value: string): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.STUDENT_PROFILE_ID, value);
  },
  setPaymentStatus: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.PAYMENT_STATUS, value);
  },
  setSubscriptionStatus: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.SUBSCRIPTION_ENABLED, value);
  },

  setProfileAvailable: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.IS_PROFILE_AVAILABLE, value);
  },

  setInvestorId: async (value: number): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.INVESTOR_ID, value);
  },

  setSchemeList: async (value: any): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.SCHEME_LIST, value);
  },

  setGroupedList: async (value: any): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.GROUPED_LIST, value);
  },

  setBiometricStatus: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.BIOMETRIC_KEY, value);
  },
  setAskBiometric: async (value: boolean): Promise<boolean> => {
    return await Storage.set(STORAGE_KEYS.ASK_BIOMETRIC, value);
  },
};

const find = {};

const remove = {
  removeUser: async (): Promise<boolean> => {
    await Storage.delete(STORAGE_KEYS.USER_ONBOARDED);
    await Storage.delete(STORAGE_KEYS.USER_ID);
    await Storage.delete(STORAGE_KEYS.USER_PROFILE);
    await Storage.delete(STORAGE_KEYS.DECRYPTED_TEXT);
    await Storage.delete(STORAGE_KEYS.JWT_TOKEN);
    await Storage.delete(STORAGE_KEYS.STUDENT_PROFILE);
    await Storage.delete(STORAGE_KEYS.STUDENT_PROFILE_ID);
    await Storage.delete(STORAGE_KEYS.PAYMENT_STATUS);
    await Storage.delete(STORAGE_KEYS.SUBSCRIPTION_ENABLED);
    await Storage.delete(STORAGE_KEYS.IS_PROFILE_AVAILABLE);
    await Storage.delete(STORAGE_KEYS.INVESTOR_ID);
    await Storage.delete(STORAGE_KEYS.SCHEME_LIST);
    await Storage.delete(STORAGE_KEYS.GROUPED_LIST);
    await Storage.delete(STORAGE_KEYS.BIOMETRIC_KEY);
    await Storage.delete(STORAGE_KEYS.ASK_BIOMETRIC);
    return true;
  },
  removeBiometric: async (): Promise<boolean> => {
    await Storage.delete(STORAGE_KEYS.BIOMETRIC_KEY);
    return true;
  },
};

const removeAll = async () => {
  return await Storage.burn();
};

const StorageService = {
  check,
  save,
  find,
  remove,
  removeAll,
};

export default StorageService;
