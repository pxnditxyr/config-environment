import { defaultMessages, defaultSpanishMessages } from '../../data/messages'
import { ConfigEnvironmentDatasource, IConfigEnviromentMethodsOptions } from '../../domain'

type TMethodNames = 'isRequired' | 'isString' | 'isNumber' | 'isBool' | 'isPort' | 'asString' | 'asNumber' | 'asBool' | 'get'
type TLanguageMessages = 'spanish' | 'english'
interface IOptions {
  languageMessages? : TLanguageMessages
}

export class ConfigEnvironment implements ConfigEnvironmentDatasource {
  constructor (
    private readonly value : string | undefined,
    private readonly key : string,
    private readonly languageMessages? : TLanguageMessages
  ) {}

  static get (
    key : string,
    options? : IOptions
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

  isRequired ( options? : IConfigEnviromentMethodsOptions ) : ConfigEnvironment {
    if ( this.value === undefined ) throw new Error( this.formatMessage( 'isRequired', options ) )
    return this
  }

  isString ( options? : IConfigEnviromentMethodsOptions ) : ConfigEnvironment {
    if ( typeof this.value !== 'string' ) throw new Error( this.formatMessage( 'isString', options ) )
    return this
  }

  isNumber ( options? : IConfigEnviromentMethodsOptions ) : ConfigEnvironment {
    if ( isNaN( Number( this.value ) ) ) throw new Error( this.formatMessage( 'isNumber', options ) )
    return this
  }

  isBool ( options? : IConfigEnviromentMethodsOptions ) : ConfigEnvironment {
    if ( this.value !== 'true' && this.value !== 'false' ) throw new Error( this.formatMessage( 'isBool', options ) )
    return this
  }

  isPort ( options? : IConfigEnviromentMethodsOptions ) : ConfigEnvironment {
    const port = Number( this.value )
    if ( isNaN( port ) || port < 0 || port > 65535 ) throw new Error( this.formatMessage( 'isPort', options ) )
    return this
  }

  asString ( options? : IConfigEnviromentMethodsOptions ) : string {
    if ( typeof this.value !== 'string' ) throw new Error( this.formatMessage( 'asString', options ) )
    return this.value
  }

  asNumber ( options? : IConfigEnviromentMethodsOptions ) : number {
    const number = Number( this.value )
    if ( isNaN( number ) ) throw new Error( this.formatMessage( 'asNumber', options ) )
    return number
  }

  asBool ( options? : IConfigEnviromentMethodsOptions ) : boolean {
    if ( this.value === 'true' ) return true
    if ( this.value === 'false' ) return false
    throw new Error( this.formatMessage( 'asBool', options ) )
  }


  private formatMessage (
    methodName : TMethodNames,
    options? : IConfigEnviromentMethodsOptions,
  ) : string {
    if ( options?.message ) return options.message
    let message = this.languageMessages === 'spanish' ? defaultSpanishMessages[ methodName ] : defaultMessages[ methodName ]
    message = message.replace( '[[type]]', `${ typeof this.value }` )
    message = message.replace( '[[key]]', `${ String( this.key ) }` )
    return message
  }

}
