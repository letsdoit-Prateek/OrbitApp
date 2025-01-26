import AsyncStorage from '@react-native-async-storage/async-storage'

const _storeData = async (key: string, value: any): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const _retrieveData = async (key: string): Promise<null | any> => {
  try {
    const item = await AsyncStorage.getItem(key)

    return item !== null ? JSON.parse(item) : null
  } catch (error) {
    console.log(error)
    return null
  }
}

const _removeData = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const _clearAll = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const Storage = {
  set: _storeData,
  get: _retrieveData,
  delete: _removeData,
  burn: _clearAll,
}

export default Storage
