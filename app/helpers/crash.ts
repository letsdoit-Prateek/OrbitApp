import Crashes, { ExceptionModel } from 'appcenter-crashes'

export const setup = async () => {
  await Crashes.setEnabled(true)
}

export const reportError = (error: Error) => {
  const errorModel = ExceptionModel.createFromError(error)

  Crashes.trackError(errorModel)
}
