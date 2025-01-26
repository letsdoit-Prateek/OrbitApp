import { PickerItemProps } from '@react-native-picker/picker'

import { ALPHABETICAL, REGEX, REQUIRED } from './constants'

export const createOptions = function <T>(
  data: T[],
  labelKey: keyof T,
  valueKey: keyof T,
  othersKey?: keyof T,
  otherValue?: any,
): Option {
  const options: PickerItemProps[] = data.map(
    (d) =>
      ({
        label: d[labelKey],
        value: d[valueKey],
      } as PickerItemProps),
  )

  const emptyOption = othersKey ? data.find((d: T) => d[othersKey] === otherValue) : null

  return { options, emptyOption: emptyOption?.[valueKey] }
}

export type Option = {
  [x: string]: any
  options: PickerItemProps[]
  emptyOption: any
}

export const requiredRule = { value: true, message: REQUIRED }
export const alphabetical = { value: REGEX.alphabetical, message: ALPHABETICAL }
