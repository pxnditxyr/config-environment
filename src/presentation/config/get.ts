import { IGetOptions } from '../../domain'
import { ConfigEnvironment } from './config-environment'

export const get =  ( key : string, options? : IGetOptions ) : ConfigEnvironment => {
  const value = process.env[ key ]
  return new ConfigEnvironment(
    value,
    key,
    options?.languageMessages
  )
}
