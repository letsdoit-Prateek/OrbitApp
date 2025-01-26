import { useEffect } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'

import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

import StorageService from '@app-services/storage.service'

export const requestUserPermission = async () => {
  try {
    let permissionStatus = false

    if (Platform.OS === 'ios') {
      const authStatus: FirebaseMessagingTypes.AuthorizationStatus =
        await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL

      if (enabled) {
        permissionStatus = true
        console.log('iOS Authorization status:', authStatus)
      }
    } else {
      const androidStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )

      if (androidStatus === 'granted') {
        console.log('Android Authorization status:', androidStatus)
        permissionStatus = true
      }
    }

    if (permissionStatus) {
      const token = await messaging().getToken()

      return StorageService.save.saveFCMToken(token)
    }
  } catch (error: any) {
    console.log(error?.message)
  }
}

export const SetupPushNotification = (navigate: any) => {
  console.log(navigate)

  useEffect(() => {
    requestUserPermission()
  }, [])

  useEffect(() => {
    /** When app is in foreground and user receives any push notification */
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(JSON.stringify(remoteMessage))
      StorageService.save.setHasNewNotifications(true)
    })

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log(JSON.stringify(remoteMessage))
    })

    /**
     * When app is in background, user receives any push notification,
     * and user launches app by clicking on that push notification
     */
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage) {
        if (remoteMessage?.data?.deeplink) {
          // @TODO deeplink handler or navigate to a screen
        }
        console.log(JSON.stringify(remoteMessage))
      }
    })

    /**
     * When app is in quit state (closed), user receives any push notification,
     * and user launches app by clicking on that push notification
     */
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          if (remoteMessage?.data?.deeplink) {
            // @TODO deeplink handler or navigate to a screen
          }
          console.log(JSON.stringify(remoteMessage))
        }
      })

    return () => {
      unsubscribe()
    }
  }, [])
}
