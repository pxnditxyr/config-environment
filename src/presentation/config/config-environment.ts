import { defaultEnglishMessages, defaultSpanishMessages } from '../../data'

import {
  ConfigEnvironmentDatasource,
  IConfigEnvironmentAsBoolOptions,
  IConfigEnvironmentAsNumberOptions,
  IConfigEnvironmentAsPortOptions,
  IConfigEnvironmentAsStringOptions,
  IConfigEnvironmentIsRequiredOptions,
  IGetOptions,
  TLanguageMessages,
  TMethodNames
} from '../../domain'


export class ConfigEnvironment implements ConfigEnvironmentDatasource {
  constructor (
    private readonly value : string | undefined,
    private readonly key : string,
    private readonly languageMessages? : TLanguageMessages
  ) {}

  static get (
    key : string,
    options? : IGetOptions
  ) : ConfigEnvironment {
    const value = process.env[ key ]
    return new ConfigEnvironment(
      value,
      key,
      options?.languageMessages
    )
  }

  getValue () : string | undefined {
    return this.value
  }

  isRequired ( options? : IConfigEnvironmentIsRequiredOptions ) : ConfigEnvironment {
    if ( !this.value ) throw new Error( this.formatMessage( 'isRequired', options?.message ) )
    return this
  }

  asPort ( options? : IConfigEnvironmentAsPortOptions ) : number {
    const port = Number( this.value )
    if ( isNaN( port ) && ( options?.defaultValue ) ) {
      if ( options.defaultValue < 0 || options.defaultValue > 65535 )
        throw new Error( this.formatMessage( 'asPort', options?.message ) )
      return options.defaultValue
    }

    if ( isNaN( port ) || port < 0 || port > 65535 )
      throw new Error( this.formatMessage( 'asPort', options?.message ) )

    return port
  }

  asNumber ( options? : IConfigEnvironmentAsNumberOptions ) : number {
    const number = Number( this.value )
    if ( options?.defaultValue && isNaN( number ) ) return options.defaultValue
    if ( isNaN( number ) )
      throw new Error( this.formatMessage( 'asNumber', options?.message ) )
    return number
  }

  asBool ( options? : IConfigEnvironmentAsBoolOptions ) : boolean {
    if ( this.value === 'true' ) return true
    if ( this.value === 'false' ) return false
    if ( options?.defaultValue ) return options.defaultValue
    throw new Error( this.formatMessage( 'asBool', options?.message ) )
  }

  asString ( options? : IConfigEnvironmentAsStringOptions ) : string {
    if ( !this.value && options?.defaultValue ) return options.defaultValue
    if ( !this.value ) throw new Error( this.formatMessage( 'asString', options?.message ) )
    return this.value
  }

  private formatMessage (
    methodName : TMethodNames,
    message: string | undefined
  ) : string {
    if ( message ) return message
  console.log({ hola: this.languageMessages, defaultEnglishMessages, defaultSpanishMessages })
    console.log({ methodName })
    let defaultMessage = ( this.languageMessages === 'spanish' ) ? defaultSpanishMessages[ methodName ] : defaultEnglishMessages[ methodName ]
    console.log({ defaultMessage })
    defaultMessage = defaultMessage.replace( '[[type]]', `${ typeof this.value }` )
    defaultMessage = defaultMessage.replace( '[[key]]', `${ String( this.key ) }` )
    return defaultMessage
  }
}
