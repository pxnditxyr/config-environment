import { defaultSpanishMessages, defaultEnglishMessages } from '../../data'
import { TConfigEnvironmentDatasource } from '../../domain'


export const get : TConfigEnvironmentDatasource = (
  key,
  options
) => {

  const filledOptions = {
    required: false,
    type: 'string',
    defaultValue: undefined,
    defaultMessageLanguage: 'english',
    message: undefined,
    ...options
  }

  const defaultMessages = filledOptions.defaultMessageLanguage === 'spanish' ? { ...defaultSpanishMessages } : { ...defaultEnglishMessages }

  const value = process.env[ key ]

  if ( filledOptions.required && !value ) {
    const message = filledOptions.message ?? defaultMessages.isRequired.replace( '[[key]]', key )
    throw new Error( message )
  }

  if ( !value && filledOptions.defaultValue ) return filledOptions.defaultValue

  if ( filledOptions.type === 'string' ) return value

  if ( filledOptions.type === 'number' && value ) {
    try {
      const numberValue = parseFloat( value )
      if ( numberValue === Number.NaN ) throw new Error()
      return numberValue
    } catch ( error ) {
      const message = filledOptions.message ?? defaultMessages.asNumber.replace( '[[key]]', key )
      throw new Error( message )
    }
  }

  if ( filledOptions.type === 'boolean' && value ) {
    try {
      const booleanValue = value.toLowerCase()
      if ( booleanValue === 'true' ) return true
      if ( booleanValue === 'false' ) return false
      throw new Error()
    } catch ( error ) {
      const message = filledOptions.message ?? defaultMessages.asBool.replace( '[[key]]', key )
      throw new Error( message )
    }
  }

  if ( filledOptions.type === 'port' && value ) {
    try {
      const portValue = parseInt( value )
      if ( portValue === Number.NaN ) throw new Error()
      if ( portValue < 0 || portValue > 65535 ) throw new Error()
      return portValue
    } catch ( error ) {
      const message = filledOptions.message ?? defaultMessages.asNumber.replace( '[[key]]', key )
      throw new Error( message )
    }
  }

  return undefined
}
